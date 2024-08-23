import React from "react";
import { usePlyerContext } from "../context/playerContext";
import { assets } from "../assets/assets";

const MobileMiniPlayer = () => {
  const { currentSong, playSong, pauseSong, isPlaying } = usePlyerContext();

  return (
    <div className="hidden fixed bottom-[66px] items-center sm:flex justify-between bg-[#102850] text-white py-[8px] px-[6px] w-[98%] mx-1 rounded-lg">
      <div className="flex gap-2">
        <img
          src={currentSong.image}
          className="w-10 rounded-md"
          alt="song image"
        />
        <div className="text-sm">
          <h3 className="font-semibold">{currentSong.name}</h3>
          <p>{currentSong.singers}</p>
        </div>
      </div>
      <div>
        <div className="flex gap-5 items-center mr-3">
          <img src={assets.like_icon} className="w-5" alt="like icon" />
          {isPlaying ? (
            <img
              onClick={() => pauseSong()}
              src={assets.pause_icon}
              className="w-5"
              alt="pause icon"
            />
          ) : (
            <img
              onClick={() => playSong()}
              src={assets.play_icon}
              className="w-5"
              alt="play icon"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMiniPlayer;
