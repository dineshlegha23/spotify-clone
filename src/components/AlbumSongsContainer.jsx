import React from "react";
import { assets } from "../assets/assets";
import SongsList from "./SongsList";

const AlbumSongsContainer = () => {
  return (
    <div className="sticky mt-5 pb-5 bg-black/50 h-full px-5 py-3 -m-[18px]">
      <div className="flex gap-7 items-cente">
        <img
          src={assets.play_icon}
          className="w-14 bg-green-500 rounded-full p-4"
          alt="play"
        />
        <img
          src={assets.plus_icon}
          className="w-7 h-fit self-center rounded-full border-2 border-white p-1"
          alt="plus"
        />
        <p className="text-4xl">...</p>
      </div>

      <div className="grid grid-cols-[50px_1.15fr_0.8fr_0.8fr_70px] items-center mt-6 text-sm font-semibold text-zinc-400 border-zinc-800 border-b-[0.1px] pb-2">
        <p className="text-center">#</p>
        <p className="">Title</p>
        <p className="">Album</p>
        <p className="">Date added</p>
        <img src={assets.clock_icon} className="w-4 ml-2" alt="clock icon" />
      </div>

      <SongsList />
      <SongsList />
      <SongsList />
      <SongsList />
      <SongsList />
      <SongsList />
    </div>
  );
};

export default AlbumSongsContainer;
