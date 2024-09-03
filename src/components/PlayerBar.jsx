import React from "react";
import song1 from "../assets/img1.jpg";
import { assets } from "../assets/assets";
import Player from "./Player";
import PlayerExtraControllers from "./PlayerExtraControllers";
import { usePlyerContext } from "../context/playerContext";

const PlayerBar = () => {
  const { currentSong } = usePlyerContext();
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-black text-white w-100vw h-fit grid grid-cols-4 lg:grid-cols-12 px-1 pt-3 pb-3 md:hidden">
      <div className="flex gap-4 text-sm items-center lg:col-span-3">
        <img
          src={currentSong?.image}
          alt="song image"
          className="w-14 rounded-lg ml-3"
        />
        <div>
          <h2 className="font-semibold">{currentSong?.name}</h2>
          <p className="text-gray-400 text-xs font-semibold">
            {currentSong?.singers}
          </p>
        </div>
        <img
          src={assets.plus_icon}
          alt="plus icon"
          className="w-[17px] p-[2px] border-2 border-white rounded-full"
        />
      </div>

      <Player />
      <PlayerExtraControllers />
    </div>
  );
};

export default PlayerBar;
