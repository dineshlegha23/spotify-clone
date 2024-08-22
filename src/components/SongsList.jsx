import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
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
      className="grid grid-cols-[50px_1.15fr_0.8fr_0.8fr_70px] xl:grid-cols-[50px_1fr_0.5fr_70px] [@media(max-width:550px)]:flex justify-between items-center mt-2 text-sm font-semibold text-zinc-400 py-2 cursor-pointer hover:bg-zinc-800 hover:rounded-lg [@media(max-width:550px)]:px-2"
    >
      <p className="text-center text-base text-white [@media(max-width:550px)]:hidden">
        {index}
      </p>
      <div className="flex gap-3 pr-2">
        <img src={image} className="w-10 aspect-auto rounded-lg" alt="song" />
        <div>
          <h3 className="text-white text-base">{name}</h3>
          <p className="truncate">{singers}</p>
        </div>
      </div>
      <p className="[@media(max-width:550px)]:hidden">{album}</p>
      <p className="xl:hidden">{date}</p>
      <p className="text-left [@media(max-width:550px)]:hidden">{duration}</p>
      <BsThreeDotsVertical className="[@media(max-width:550px)]:block hidden">
        ...
      </BsThreeDotsVertical>
    </div>
  );
};

export default SongsList;
