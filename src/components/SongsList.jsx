import React from "react";
import { assets } from "../assets/assets";

const SongsList = () => {
  return (
    <div className="grid grid-cols-[50px_1.15fr_0.8fr_0.8fr_70px] items-center mt-4 text-sm font-semibold text-zinc-400">
      <p className="text-center text-base text-white">1</p>
      <div className="flex gap-3">
        <img src={assets.img1} className="w-11 rounded-lg" alt="song" />
        <div>
          <h3 className="text-white text-base">
            Sooraj Dooba Hain(From "Roy")
          </h3>
          <p>Arijit Singh, Aditi Singh Sharma</p>
        </div>
      </div>
      <p>Album is this</p>
      <p>2011/10/11</p>
      <p className="text-left">3:12</p>
    </div>
  );
};

export default SongsList;
