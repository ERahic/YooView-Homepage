"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Buttons";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Category {
  id: string;
  snippet: {
    title: string;
  };
}

interface CategoryTagProps {
  categories: Category[]; //Use the category type here
  selectedCategory: string;
  onSelect: (categoryId: string) => void; //expect string here
}

// For when category tags will be moved either left or right depending on which chevron arrow was clicked
const translateAmount = 200;

const CategoryTags = ({
  categories,
  selectedCategory,
  onSelect,
}: CategoryTagProps) => {
  // Ensure categories is always an array
  const validCategories = Array.isArray(categories) ? categories : [];

  // Create useState's for when left arrow and right arrow of category tags should be visible
  const [translate, setTranslate] = useState(0);
  const [leftArrowVisible, setLeftArrowVisible] = useState(false);
  const [rightArrowVisible, setRightArrowVisible] = useState(true);
  // Container Reference for right translation implementation
  const containerRef = useRef<HTMLDivElement>(null);

  //useEffect will be used to determine when the category tag arrows will appear and when they'll be hidden
  // whenever the size of the container changes, the useEffect will run
  useEffect(() => {
    if (containerRef.current == null) return;
    // observer is used to always keep an eye on the size of the category tags for chevron arrow appearance
    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setLeftArrowVisible(translate > 0);
      setRightArrowVisible(
        translate + container.clientWidth < container.scrollWidth,
      );
    });
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [categories, translate]);

  return (
    // overflow-x will let us have the expanded categories be hidden and only be shown when the arrows are clicked
    // Will need to determine what the size of our container is for right translate functionality
    <div
      ref={containerRef}
      className="flex flex-wrap gap-2 mb-4 overflow-x-hidden relative caret-transparent"
    >
      {/*Style will be used for translate prop*/}
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {validCategories.map((category) => (
          <Button
            key={category.id}
            onClick={() => onSelect(category.id)} // pass the category id to onSelect
            variant={selectedCategory === category.id ? "dark" : "default"} //category tag should be dark when clicked on
            className="px-3 py-1 rounded-lg text-sm font-medium cursor-pointer whitespace-nowrap"
          >
            {category.snippet.title} {/*Display category title*/}
          </Button>
        ))}
      </div>
      {/*Div to design arrows for transitioning category tags*/}
      {leftArrowVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          {/*leftarrow button for category tags*/}
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - translateAmount;
                if (newTranslate <= 0) return 0; // will make sure that translate will not go beyond 0 and break the translate when nothing is there afterward
                return newTranslate;
              });
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}{" "}
      {/*Div to design arrows for transitioning category tags*/}
      {rightArrowVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          {/*right arrow button for category tags*/}
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current == null) {
                  //Determine how far we have before we need to stop translating
                  return translate;
                }
                const newTranslate = translate + translateAmount;
                const edge = containerRef.current.scrollWidth; // Tells us how wide the category tags are starting from the left side all the way to the right
                const width = containerRef.current.clientWidth; // only showing the amount of width thats currently available on screen
                if (newTranslate + width >= edge) {
                  return edge - width;
                }
                return newTranslate;
              });
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryTags;
