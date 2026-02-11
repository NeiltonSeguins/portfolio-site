
import ContentPage from "@/components/ContentPage";
import { getTranslations, setRequestLocale } from "next-intl/server";

const Courses = async (props: { params: Promise<{ locale: string }> }) => {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "CoursesPage" });

  return (
    <ContentPage
      heading={t("heading")}
      subheading={t("subheading")}
      contentKey="courses"
      locale={locale}
    />
  );
};

export default Courses;
