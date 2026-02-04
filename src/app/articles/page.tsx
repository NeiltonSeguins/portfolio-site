
import PageLayout from "@/components/PageLayout";
import { getPublishedBlogPosts } from "@/services/services";

const Articles = async () => {
  const articles = await getPublishedBlogPosts();

  const items = articles.map((article) => ({
    id: article.id,
    title: article.title,
    description: article.description,
    date: new Date(article.date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }),
    link: `/articles/${article.slug}`,
  }));

  return (
    <PageLayout
      heading="Eu gosto de escrever, então geralmente tenho algo para compartilhar"
      subheading="Eu gosto de trazer ideias e pensamentos direto das minhas anotações e estudos"
      items={items}
    />
  );
};

export default Articles;
