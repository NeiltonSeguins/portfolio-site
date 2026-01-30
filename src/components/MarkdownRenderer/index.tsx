/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github-dark.css";
import Image from "next/image";

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
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />
          ),
          p: ({ node, children, ...props }) => {
            // Verifica no AST se o parágrafo contém uma tag 'img'
            // Isso evita aninhar a div da imagem dentro de um p, o que é HTML inválido
            const hasImage = (node as any)?.children?.some(
              (child: any) => child.type === "element" && child.tagName === "img"
            );

            if (hasImage) {
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
          a: ({ node, href, children, ...props }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              {...props}
            >
              {children}
            </a>
          ),
          img: ({ src, alt }: any) => {
            const imageSrc = typeof src === "string" ? src : "";
            return (
              <div data-component="image-wrapper" className="relative w-full max-w-3xl mx-auto h-auto aspect-[16/9] my-6">
                <Image
                  src={imageSrc}
                  alt={alt || ""}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain rounded-lg"
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
