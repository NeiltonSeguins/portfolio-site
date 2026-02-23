import { Item } from "@/@types/schema";
import ListItemCard from "../ListItemCard";

interface PageLayoutProps {
  heading: string;
  subheading: string;
  items: Item[];
  headerAction?: React.ReactNode;
}

const PageLayout = ({
  heading,
  subheading,
  items,
  headerAction,
}: PageLayoutProps) => {
  return (
    <section className="max-w-4xl py-8">
      {headerAction && (
        <div className="mb-8">{headerAction}</div>
      )}
      <div className="mb-8 max-w-2xl flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold ">{heading}</h1>
          <p className="text-lg  mt-4 mb-4 sm:mb-16">{subheading}</p>
        </div>
      </div>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-8 md:space-y-16">
          {items.map((item) => (
            <ListItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageLayout;
