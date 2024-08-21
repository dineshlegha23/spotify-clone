import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { usePlyerContext } from "../context/playerContext";

const Player = () => {
  const {
    audioRef,
    song,
    playSong,
    playPrevious,
    playNext,
    isPlaying,
    pauseSong,
    currentSong,
    time,
    seekBarRef,
    setSeekBar,
    seekBgRef,
  } = usePlyerContext();

  const progressBar = Math.ceil(
    (audioRef?.current?.currentTime / audioRef?.current?.duration) * 100
  );

  return (
    <section className="col-span-2 flex flex-col items-center justify-center gap-2 pt-1 pb-1 w-full">
      <div className="flex gap-6 items-center justify-center h-fit">
        <img
          src={assets.shuffle_icon}
          className="w-[15px] h-fit cursor-pointer hover:scale-125 transition-all"
          alt="shuffle"
        />
        <img
          onClick={() => playPrevious()}
          src={assets.prev_icon}
          className="w-[15px] h-fit cursor-pointer hover:scale-125 transition-all"
          alt="previous"
        />
        <div
          onClick={isPlaying ? pauseSong : playSong}
          className="bg-white rounded-full border border-white p-2 cursor-pointer hover:scale-125 transition-all"
        >
          <audio src={song} ref={audioRef} />
          {isPlaying ? (
            <img
              src={assets.pause_icon}
              className="w-[15px] h-fit filter invert cursor-pointer"
              alt="pause"
            />
          ) : (
            <img
              src={assets.play_icon}
              className="w-[15px] h-fit filter invert cursor-pointer"
              alt="play"
            />
          )}
        </div>

        <img
          onClick={() => playNext()}
          src={assets.next_icon}
          className="w-[15px] h-fit cursor-pointer hover:scale-125 transition-all"
          alt="next"
        />
        <img
          src={assets.loop_icon}
          className="w-[15px] h-fit cursor-pointer hover:scale-125 transition-all"
          alt="repeat"
        />
      </div>

      <div className="flex items-center gap-2 text-xs text-white/70 font-semibold">
        <p className="max-w-5">
          {time?.currentTime.minutes}:{time?.currentTime.seconds}
        </p>
        <div
          ref={seekBgRef}
          onClick={(e) => setSeekBar(e)}
          className="w-[515px] bg-zinc-700 h-1 rounded-sm cursor-pointer"
        >
          <div
            ref={seekBarRef}
            style={{ width: `${progressBar || 0}%` }}
            className="bg-white h-full rounded-sm"
          ></div>
        </div>
        <p>{currentSong?.duration}</p>
      </div>
    </section>
  );
};

export default Player;
