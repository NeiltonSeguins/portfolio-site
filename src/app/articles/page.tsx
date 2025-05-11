import PageLayout from "@/components/PageLayout";
import { articles } from "@/components/Section/articles";

const Articles = () => {
  return (
    <PageLayout
      heading="Eu gosto de escrever, então geralmente tenho alto para compartilhar em texto"
      subheading="Eu costumo escrever em plataformas como o Medium e o Dev.To. Mas sempre que posso trago um conteúdo direto das minhas anotações de estudos"
      items={articles}
    />
  );
};

export default Articles;
