import { Client } from "@notionhq/client";
import { BlogPost } from "../@types/schema";

const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID ?? "";

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return response.results.map(pageToPostTransformer);
}

function pageToPostTransformer(page: any): BlogPost {
  let cover = "";

  if (page.cover?.type === "file") {
    cover = page.cover.file.url;
  } else if (page.cover?.type === "external") {
    cover = page.cover.external.url;
  }

  return {
    id: page.id,
    cover,
    title: page.properties.Name.title[0]?.plain_text ?? "",
    description: page.properties.Description.rich_text[0]?.plain_text ?? "",
    slug: page.properties.Slug.rich_text[0]?.plain_text ?? "",
    tags: page.properties.Tags.multi_select,
    date: page.properties.Date.date.start,
  };
}
