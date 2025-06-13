"use client";
import Link from "../Link";
import { ModeToggle } from "../mode-toggle";
import { useState } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4">
      {/* Menu normal para telas grandes */}
      <div className="hidden sm:flex gap-8">
        <Link as="router" href="/">
          Home
        </Link>
        <Link as="router" href="/about">
          Sobre
        </Link>
        <Link as="router" href="/articles">
          Artigos
        </Link>
        <Link as="router" href="/projects">
          Projetos
        </Link>
        <Link as="router" href="/courses">
          Cursos
        </Link>
      </div>

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
          <div className="flex flex-col items-center gap-4 p-4">
            <Link as="router" href="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link as="router" href="/about" onClick={toggleMenu}>
              Sobre
            </Link>
            <Link as="router" href="/articles" onClick={toggleMenu}>
              Artigos
            </Link>
            <Link as="router" href="/projects" onClick={toggleMenu}>
              Projetos
            </Link>
            <Link as="router" href="/courses" onClick={toggleMenu}>
              Cursos
            </Link>
          </div>
        </div>
      )}

      {/* Botão de alternância de modo */}
      <ModeToggle />
    </nav>
  );
};

export default Header;
