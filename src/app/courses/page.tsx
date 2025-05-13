export const revalidate = 60;
import { getContent } from "@/services/notion-service";
import PageLayout from "@/components/PageLayout";

const Courses = async () => {
  const data = await getContent();
  return (
    <PageLayout
      heading="Como instrutor eu já gravei inúmeros cursos na Alura"
      subheading="Principalmente sobre React, já contribuí com vários cursos, como contextAPI, testes, validação de formulários e muito mais."
      items={data.courses}
    />
  );
};

export default Courses;
