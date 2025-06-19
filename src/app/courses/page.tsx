export const revalidate = 86400;
import ContentPage from "@/components/ContentPage";

const Courses = async () => {
  return (
    <ContentPage
      heading="Como instrutor eu já gravei vários cursos na Alura"
      subheading="Principalmente sobre React, já contribuí com vários cursos, como contextAPI, testes, validação de formulários e muito mais."
      contentKey="courses"
    />
  );
};

export default Courses;
