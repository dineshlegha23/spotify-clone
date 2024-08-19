import React from "react";
import { assets } from "../assets/assets";

const AlbumSongsContainer = () => {
  return (
    <div className="mt-5 bg-black/50 h-full px-5 py-3 -m-[18px]">
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

      <div className="grid grid-cols-9 items-center mt-6">
        <p className="col-span-1 text-center">#</p>
        <p className="col-span-3">Title</p>
        <p className="col-span-2">Album</p>
        <p className="col-span-2">Date Added</p>
        <p className="col-span-1 text-center">*</p>
      </div>
    </div>
  );
};

export default AlbumSongsContainer;
