export const revalidate = 86400;
import Profile from "@/components/Profile";
import Section from "@/components/Section";
import { getContent, getPublishedBlogPosts } from "@/services/services";

const Home = async () => {
  const [articles, data] = await Promise.all([
    getPublishedBlogPosts(),
    getContent(),
  ]);

  const items = articles.map((article) => ({
    id: article.id,
    title: article.title,
    cover: article.cover,
    description: article.description,
    date: new Date(article.date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    link: `/articles/${article.slug}`,
  }));

  return (
    <main className="flex flex-1 flex-col items-start justify-center pt-12 gap-4">
      <Profile />
      <Section title="#Artigos" items={items} />
      <Section title="#Cursos" items={data.courses} />
      <Section title="#Projetos" items={data.projects} />
    </main>
  );
};

export default Home;
