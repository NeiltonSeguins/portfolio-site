"use client";
import Link from "../Link";
import { ModeToggle } from "../mode-toggle";
import { useState } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

import { useTranslations } from "next-intl";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navigation");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4">
      <nav className="flex justify-between items-center">
        {/* Menu normal para telas grandes */}
        <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
          <li>
            <Link as="router" href="/">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link as="router" href="/about">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link as="router" href="/articles">
              {t("articles")}
            </Link>
          </li>
          <li>
            <Link as="router" href="/projects">
              {t("projects")}
            </Link>
          </li>
          <li>
            <Link as="router" href="/courses">
              {t("courses")}
            </Link>
          </li>
        </ul>

        {/* Botão de alternância (menu hamburguer) para telas pequenas */}
        <button
          className="sm:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <Cross2Icon fontSize={24} />
          ) : (
            <HamburgerMenuIcon fontSize={24} />
          )}
        </button>

        {/* Menu dropdown para telas pequenas */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-zinc-950 shadow-md z-50 sm:hidden">
            <ul className="flex flex-col items-center gap-4 p-4 list-none m-0">
              <li>
                <Link as="router" href="/" onClick={toggleMenu}>
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link as="router" href="/about" onClick={toggleMenu}>
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link as="router" href="/articles" onClick={toggleMenu}>
                  {t("articles")}
                </Link>
              </li>
              <li>
                <Link as="router" href="/projects" onClick={toggleMenu}>
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link as="router" href="/courses" onClick={toggleMenu}>
                  {t("courses")}
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Botão de alternância de modo */}
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
