"use client";

import { useState, useEffect } from "react";
import { useRouter } from "@/i18n/routing";
import { ArrowLeft, ArrowUp } from "lucide-react";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push("/articles");
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors ${className || ""}`}
    >
      <ArrowLeft className="w-4 h-4" />
      Voltar
    </button>
  );
}

export function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se o usuário está perto do final da página (margem de 300px)
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      setShow(isNearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    // Checa inicialmente caso a página seja curta
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 shadow-lg hover:scale-105 transition-all"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
