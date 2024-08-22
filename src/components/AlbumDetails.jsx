import React from "react";
import { assets } from "../assets/assets";

const AlbumDetails = ({ album }) => {
  return (
    <div className="mt-4 md:mt-10">
      <div className="flex gap-5 items-end md:flex-col md:items-start">
        <img
          src={album.image}
          className="w-36 rounded-lg h-[155px] md:w-[40%] md:h-[40%] md:min-w-[200px] md:self-center self-center"
          alt="album"
        />
        <div className="flex flex-col gap-2">
          <p className="md:hidden">Playlist</p>
          <h1 className="text-6xl font-bold md:text-3xl">Trending Now India</h1>
          <p className="text-zinc-500 font-semibold md:text-sm">
            Every track you're listening/should be listening to ;) Cover- Tauba
            Tauba
          </p>
          <div className="flex gap-2 items-center text-sm font-semibold">
            <img src={assets.spotify_logo} className="w-6" alt="spotify logo" />
            <p className="font-bold">Spotify</p>
            <div className="h-1 w-1 rounded-full bg-white"></div>
            <p>780,822 saves</p>
            <div className="h-1 w-1 rounded-full bg-white md:hidden"></div>
            <p className="md:hidden">75 songs, about 4 hr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;
