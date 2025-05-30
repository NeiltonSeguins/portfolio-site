import { Item } from "@/@types/schema";
import Link from "../Link";

type ListItemCardProps = {
  item: Item;
};

const ListItemCard = ({ item }: ListItemCardProps) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <time className="mt-1 md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
        {item.date}
      </time>
      <div className="md:col-span-3 group relative flex flex-col items-start scroll-mt-8">
        <h2 className="text-xl font-semibold mt-1">{item.title}</h2>
        <p className="mt-2 mb-2">{item.description}</p>
        <Link
          as="router"
          href={item.link}
          className="text-sm font-medium mt-2 inline-block"
        >
          Ver mais &rsaquo;
        </Link>
      </div>
    </article>
  );
};

export default ListItemCard;