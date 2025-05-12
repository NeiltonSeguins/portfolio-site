/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "../Link";
import { CardItem } from "@/@types/schema";

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
            <div
              key={item.id}
              className="flex-shrink-0 w-64 sm:w-72 border rounded-lg p-4 flex flex-col justify-between hover:shadow-lg snap-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mb-4 border"
              />
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm mb-4">{item.description}</p>
              {item.link && (
                <Link href={item.link} className="font-semibold">
                  Saiba mais →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
