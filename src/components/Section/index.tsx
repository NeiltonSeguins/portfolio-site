/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { CardItem } from "@/@types/schema";
import ItemCard from "../ItemCard";
import { Button } from "../ui/button";

type SectionProps = {
  title: string;
  items: CardItem[];
};

const Section = ({ title, items }: SectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        
        {/* Navigation Buttons - Visible only on desktop (md+) */}
        <div className="hidden md:flex gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="rounded-full"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            aria-label="Next slide"
            className="rounded-full"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Embla Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Embla Container */}
        <div className="flex gap-6">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
