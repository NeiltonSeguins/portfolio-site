import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "../@types/schema";
import { cacheTag, cacheLife } from "next/cache";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  "use cache";
  cacheTag("posts");
  cacheLife("days");

  const fileNames = fs.readdirSync(articlesDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      id: slug,
      slug,
      cover: data.cover,
      title: data.title,
      description: data.description,
      tags: data.tags,
      date: data.date,
    };
  });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(
  slug: string
): Promise<(BlogPost & { content: string }) | null> {
  "use cache";
  cacheTag(`posts-${slug}`);
  cacheLife("days");

  const fullPath = path.join(articlesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id: slug,
    slug,
    cover: data.cover,
    title: data.title,
    description: data.description,
    tags: data.tags,
    date: data.date,
    content,
  };
}

export async function getContent() {
  "use cache";
  cacheTag("content");
  cacheLife("days");

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

  const data = await res.json();

  return {
    courses: data.courses,
    projects: data.projects,
  };
}
