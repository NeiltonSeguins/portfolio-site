/* eslint-disable @typescript-eslint/no-explicit-any */
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

export async function getPostBySlug(
  slug: string
): Promise<(BlogPost & { content: string }) | null> {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID ?? "";

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  const page = response.results[0];
  if (!page) return null;

  const post = pageToPostTransformer(page);
  const blocks = await notion.blocks.children.list({ block_id: page.id });

  const richTextToMarkdown = (richTextArray: any[]): string => {
    return richTextArray
      .map((rich) => {
        let text = rich.plain_text;

        if (!text) return "";

        if (rich.annotations?.code) {
          text = `\`${text}\``;
        }

        if (rich.annotations?.bold) {
          text = `**${text}**`;
        }

        if (rich.annotations?.italic) {
          text = `*${text}*`;
        }

        if (rich.annotations?.strikethrough) {
          text = `~~${text}~~`;
        }

        if (rich.href) {
          text = `[${text}](${rich.href})`;
        }

        return text;
      })
      .join("");
  };

  const markdown = blocks.results
    .map((block: any) => {
      switch (block.type) {
        case "paragraph":
          return richTextToMarkdown(block.paragraph.rich_text);
        case "heading_1":
          return `# ${richTextToMarkdown(block.heading_1.rich_text)}`;
        case "heading_2":
          return `## ${richTextToMarkdown(block.heading_2.rich_text)}`;
        case "heading_3":
          return `### ${richTextToMarkdown(block.heading_3.rich_text)}`;
        case "bulleted_list_item":
          return `- ${richTextToMarkdown(block.bulleted_list_item.rich_text)}`;
        case "numbered_list_item":
          return `1. ${richTextToMarkdown(block.numbered_list_item.rich_text)}`;
        case "code":
          const lang = block.code.language || "";
          return `\`\`\`${lang}\n${richTextToMarkdown(
            block.code.rich_text
          )}\n\`\`\``;
        case "image":
          const url =
            block.image.type === "external"
              ? block.image.external.url
              : block.image.file.url;
          return `![image](${url})`;
        default:
          return "";
      }
    })
    .join("\n\n");

  return {
    ...post,
    date: formatDate(post.date),
    content: markdown,
  };
}

export async function getContent() {
  const res = await fetch(
    "https://raw.githubusercontent.com/NeiltonSeguins/content-site/refs/heads/main/content.json",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw",
      },
    }
  );

  if (!res.ok) throw new Error("Erro ao carregar conteúdo");

  return res.json();
}

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
