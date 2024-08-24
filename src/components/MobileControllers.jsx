import React from "react";
import { assets } from "../assets/assets";

const MobileControllers = ({ isPlaying, playSong, pauseSong }) => {
  return (
    <div className="flex justify-between items-center mt-8">
      <img src={assets.shuffle_icon} className="w-6" alt="shuffle icon" />
      <div className="flex gap-[8vw] items-center">
        <img src={assets.prev_icon} className="w-7" alt="prev icon" />
        <div
          onClick={isPlaying ? pauseSong : playSong}
          className="bg-white rounded-full border border-white p-2 cursor-pointer hover:scale-125 transition-all"
        >
          {isPlaying ? (
            <img
              src={assets.pause_icon}
              className="w-9 p-2  filter invert cursor-pointer"
              alt="pause"
            />
          ) : (
            <img
              src={assets.play_icon}
              className="w-9 p-2 h-fit filter invert cursor-pointer"
              alt="play"
            />
          )}
        </div>
        <img src={assets.next_icon} className="w-7" alt="next icon" />
      </div>
      <img src={assets.loop_icon} className="w-6" alt="loop icon"></img>
    </div>
  );
};

export default MobileControllers;
