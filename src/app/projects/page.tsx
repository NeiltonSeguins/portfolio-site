import PageLayout from "@/components/PageLayout";
import { projects } from "../../components/Section/projects";

const Projects = () => {
  return (
    <PageLayout
      heading="Sempre que posso crio uns projetinhos, dá uma olhada!"
      subheading="Busco criar projetos para resolver problemas reais e que eu possa me divertir também com eles aprendendo algo útil."
      items={projects}
    />
  );
};

export default Projects;
