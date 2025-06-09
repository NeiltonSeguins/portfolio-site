/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github-dark.css";
import Link from "../Link";
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
          p: ({ node, children, ...props }) => {
            // Se o parágrafo contém apenas uma imagem, retorna só a imagem sem a tag <p>
            const isImageOnly =
              node?.children.length === 1 &&
              "tagName" in node.children[0] &&
              node.children[0].tagName === "img";

            if (node && isImageOnly) {
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
          code: ({ node, children, ...props }) => {
            return (
              <pre className="bg-[#0d1117] max-w-full mx-auto text-zinc-100 p-4 rounded-lg overflow-auto text-sm my-4">
                <code {...props}>{children}</code>
              </pre>
            );
          },
          strong: ({ node, ...props }: any) => (
            <strong className="font-bold" {...props} />
          ),
          a: ({ node, href, children, ...props }) => (
            <a
              href={href}
              target="_blanked"
              className="font-semibold hover:underline"
              {...props}
            >
              {children}
            </a>
          ),
          img: ({ src = "", alt = "" }) => (
            <div className="relative w-full max-w-3xl mx-auto h-auto aspect-[16/9] my-6">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain rounded-lg"
              />
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
