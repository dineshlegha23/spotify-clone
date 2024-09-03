import React, { useEffect, useState } from "react";
import { albumsData } from "../assets/assets";
import SingleAlbum from "./SingleAlbum";
import { usePlyerContext } from "../context/playerContext";

const Albums = ({ heading, image, text }) => {
  const { albums } = usePlyerContext();

  return (
    <div className="flex flex-col gap-5 my-5 cursor-pointer">
      <h2 className="text-2xl font-bold sm:text-xl">{heading}</h2>
      <div className="flex gap-3 text-white/50 text-sm overflow-scroll sm:gap-0">
        {albums.map((item) => {
          return (
            <SingleAlbum
              key={item._id}
              id={item._id}
              image={item.image}
              text={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
