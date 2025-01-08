"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/layouts/Header";
//import Sidebar from "@/app/layouts/Sidebar";
import CategoryTags from "@/components/CategoryTags";
import { Category } from "@/components/CategoryTags";
import Sidebar from "@/app/layouts/Sidebar";
import { Video } from "@/components/Video";
import { videos } from "@/placeholderData/videoData";

export default function App() {
  // hold state for when menu button is pressed to expand sidebar
  const [isExpanded, setIsExpanded] = useState(false);
  // When browser size is below medium, sidebar will be hidden
  const [hideSideBar, sethideSideBar] = useState(false);
  // Array used to store fetched categories
  const [categories, setCategories] = useState<Category[]>([]);
  // useState for when a category tag is clicked, the targeted tag will stay dark as if the user wishes to view that content
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`/api/getCategories`); // API call to server endpoint for categories
      const data = await response.json();
      console.log(data);
      setCategories(data.items); // Set fetched categories to state
    };

    fetchCategories();
  }, []);

  // Track whether sidebar should be hidden based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        sethideSideBar(true);
      } else {
        sethideSideBar(false);
      }
    };
    //call function to set the state based on window size
    handleResize();
    // add resize event listener to update state when resized
    window.addEventListener("resize", handleResize);
    // Clean up event listener when component is unmounted to prevent memory leak
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <div className="max-h-screen flex flex-col">
      <Header setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
      {/*use flex grow to fill the entire size of page and overflow auto to allow scroll while keeping header and sidebar in tact */}
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto caret-transparent">
        {/*Sidebar*/}
        <Sidebar />
        <div className="overflow-x-hidden px-8 pb-4">
          {/*Categories*/}
          <div className="sticky top-0 z-10 pb-4">
            <CategoryTags
              categories={categories}
              selectedCategory={selectedCategoryId}
              onSelect={setSelectedCategoryId}
            />
          </div>
          {/*Div below will be where videos will be stored*/}
          {/*Classname for this div will make sure that the items in this component are never less than 300px wide, and if screen size widens, the content displayed on grid is added*/}
          <div className="grid gap-4 grid-cols-[repeat(auto-fill, minmax(300px, 1fr))]">
            {/*Videos*/}
            {videos.map((video) => (
              <Video key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
