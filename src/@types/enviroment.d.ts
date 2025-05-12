declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NOTION_BLOG_DATABASE_ID: string;
      NOTION_ACCESS_TOKEN: string;
    }
  }
}

export {};
