import { getContent } from "@/services/services";
import PageLayout from "@/components/PageLayout";
import { CardItem } from "@/@types/schema";
import { formatDate } from "@/lib/utils";

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
    date: formatDate(item.date),
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
