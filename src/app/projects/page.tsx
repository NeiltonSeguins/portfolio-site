export const revalidate = 60;
import PageLayout from "@/components/PageLayout";
import { getContent } from "@/services/notion-service";

const Projects = async () => {
  const data = await getContent();
  return (
    <PageLayout
      heading="Sempre que posso crio uns projetinhos, dá uma olhada!"
      subheading="Busco criar projetos para resolver problemas reais e que eu possa me divertir também com eles aprendendo algo útil."
      items={data.projects}
    />
  );
};

export default Projects;
