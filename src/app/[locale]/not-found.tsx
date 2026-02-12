"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="mb-8">
        <Image
          src="/profile.png"
          alt="404 - Not Found"
          width={300}
          height={300}
          className="rounded-full shadow-2xl"
          priority
        />
      </div>

      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">{t("title")}</h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-md">
        {t("description")}
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
      >
        {t("button")}
      </Link>
    </div>
  );
}
