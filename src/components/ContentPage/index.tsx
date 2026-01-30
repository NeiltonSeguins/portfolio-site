import { getContent } from "@/services/services";
import PageLayout from "@/components/PageLayout";
import { CardItem } from "@/@types/schema";

interface ContentListPageProps {
  contentKey: "courses" | "projects";
  heading: string;
  subheading: string;
}

const ContentPage = async ({
  contentKey,
  heading,
  subheading,
}: ContentListPageProps) => {
  const allContent = await getContent();

  const items: CardItem[] = (allContent[contentKey] as CardItem[]) || [];

  const sortedItems = [...items].sort((a: CardItem, b: CardItem) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const formattedItems = sortedItems.map((item: CardItem) => ({
    ...item,
    date: new Date(item.date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    link: item.link || "",
  }));

  return (
    <PageLayout
      heading={heading}
      subheading={subheading}
      items={formattedItems}
    />
  );
};

export default ContentPage;
