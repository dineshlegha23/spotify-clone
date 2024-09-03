import React, { useEffect, useState } from "react";
import SingleSong from "./SingleSong";
import { usePlyerContext } from "../context/playerContext";

const Songs = ({ heading }) => {
  const { homePageSongs } = usePlyerContext();

  return (
    <div className="flex flex-col gap-5 my-5 cursor-pointer">
      <h2 className="text-2xl font-bold sm:text-xl">{heading}</h2>
      <div className="flex gap-3 text-white/50 text-sm overflow-scroll sm:gap-0">
        {homePageSongs &&
          homePageSongs.map((song) => {
            return <SingleSong key={song._id} {...song} />;
          })}
      </div>
    </div>
  );
};

export default Songs;
