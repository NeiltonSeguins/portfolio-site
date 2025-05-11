import Profile from "@/components/Profile";
import Section from "@/components/Section";
import { courses } from "@/components/Section/courses";
import { articles } from "@/components/Section/articles";
import { projects } from "@/components/Section/projects";

const Home = () => {
  return (
    <main className="flex flex-1 flex-col items-start justify-center pt-12 gap-4">
      <Profile />
      <Section title="#Artigos" items={articles} />
      <Section title="#Cursos" items={courses} />
      <Section title="#Projetos" items={projects} />
    </main>
  );
};

export default Home;
