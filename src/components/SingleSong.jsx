import React from "react";
import { usePlyerContext } from "../context/playerContext";

const SingleSong = (song) => {
  const { playHomePageSongs } = usePlyerContext();
  return (
    <div className="flex flex-col gap-3 hover:bg-zinc-800 p-2 rounded-lg">
      <img
        src={song.image}
        className="w-[155px] h-[155px] mx-auto sm:h-[160px] sm:w-[300px] rounded-lg"
        alt=""
        onClick={() => playHomePageSongs(song)}
      />
      <p className="font-semibold max-w-[160px] min-w-[160px] sm:w-[280px] text-white sm:min-w-[130px]">
        {song.name}
      </p>
    </div>
  );
};

export default SingleSong;
