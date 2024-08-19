import React from "react";
import { assets } from "../assets/assets";
import SidebarLibrary from "./SidebarLibrary";

const Sidebar = () => {
  return (
    <section className="sticky inset-2 bottom-0 h-[calc(100vh-95px)] max-w-[420px] min-w-[420px] flex flex-col gap-2 m-2">
      <div className=" bg-white/10 p-2 rounded-lg">
        <div className="flex w-fit gap-5 items-center px-4 py-3 font-bold">
          <img src={assets.home_icon} alt="home icon" className="w-6" />
          <h2>Home</h2>
        </div>
        <div className="flex w-fit gap-5 items-center px-4 py-3 font-bold">
          <img src={assets.search_icon} alt="search icon" className="w-6" />
          <h2>Search</h2>
        </div>
      </div>

      <div className="h-full flex flex-col bg-white/10 p-2 rounded-lg w-full">
        <div className="flex gap-5 justify-between px-4 py-2 mb-4 items-center font-bold">
          <div className="flex gap-3 h-fit">
            <img src={assets.stack_icon} alt="stack icon" className="w-6" />
            <h2>Your Library</h2>
          </div>
          <div className="flex gap-6 h-fit">
            <img src={assets.plus_icon} alt="plus icon" className="w-4" />
            <img src={assets.arrow_icon} alt="arrow icon" className="w-4" />
          </div>
        </div>
        <SidebarLibrary
          heading={"Create your first playlist"}
          text={"It's easy, we'll help you"}
          button={"Create playlist"}
        />
        <SidebarLibrary
          heading={"Let's find some podcasts to follow"}
          text={"We'll keep you updated on new episodes"}
          button={"Browse podcasts"}
        />
      </div>
    </section>
  );
};

export default Sidebar;
