/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github-dark.css";
import { YouTubeEmbed } from '@next/third-parties/google';
import { Link } from "@/i18n/routing";

type Props = {
  content: string;
};

const MarkdownRenderer = ({ content }: Props) => {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
          ),
          h2: ({ node, children, ...props }) => {
            const id = String(children).toLowerCase().replace(/[^\w]+/g, '-');
            return <h2 id={id} className="text-2xl font-semibold mt-6 mb-3 scroll-mt-24" {...props}>{children}</h2>
          },
          h3: ({ node, children, ...props }) => {
            const id = String(children).toLowerCase().replace(/[^\w]+/g, '-');
            return <h3 id={id} className="text-xl font-semibold mt-5 mb-2 scroll-mt-24" {...props}>{children}</h3>
          },
          h4: ({ node, children, ...props }) => {
            const id = String(children).toLowerCase().replace(/[^\w]+/g, '-');
            return <h4 id={id} className="text-lg font-semibold mt-4 mb-2 scroll-mt-24" {...props}>{children}</h4>
          },
          p: ({ node, children, ...props }) => {
            // Verifica no AST se o parágrafo contém uma tag 'img' ou um link do YouTube
            // Isso evita aninhar a div da imagem/vídeo dentro de um p
            const childrenArray = (node as any)?.children || [];

            const hasBlockElement = childrenArray.some((child: any) => {
              if (child.type === "element" && child.tagName === "img") {
                return true;
              }
              if (child.type === "element" && child.tagName === "a") {
                const href = child.properties?.href || "";
                return (
                  href.includes("youtube.com/watch") ||
                  href.includes("youtu.be/")
                );
              }
              return false;
            });

            if (hasBlockElement) {
              return <>{children}</>;
            }

            return (
              <p className="text-base leading-7 mb-4" {...props}>
                {children}
              </p>
            );
          },
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-6 mb-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-6 mb-4" {...props} />
          ),
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          pre: ({ node, ...props }) => (
            <pre
              className="bg-[#0d1117] max-w-full mx-auto text-zinc-100 p-4 rounded-lg overflow-auto text-sm my-4"
              {...props}
            />
          ),
          code: ({ node, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !match && !String(children).includes("\n");

            if (isInline) {
              return (
                <code
                  className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm text-zinc-900 dark:text-zinc-100 font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic text-zinc-600 dark:text-zinc-400 my-6"
              {...props}
            />
          ),
          strong: ({ node, ...props }: any) => (
            <strong className="font-bold text-zinc-900 dark:text-zinc-100" {...props} />
          ),
          a: ({ node, href, children, ...props }) => {
            if (href && (href.includes("youtube.com/watch") || href.includes("youtu.be/"))) {
              let videoId = "";
              try {
                if (href.includes("youtube.com/watch")) {
                  videoId = new URL(href).searchParams.get("v") || "";
                } else if (href.includes("youtu.be/")) {
                  videoId = href.split("youtu.be/")[1]?.split("?")[0] || "";
                }
              } catch (e) {
                // Fallback if URL parsing fails
                console.error("Error parsing YouTube URL:", e);
              }

              if (videoId) {
                return (
                  <YouTubeEmbed videoid={videoId} params="controls=1" style="border-radius: 10px; margin:24px auto;" />
                );
              }
            }

            // Check if it's an internal link (starts with /)
            const isInternalLink = href && href.startsWith("/");

            if (isInternalLink) {
              return (
                <Link
                  href={href}
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {children}
                </Link>
              );
            }

            // External link
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                {...props}
              >
                {children}
              </a>
            );
          },
          img: ({ src, alt }: any) => {
            return (
              <div data-component="image-wrapper" className="my-6 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src || ""}
                  alt={alt || ""}
                  className="rounded-lg max-w-full h-auto object-contain"
                  style={{ maxHeight: '600px' }}
                />
              </div>
            );
          },
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-left text-sm" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-zinc-100 dark:bg-zinc-900 uppercase text-xs font-semibold text-zinc-600 dark:text-zinc-400" {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800" {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="px-6 py-3 whitespace-nowrap" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="px-6 py-4 whitespace-nowrap text-zinc-700 dark:text-zinc-300" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
