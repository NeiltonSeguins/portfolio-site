import { Link } from "@/i18n/routing";
import { BlogPost } from "@/@types/schema";
import { ArrowLeft, ArrowRight, Layers } from "lucide-react";

type SeriesBannerProps = {
  currentPost: BlogPost;
  seriesPosts: BlogPost[];
};

export default function SeriesBanner({
  currentPost,
  seriesPosts,
}: SeriesBannerProps) {
  if (!currentPost.series || seriesPosts.length <= 1) return null;

  const currentIndex = seriesPosts.findIndex((p) => p.slug === currentPost.slug);
  const prevPost = currentIndex > 0 ? seriesPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < seriesPosts.length - 1 ? seriesPosts[currentIndex + 1] : null;

  return (
    <div className="my-8 p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-2 text-zinc-900 dark:text-zinc-100 font-semibold">
        <Layers className="w-5 h-5 text-zinc-500" />
        <h3>Série: {currentPost.series}</h3>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
        Este artigo é a parte {currentPost.seriesOrder} de uma série de{" "}
        {seriesPosts.length} artigos.
      </p>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {prevPost ? (
          <Link
            href={`/articles/${prevPost.slug}`}
            className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 flex-shrink-0" />
            <span>
              Parte {prevPost.seriesOrder}: {prevPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextPost && (
          <Link
            href={`/articles/${nextPost.slug}`}
            className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline sm:ml-auto text-right"
          >
            <span>
              Parte {nextPost.seriesOrder}: {nextPost.title}
            </span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
}
