import ContentPage from "@/components/ContentPage";

export const revalidate = 86400;

const Projects = async () => {
  return (
    <ContentPage
      heading="Sempre que posso crio ou participo de projetos open source"
      subheading="Desde colaborar em repositórios abertos até criar meus próprios projetos, gosto de contribuir com a comunidade de desenvolvedores."
      contentKey="projects"
    />
  );
};

export default Projects;
