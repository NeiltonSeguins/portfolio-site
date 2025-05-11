import PageLayout from "@/components/PageLayout";
import { courses } from "@/components/Section/courses";

const Courses = () => {
  return (
    <PageLayout
      heading="Como instrutor eu já gravei inúmeros cursos na Alura"
      subheading="Principalmente sobre React, já contribuí com vários cursos, como contextAPI, testes, validação de formulários e muito mais."
      items={courses}
    />
  );
};

export default Courses;
