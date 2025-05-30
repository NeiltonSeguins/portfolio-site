import ContentPage from "@/components/ContentPage";

export const revalidate = 86400;

const Projects = async () => {
  return (
    <ContentPage
      heading="Sempre que posso crio uns projetinhos, dá uma olhada!"
      subheading="Busco criar projetos para resolver problemas reais e que eu possa me divertir também com eles aprendendo algo útil."
      contentKey="projects"
    />
  );
};

export default Projects;
