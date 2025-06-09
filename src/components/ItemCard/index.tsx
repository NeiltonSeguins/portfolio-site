/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "../Link";
import { CardItem } from "@/@types/schema";

interface ItemCardProps {
  item: CardItem;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div
      // A 'key' será aplicada no componente Section ao mapear os itens
      className="flex-shrink-0 w-64 sm:w-72 border rounded-lg p-4 flex flex-col justify-between hover:shadow-lg snap-center"
    >
      {item.cover && (
        <img
          src={item.cover}
          alt={item.title}
          className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mb-4 border"
        />
      )}
      <h3 className="text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-sm mb-4">{item.description}</p>
      {item.link && (
        <Link as="router" href={item.link}>
          Saiba mais →
        </Link>
      )}
    </div>
  );
};

export default ItemCard;
