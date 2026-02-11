import ContentPage from "@/components/ContentPage";
import { getTranslations, setRequestLocale } from "next-intl/server";

const Projects = async (props: { params: Promise<{ locale: string }> }) => {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return (
    <ContentPage
      heading={t("heading")}
      subheading={t("subheading")}
      contentKey="projects"
      locale={locale}
    />
  );
};

export default Projects;
