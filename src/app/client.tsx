"use client"; // Client component needed due to API's required for youtube video display and information

import React, { useState } from "react";
import { Category } from "@/components/CategoryTags";
import CategoryTags from "@/components/CategoryTags";

// Defining prop type to be an array of video objects and categories
const ClientComponent = ({
  categories,
}: {
  categories: Category[]; //Use category type here;
}) => {
  // State for selected category and function to handle category change
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      <CategoryTags
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={handleCategorySelect}
      />
    </div>
  );
};

export default ClientComponent;
