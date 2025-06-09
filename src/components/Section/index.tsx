/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CardItem } from "@/@types/schema";
import ItemCard from "../ItemCard";

type SectionProps = {
  title: string;
  items: CardItem[];
};

const Section = ({ title, items }: SectionProps) => {
  return (
    <section className="container pb-12">
      <div>
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        {/* Container responsivo */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hidden snap-x snap-mandatory">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
