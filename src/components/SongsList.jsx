import React from "react";
import { assets } from "../assets/assets";
import { usePlyerContext } from "../context/playerContext";

const SongsList = ({
  id,
  index,
  image,
  name,
  singers,
  album,
  date,
  duration,
  file,
}) => {
  const { playWithSource } = usePlyerContext();
  return (
    <div
      onClick={() => playWithSource(id, file)}
      className="grid grid-cols-[50px_1.15fr_0.8fr_0.8fr_70px] items-center mt-2 text-sm font-semibold text-zinc-400 py-2 cursor-pointer hover:bg-zinc-800 hover:rounded-lg"
    >
      <p className="text-center text-base text-white">{index}</p>
      <div className="flex gap-3">
        <img src={image} className="w-10 rounded-lg" alt="song" />
        <div>
          <h3 className="text-white text-base">{name}</h3>
          <p>{singers}</p>
        </div>
      </div>
      <p>{album}</p>
      <p>{date}</p>
      <p className="text-left">{duration}</p>
    </div>
  );
};

export default SongsList;
