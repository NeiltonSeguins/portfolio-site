import { LinkItemData } from "@/@types/schema";
import Link from "@/components/Link";

interface AboutLinkItemProps {
  item: LinkItemData;
}

const AboutLinkItem = ({ item }: AboutLinkItemProps) => {
  return (
    <li>
      <Link
        href={item.url}
        className="flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.title}
      </Link>
    </li>
  );
};

export default AboutLinkItem;
