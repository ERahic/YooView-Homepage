"use client";
import React from "react"; // Flex gap to spread each div, for large screens, increase the gap, for small screens, reduce except for logo and menu bar
import Image from "next/image";
import Link from "next/link"; // Import Link to make the logo clickable and link it to homepage
import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  ArrowBigLeft,
  Bell,
  CircleUserRound,
  Menu,
  Mic,
  Search,
  Upload,
} from "lucide-react"; // react lucid library to add symbols for youtube page
import { Button } from "../../components/Buttons";

function Header({
  setIsExpanded,
  isExpanded,
}: //isExpanded & setIsExpanded is used to implement when the sidebar should expand for more options based on the useState of the boolean
{
  setIsExpanded: (value: boolean) => void;
  isExpanded: boolean;
}) {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode on button click
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // useEffect to help set dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  //When clicking on search bar or button, create a dropbox for suggestions and a back button on the left side to cancel search input
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false); // useState will be used to set the boolean to true of false when the screen is reduced to certain size

  // useEffect will be used to monitor screensize and will reset the showFullWidthSearch state if screensize is above md (to fix search bar and arrowlefticon bug)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && showFullWidthSearch) {
        setShowFullWidthSearch(false); //This will reset the search bar state and fix the bug when screen is resized above md
      }
    };

    // resize listener attached
    window.addEventListener("resize", handleResize);

    // clean listener to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showFullWidthSearch]); // this dependency array will make useEffect run only when showFullWidthSearch is set to true

  return (
    <div
      className={`flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 z-20 transition-all ${darkMode ? "text-yellow-500" : "bg-white text-black"}`}
    >
      <div
        className={`gap-4 items-center ${showFullWidthSearch ? "hidden" : "flex"} ${darkMode ? "text-yellow-500" : ""}`}
      >
        {/*YooView logo and three-line menu for more options to pop from the left of screen on click*/}
        {/*Menu Button*/}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-4 left-4 z-30 dark:hover:bg-gray-700 dark:bg-fade-dark"
        >
          <Menu />
        </Button>
        {/* Use Image component for the logo*/}
        <Link href="/" passHref>
          <Image
            src={darkMode ? "/Yooview-logo-dark.png" : "/Yooview-logo.png"} // Switch colour of logo when dark mode is active or not
            alt="Yooview Logo"
            width={200} // Set the desired width
            height={100} // Set the desired height
            priority
            className={`w-[100px] sm:w-[150px] md:w-[200px] h-auto ml-16 transition-all duration-300 ${darkMode ? "hover:drop-shadow-glowDark" : "hover:drop-shadow-glow"}`} // Prevent size reduction when changing browser window size
          ></Image>
        </Link>
      </div>
      {/*Search bar will be implemented as a form to allow text input as well as Seach button and Mic button*/}
      {/*Added ternary operator to form for when screen boolean is true, expand the search bar, otherwise, keep that expansion hidden when screen is md or above*/}
      {/*using md: will only have the search bar appear on medium to large screens, will dissapear and only have search icon on small screens*/}
      <form
        className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}
      >
        {/*The Arrow button will setFullWidthSearch to false, undoing the search expansion and keep it hidden while the buttons and logo reappear*/}
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden dark:hover:bg-gray-700 dark:bg-fade-dark"
          >
            {/*Will appear when screen is below md and when search button is clicked to allow cancelation of search*/}
            <ArrowBigLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          {/*Search Bar with round design and a placeholder for indication*/}
          <input
            type="search"
            placeholder="Search Content"
            className="rounded-l-full border border-fade shadow-inner shadow-fade py-2 px-6 text-lg w-full
          focus:border-blue-500 outline-none dark:focus:border-yellow-500"
          />
          {/*The search icon*/}
          <Button
            onClick={() => setShowFullWidthSearch(true)} // only when screen is below md size
            className="py-2 px-4 rounded-r-full border-fade-dark border border-l-0 flex-shrink-0 dark:hover:bg-gray-700 dark:bg-fade-dark"
          >
            <Search />{" "}
            {/*will appear and expand when screen is below md and search icon is clicked*/}
          </Button>
        </div>
        <Button
          type="button"
          size="icon"
          className="flex-shrink-0 dark:bg-fade-dark dark:hover:bg-gray-700"
        >
          {/*flex-shrink-0 used so buttons (mic) dont get squished when browser window is smaller */}
          <Mic />{" "}
          {/*will appear and replace the three icons when screen is below md*/}
        </Button>
      </form>
      {/*If showFullWidthSearch is true, then the menu icon, logo, and three icon's on the right side of the header will be hidden, and only have the search bar extend the screen and keep the mic icon*/}
      <div
        className={`flex flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}
      >
        {/*Search button will appear when screen is below md*/}
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          variant="ghost"
          size="icon"
          className="md:hidden dark:hover:bg-gray-700 dark:bg-fade-dark"
        >
          <Search />
        </Button>
        {/*Mic button will appear when screen is below md*/}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden dark:hover:bg-gray-700 dark:bg-fade-dark"
        >
          <Mic />
        </Button>
        {/*Top right icons (i.e bell, make a video, profile dark mode)*/}
        {/*Sun/Moon for dark mode*/}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="dark:hover:bg-gray-700 dark:bg-fade-dark"
        >
          {darkMode ? <Sun /> : <Moon />} {/*toggles night and day mode*/}
        </Button>
        {/*Upload Button*/}
        <Button
          variant="ghost"
          size="icon"
          className="dark:hover:bg-gray-700 dark:bg-fade-dark"
        >
          <Upload />
        </Button>
        {/*Notification Button*/}
        <Button
          variant="ghost"
          size="icon"
          className="dark:hover:bg-gray-700 dark:bg-fade-dark"
        >
          <Bell />
        </Button>
        {/*Profile button*/}
        <Button
          variant="ghost"
          size="icon"
          className="dark:hover:bg-gray-700 dark:bg-fade-dark"
        >
          <CircleUserRound />
        </Button>
      </div>
    </div>
  );
}

export default Header;
