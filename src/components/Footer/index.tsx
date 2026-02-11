"use client";

import Link from "../Link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Footer = () => {
  const tNav = useTranslations("Navigation");
  const tFooter = useTranslations("Footer");
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center text-center sm:text-left text-sm py-6 mt-8 gap-4">
      <div className="hidden sm:flex gap-8">
        <Link as="router" href="/">
          {tNav("home")}
        </Link>
        <Link as="router" href="/about">
          {tNav("about")}
        </Link>
        <Link as="router" href="/articles">
          {tNav("articles")}
        </Link>
        <Link as="router" href="/projects">
          {tNav("projects")}
        </Link>
        <Link as="router" href="/courses">
          {tNav("courses")}
        </Link>
      </div>

      <span className="h-9">
        {tFooter("copyright", { year: year ?? 2026 })}
      </span>
    </footer>
  );
};

export default Footer;
