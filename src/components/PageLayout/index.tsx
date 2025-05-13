import { Item } from "@/@types/schema";
import Link from "../Link";

type PageLayoutProps = {
  heading: string;
  subheading: string;
  items: Item[];
};

const PageLayout = ({ heading, subheading, items }: PageLayoutProps) => {
  return (
    <section className="max-w-4xl px-4 py-8">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-4xl font-bold ">{heading}</h1>
        <p className="text-lg  mt-4 mb-16">{subheading}</p>
      </div>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {items.map((item) => (
            <article
              key={item.id}
              className="md:grid md:grid-cols-4 md:items-baseline"
            >
              <time className="mt-1 md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                {item.date}
              </time>
              <div className="md:col-span-3 group relative flex flex-col items-start scroll-mt-8">
                <h2 className="text-xl font-semibold  mt-1">{item.title}</h2>
                <p className=" mt-2">{item.description}</p>
                <Link
                  as="router"
                  href={item.link}
                  className="text-sm font-medium mt-2 inline-block"
                >
                  Ver mais &rsaquo;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageLayout;
