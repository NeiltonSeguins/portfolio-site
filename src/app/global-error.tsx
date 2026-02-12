"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  // Fallback translations (since we can't use useTranslations in global-error)
  const translations = {
    title: "Algo deu errado!",
    description: "Desculpe, encontramos um erro inesperado. Tente novamente mais tarde.",
    button: "Tentar novamente"
  };

  return (
    <html lang="pt">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-zinc-50 dark:bg-zinc-950">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold mb-4 text-red-600">💥</h1>
            <h2 className="text-3xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
              {translations.title}
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              {translations.description}
            </p>

            <button
              onClick={reset}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              {translations.button}
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
