
import ArticlesContainer from "@/components/ArticlesContainer";
import { getPublishedBlogPosts } from "@/services/services";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "ArticlesPage" });

  return {
    title: t("heading"),
    description: t("subheading"),
    openGraph: {
      title: t("heading"),
      description: t("subheading"),
      type: "website",
      url: `/${locale}/articles`,
    },
    twitter: {
      card: "summary_large_image",
      title: t("heading"),
      description: t("subheading"),
    },
  };
}

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
