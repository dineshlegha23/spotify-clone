import React from "react";
import { assets } from "../assets/assets";

const Player = () => {
  return (
    <section className="col-span-2 flex flex-col items-center justify-center gap-2 pt-1 pb-1 w-full">
      <div className="flex gap-6 items-center justify-center h-fit">
        <img
          src={assets.shuffle_icon}
          className="w-[15px] h-fit"
          alt="shuffle"
        />
        <img src={assets.prev_icon} className="w-[15px] h-fit" alt="previous" />
        <div className="bg-white rounded-full border border-white p-2">
          <img
            src={assets.play_icon}
            className="w-[15px] h-fit filter invert"
            alt="play"
          />
        </div>

        <img src={assets.next_icon} className="w-[15px] h-fit" alt="next" />
        <img src={assets.loop_icon} className="w-[15px] h-fit" alt="repeat" />
      </div>

      <div className="flex items-center gap-2 text-xs text-white/70 font-semibold">
        <p>0:00</p>
        <div className="w-[515px] bg-zinc-700 h-1 rounded-sm">
          <div className="w-[50%] bg-white h-full rounded-sm"></div>
        </div>
        <p>4:24</p>
      </div>
    </section>
  );
};

export default Player;
