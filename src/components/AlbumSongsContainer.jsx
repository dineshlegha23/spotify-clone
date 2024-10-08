import React from "react";
import { assets } from "../assets/assets";
import SongsList from "./SongsList";
import { usePlyerContext } from "../context/playerContext";

const AlbumSongsContainer = ({ songs }) => {
  const { playAll } = usePlyerContext();
  return (
    <div className="sticky mt-5 pb-5 pt-5 bg-black/50 h-full px-5 md:px-2 py-3 -m-[18px] md:pb-[70px]">
      <div className="flex gap-7 [@media(max-width:550px)]:mb-10 md:px-2">
        <img
          onClick={() => playAll(songs)}
          src={assets.play_icon}
          className="w-14 bg-green-500 rounded-full p-4 cursor-pointer"
          alt="play"
        />
        <img
          src={assets.plus_icon}
          className="w-7 h-fit self-center rounded-full border-2 border-white p-1"
          alt="plus"
        />
        <p className="text-4xl">...</p>
      </div>

      <div className="grid grid-cols-[50px_1.15fr_0.8fr_0.8fr_70px] xl:grid-cols-[50px_1fr_0.5fr_70px] [@media(max-width:550px)]:hidden items-center mt-6 text-sm font-semibold text-zinc-400 border-zinc-800 border-b-[0.1px] pb-2">
        <p className="text-center">#</p>
        <p className="pr-2">Title</p>
        <p>Album</p>
        <p className="xl:hidden">Date added</p>
        <img src={assets.clock_icon} className="w-4 ml-2" alt="clock icon" />
      </div>

      {songs &&
        songs.map((song, index) => {
          return (
            <SongsList
              key={song._id}
              _id={song._id}
              index={index + 1}
              name={song.name}
              image={song.image}
              duration={song.duration}
              singers={song.singers}
              album={song.album}
              file={song.file}
              songs={songs}
            />
          );
        })}
    </div>
  );
};

export default AlbumSongsContainer;
