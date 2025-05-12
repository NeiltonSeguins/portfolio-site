export type Tag = {
  color: string;
  id: string;
  name: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  cover: string;
  title: string;
  description: string;
  tags: Tag[];
  date: string;
};

export type PostPage = {
  post: BlogPost;
  markdown: string;
};

export type Item = {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
};

export type CardItem = {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
};
