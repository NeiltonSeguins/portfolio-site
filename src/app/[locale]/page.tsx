
import Profile from "@/components/Profile";
import Section from "@/components/Section";
import { getContent, getPublishedBlogPosts } from "@/services/services";

import { getTranslations, setRequestLocale } from "next-intl/server";

const Home = async (props: { params: Promise<{ locale: string }> }) => {
  const params = await props.params;
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "HomePage" });

  const [articles, data] = await Promise.all([
    getPublishedBlogPosts(),
    getContent(),
  ]);

  const items = articles.map((article) => ({
    id: article.id,
    title: article.title,
    cover: article.cover,
    description: article.description,
    date: new Date(article.date).toLocaleDateString(locale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }),
    link: `/articles/${article.slug}`,
  }));

  return (
    <div className="flex flex-1 flex-col items-start justify-center pt-12 gap-4">
      <Profile />
      <Section title={t("articles")} items={items} />
      <Section title={t("courses")} items={data.courses} />
      <Section title={t("projects")} items={data.projects} />
    </div>
  );
};

export default Home;
