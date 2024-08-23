import React from "react";
import { assets } from "../assets/assets";

const MobileMenu = () => {
  return (
    <div className="hidden md:flex fixed bottom-0 px-[5vw] py-3 text-xs text-zinc-400 bg-black w-full justify-between">
      <button className="flex flex-col gap-1 items-center">
        <img src={assets.home_icon} alt="home icon" className="w-6" />
        <p>Home</p>
      </button>
      <button className="flex flex-col gap-1 items-center">
        <img src={assets.search_icon} alt="search icon" className="w-6" />
        <p>Search</p>
      </button>
      <button className="flex flex-col gap-1 items-center">
        <img src={assets.stack_icon} alt="library icon" className="w-6" />
        <p>Your Library</p>
      </button>
      <button className="flex flex-col gap-1 items-center">
        <img src={assets.spotify_logo} alt="spotify icon" className="w-6" />
        <p>Get App</p>
      </button>
    </div>
  );
};

export default MobileMenu;
