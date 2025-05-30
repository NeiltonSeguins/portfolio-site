export const revalidate = 86400;
import { CardItem } from "@/@types/schema";
import PageLayout from "@/components/PageLayout";
import { formatDate } from "@/lib/utils";
import { getContent } from "@/services/services";

const Projects = async () => {
  const { projects } = await getContent();

  const sortedProjects = projects.sort(
    (
      a: { date: string | number | Date },
      b: { date: string | number | Date }
    ) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  );

  const formattedProjectsDate = sortedProjects.map((course: CardItem) => ({
    ...course,
    date: formatDate(course.date),
  }));

  return (
    <PageLayout
      heading="Sempre que posso crio uns projetinhos, dá uma olhada!"
      subheading="Busco criar projetos para resolver problemas reais e que eu possa me divertir também com eles aprendendo algo útil."
      items={formattedProjectsDate}
    />
  );
};

export default Projects;
