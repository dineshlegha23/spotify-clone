import React from "react";
import { assets } from "../assets/assets";

const PlayerExtraControllers = () => {
  return (
    <div className="flex gap-4 items-center justify-end px-3 py-2 lg:col-span-1">
      <img
        src={assets.plays_icon}
        className="w-4 h-fit lg:hidden"
        alt="plays"
      />
      <img src={assets.mic_icon} className="w-4 h-fit lg:hidden" alt="mic" />
      <img
        src={assets.queue_icon}
        className="w-4 h-fit lg:hidden"
        alt="queue"
      />
      <img
        src={assets.speaker_icon}
        className="w-4 h-fit lg:hidden"
        alt="speaker"
      />
      <div className="flex items-center gap-2 lg:hidden">
        <img src={assets.volume_icon} className="w-4 h-fit" alt="volumme" />
        <div className="w-[93px] h-1 bg-zinc-700 rounded-sm">
          <div className="w-[100%] bg-white h-full rounded-sm"></div>
        </div>
      </div>
      <img
        src={assets.mini_player_icon}
        className="w-4 h-fit"
        alt="mini player"
      />
      <img src={assets.zoom_icon} className="w-4 h-fit" alt="zoom" />
    </div>
  );
};

export default PlayerExtraControllers;
