export const revalidate = 86400;
import { getContent } from "@/services/services";
import PageLayout from "@/components/PageLayout";
import { CardItem } from "@/@types/schema";
import { formatDate } from "@/lib/utils";

const Courses = async () => {
  const { courses } = await getContent();

  const sortedCourses = courses.sort(
    (
      a: { date: string | number | Date },
      b: { date: string | number | Date }
    ) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  );

  const formattedCoursesDate = sortedCourses.map((course: CardItem) => ({
    ...course,
    date: formatDate(course.date),
  }));

  return (
    <PageLayout
      heading="Como instrutor eu já gravei inúmeros cursos na Alura"
      subheading="Principalmente sobre React, já contribuí com vários cursos, como contextAPI, testes, validação de formulários e muito mais."
      items={formattedCoursesDate}
    />
  );
};

export default Courses;
