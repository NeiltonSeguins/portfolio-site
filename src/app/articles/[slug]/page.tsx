export const revalidate = 60;
import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug } from "@/services/notion-service";
import { Metadata } from "next";
import MarkdownRenderer from "@/components/MarkdownRenderer";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post?.title ?? "Artigo",
    description: post?.description ?? "",
  };
}

const ArticlePage = async ({ params }: Props) => {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-[968px] mx-auto">
      {post.cover && (
        <Image
          src={post.cover}
          alt="Capa do artigo"
          width={800}
          height={240}
          priority
          className="cover object-center mt-6 w-full h-60 object-cover"
        />
      )}

      <h1 className="text-4xl font-bold mt-12">{post.title}</h1>
      <p className="text-zinc-500 text-sm mt-2">{post.date}</p>

      <div className="mt-12">
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  );
};
export default ArticlePage;
