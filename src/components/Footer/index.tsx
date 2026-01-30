import Link from "../Link";
import { cacheLife } from "next/cache";

const Footer = async () => {
  "use cache";
  cacheLife("days");

  return (
    <footer className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left text-sm py-6 mt-8 gap-4">
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

      <span>
        © {new Date().getFullYear()} Neilton Seguins. Todos os direitos
        reservados.
      </span>
    </footer>
  );
};

export default Footer;
