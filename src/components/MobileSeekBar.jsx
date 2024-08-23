import React from "react";

const SeekBar = ({
  time,
  seekBarRef,
  seekBgRef,
  setSeekBar,
  currentSong,
  audioRef,
}) => {
  const progressBar = Math.ceil(
    (audioRef?.current?.currentTime / audioRef?.current?.duration) * 100
  );
  return (
    <div className="flex items-center flex-col gap-1 text-xs text-white/70 font-semibold">
      <div
        ref={seekBgRef}
        onClick={(e) => setSeekBar(e)}
        className="w-full bg-zinc-700 h-1 rounded-sm cursor-pointer"
      >
        <div
          ref={seekBarRef}
          style={{ width: `${progressBar || 0}%` }}
          className="bg-white h-full rounded-sm"
        ></div>
      </div>
      <div className="flex justify-between w-full">
        <p className="max-w-5">
          {time?.currentTime.minutes}:{time?.currentTime.seconds}
        </p>
        <p>{currentSong?.duration}</p>
      </div>
    </div>
  );
};

export default SeekBar;
