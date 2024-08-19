import React from "react";
import { assets } from "../assets/assets";

const AlbumDetails = ({ album }) => {
  return (
    <div className="mt-4">
      <div className="flex gap-5 items-end">
        <img
          src={album.image}
          className="w-36 rounded-lg h-[155px]"
          alt="album"
        />
        <div className="flex flex-col gap-2">
          <p>Playlist</p>
          <h1 className="text-[90px] leading-7 font-bold my-6">
            Trending Now India
          </h1>
          <p className="mt-5 text-zinc-500 font-semibold">
            Every track you're listening/should be listening to ;) Cover- Tauba
            Tauba
          </p>
          <div className="flex gap-2 items-center text-sm font-semibold">
            <img src={assets.spotify_logo} className="w-6" alt="spotify logo" />
            <p className="font-bold">Spotify</p>
            <div className="h-1 w-1 rounded-full bg-white"></div>
            <p>780,822 saves</p>
            <div className="h-1 w-1 rounded-full bg-white"></div>
            <p>75 songs, about 4 hr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;
