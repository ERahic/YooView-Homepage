"use client";
import React, { useState } from "react";
import {
  Sparkles,
  Library,
  Home,
  Telescope,
  ListVideo,
  ClockAlert,
  Star,
  TrendingUp,
  Disc3,
  Popcorn,
  Antenna,
  Gamepad2,
  Megaphone,
  Dumbbell,
  BookOpenText,
  GraduationCap,
  Shirt,
  Podcast,
} from "lucide-react";
import { Button, buttonStyles } from "@/components/Buttons";
import { twMerge } from "tailwind-merge";

export default function Sidebar() {
  // useState to have home as default option highlighted
  const [selected, setSelected] = useState("home"); // this use state will be used to select other options

  const handleButtonClick = (button: string) => {
    setSelected(button);
  };

  const buttonClasses = (button: string) => {
    return twMerge(
      buttonStyles({ variant: "ghost" }),
      `flex items-center gap-4 lg:pr-24 text-sm lg:text-right md:flex flex-col ${button === selected ? "bg-fade dark:bg-gray-700" : ""}`,
      // Add responsive classes for layout and text size of sidebar icons
      `sm:flex-col sm:items-center sm:justify-center sm:gap-1 md:flex-col md:items-center md:justify-center md:text-xs md:gap-1 lg:flex-row lg:items-center lg:gap-4 lg:text-sm`,
    );
  };

  return (
    <>
      {/*This aside div will be only for screens below lg, just to show the 4 main buttons when screen is below lg*/}
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden flex flex-col lg:hidden">
        <nav className="flex flex-col py-2 px-2 items-center rounded-lg text-center">
          {/*Home Button*/}
          <Button
            size="default"
            variant="ghost"
            className={`${buttonClasses("home")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700 `}
            onClick={() => handleButtonClick("home")}
          >
            <Home></Home>
            <span className="truncate">Home</span>
          </Button>
          {/*Shorts Button*/}
          <Button
            size="default"
            variant="ghost"
            className={`${buttonClasses("scope")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
            onClick={() => handleButtonClick("scope")}
          >
            <Telescope></Telescope>
            <span className="truncate">Scope</span>
          </Button>
          {/*Followers Button*/}
          <Button
            size="default"
            variant="ghost"
            className={`${buttonClasses("stars")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
            onClick={() => handleButtonClick("stars")}
          >
            <Sparkles></Sparkles>
            <span className="truncate">Stars</span>
          </Button>
          {/*Library Button*/}
          <Button
            size="default"
            variant="ghost"
            className={`${buttonClasses("history")} flex-1 text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
            onClick={() => handleButtonClick("history")}
          >
            <Library></Library>
            <span className="truncate">History</span>
          </Button>
        </nav>
      </aside>
      {/*This aside div is for when the screen is lg or above*/}
      <aside className="hidden lg:flex flex-col sticky top-0 overflow-y-auto scrollbar-hidden pb-4 w-auto text-black font-bold overflow-x-hidden">
        <nav className="flex flex-col gap-4 px-4">
          {/*Home, Shorts, Subscriptions*/}
          <div>
            {/*Home*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("home")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("home")}
            >
              <Home></Home>
              Home
            </Button>
            {/*Telescope*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("scope")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("scope")}
            >
              <Telescope></Telescope>
              Scope
            </Button>
            {/*Stars*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("stars")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("stars")}
            >
              <Sparkles></Sparkles>
              Stars
            </Button>
          </div>

          {/*YOO (history, playlists, watch later, liked videos*/}
          <div className="border-t border-fade text-nowrap">
            <div className="font-bold mt-4 dark:font-bold dark:text-yellow-500">
              YOO {">"}
            </div>

            {/*History*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("history")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("history")}
            >
              <Library></Library>
              History
            </Button>

            {/*Playlists*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("playlists")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("playlists")}
            >
              <ListVideo></ListVideo>
              Playlists
            </Button>

            {/*Watch later*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("watch later")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("watch later")}
            >
              <ClockAlert></ClockAlert>
              Watch Later
            </Button>

            {/*Liked Content*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("liked content")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("liked content")}
            >
              <Star></Star>
              Liked Content
            </Button>
          </div>

          {/*Explore Section*/}
          <div className="border-t border-fade text-nowrap">
            <div className="font-bold mt-4 dark:text-yellow-500">Explore</div>
            {/*Trending*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("trending")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("trending")}
            >
              <TrendingUp></TrendingUp>
              Trending
            </Button>

            {/*Tunes*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("tunes")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("tunes")}
            >
              <Disc3></Disc3>
              Tunes
            </Button>

            {/*Film & TV*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("movies & tv")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("movies & tv")}
            >
              <Popcorn></Popcorn>
              Movies & TV
            </Button>

            {/*Stream*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("stream")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("stream")}
            >
              <Antenna></Antenna>
              Stream
            </Button>

            {/*Gaming*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("gaming")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("gaming")}
            >
              <Gamepad2></Gamepad2>
              Gaming
            </Button>

            {/*Politics*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("politics")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("politics")}
            >
              <Megaphone></Megaphone>
              Politics
            </Button>

            {/*Sports*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("sports")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("sports")}
            >
              <Dumbbell></Dumbbell>
              Sports
            </Button>

            {/*Manga*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("anime")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("anime")}
            >
              <BookOpenText></BookOpenText>
              Manga
            </Button>

            {/*Learning*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("learning")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("learning")}
            >
              <GraduationCap></GraduationCap>
              Education
            </Button>

            {/*Fashion*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("fashion")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("fashion")}
            >
              <Shirt></Shirt>
              Fashion
            </Button>

            {/*Podcasts*/}
            <Button
              size="default"
              variant="ghost"
              className={`${buttonClasses("podcasts")} flex-1  text-black dark:text-yellow-500 dark:hover:bg-gray-700`}
              onClick={() => handleButtonClick("podcasts")}
            >
              <Podcast></Podcast>
              Podcast
            </Button>
          </div>
        </nav>
      </aside>
    </>
  );
}
