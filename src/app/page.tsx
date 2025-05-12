import Profile from "@/components/Profile";
import Section from "@/components/Section";
import { courses } from "@/components/Section/courses";
import { projects } from "@/components/Section/projects";
import { getPublishedBlogPosts } from "@/services/notion-service";

const Home = async () => {
  const articles = await getPublishedBlogPosts();

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
      <Section title="#Cursos" items={courses} />
      <Section title="#Projetos" items={projects} />
    </main>
  );
};

export default Home;
