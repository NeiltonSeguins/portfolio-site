
import ArticlesContainer from "@/components/ArticlesContainer";
import { getPublishedBlogPosts } from "@/services/services";
import { getTranslations, setRequestLocale } from "next-intl/server";

const Articles = async (props: { params: Promise<{ locale: string }> }) => {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "ArticlesPage" });
  const articles = await getPublishedBlogPosts();

  const items = articles.map((article) => ({
    id: article.id,
    title: article.title,
    description: article.description,
    date: new Date(article.date).toLocaleDateString(locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }),
    link: `/articles/${article.slug}`,
    tags: article.tags,
  }));

  return (
    <ArticlesContainer
      heading={t("heading")}
      subheading={t("subheading")}
      initialItems={items}
    />
  );
};

export default Articles;
