
import PageLayout from "@/components/PageLayout";
import { getPublishedBlogPosts } from "@/services/services";

const Articles = async () => {
  const articles = await getPublishedBlogPosts();

  const items = articles.map((article) => ({
    id: article.id,
    title: article.title,
    description: article.description,
    date: article.date,
    link: `/articles/${article.slug}`,
  }));

  return (
    <PageLayout
      heading="Eu gosto de escrever, então geralmente tenho algo para compartilhar"
      subheading="Eu costumo escrever em plataformas como o Medium e o Dev.To. Mas sempre que posso trago um conteúdo direto das minhas anotações de estudos"
      items={items}
    />
  );
};

export default Articles;
