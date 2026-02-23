"use client";

import { useState, useMemo } from "react";
import PageLayout from "./PageLayout";
import { Item } from "@/@types/schema";
import { MagnifyingGlassIcon, Cross2Icon } from "@radix-ui/react-icons";

interface ArticlesContainerProps {
  heading: string;
  subheading: string;
  initialItems: Item[];
}

const ArticlesContainer = ({
  heading,
  subheading,
  initialItems,
}: ArticlesContainerProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return initialItems;

    const query = searchQuery.toLowerCase();
    return initialItems.filter((item) => {
      const title = item.title || "";
      const matchTitle = title.toLowerCase().includes(query);

      const matchTags = Array.isArray(item.tags) ? item.tags.some((t: any) => {
        if (!t) return false;
        if (typeof t === "string") {
          return t.toLowerCase().includes(query);
        }
        return t.name ? t.name.toLowerCase().includes(query) : false;
      }) : false;

      return matchTitle || matchTags;
    });
  }, [searchQuery, initialItems]);

  const toggleSearch = () => {
    if (isSearchOpen) {
      setSearchQuery("");
    }
    setIsSearchOpen(!isSearchOpen);
  };

  const SearchAction = (
    <div className="flex justify-start">
      <div
        className={`flex items-center transition-all duration-300 ease-in-out h-10 overflow-hidden rounded-full ${isSearchOpen
          ? "w-sm max-w-sm px-4 bg-zinc-100 dark:bg-zinc-800/50 ring-1 ring-zinc-300 dark:ring-zinc-700"
          : "w-10 px-0 bg-transparent"
          }`}
      >
        <button
          onClick={toggleSearch}
          className={`shrink-0 flex items-center justify-center h-10 w-10 rounded-full transition-colors ${!isSearchOpen
            ? "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800/50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 ring-1 ring-zinc-200 dark:ring-zinc-700/50"
            : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 mr-2 -ml-2"
            }`}
          aria-label={isSearchOpen ? "Fechar busca" : "Abrir busca"}
        >
          {isSearchOpen ? <Cross2Icon className="w-5 h-5" /> : <MagnifyingGlassIcon className="w-5 h-5" />}
        </button>

        <input
          type="text"
          placeholder="Buscar por título ou tag..."
          className={`bg-transparent border-none outline-none text-sm w-full placeholder:text-zinc-400 dark:text-zinc-200 transition-opacity duration-300 ${isSearchOpen ? "opacity-100" : "opacity-0"
            }`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          tabIndex={isSearchOpen ? 0 : -1}
          autoFocus={isSearchOpen}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full relative">
      <PageLayout
        heading={heading}
        subheading={subheading}
        items={filteredItems}
        headerAction={SearchAction}
      />
    </div>
  );
};

export default ArticlesContainer;
