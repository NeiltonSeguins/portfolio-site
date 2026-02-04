
import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug, getPublishedBlogPosts } from "@/services/services";
import { Metadata } from "next";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import TableOfContents from "@/components/TableOfContents";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPublishedBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post?.title ?? "Artigo",
    description: post?.description ?? "",
  };
}

const ArticlePage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  // Extract headings from markdown content
  const headings = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match;

  while ((match = regex.exec(post.content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^\w]+/g, '-');
    headings.push({ id, text, level });
  }

  return (
    <article className="max-w-6xl mx-auto px-4 md:px-0">
      {post.cover && (
        <Image
          src={post.cover}
          alt="Capa do artigo"
          width={800}
          height={240}
          priority
          unoptimized
          loading="eager"
          className="cover object-center mt-6 w-full object-cover h-32 md:h-60 rounded-lg mb-8"
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-4xl font-bold mt-2">{post.title}</h1>
          <p className="text-zinc-500 text-sm mt-2 mb-8">
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </p>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <MarkdownRenderer content={post.content} />
          </div>
        </div>

        <div className="lg:col-span-1 hidden lg:block">
          <div className="sticky top-20 border rounded-lg shadow-lg">
            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>
    </article>
  );
};
export default ArticlePage;
