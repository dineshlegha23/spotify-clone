import React from "react";
import { albumsData } from "../assets/assets";
import SingleAlbum from "./SingleAlbum";

const Albums = ({ heading, image, text }) => {
  return (
    <div className="flex flex-col gap-5 my-5 cursor-pointer">
      <h2 className="text-2xl font-bold sm:text-xl">{heading}</h2>
      <div className="flex gap-3 text-white/50 text-sm overflow-scroll sm:gap-0">
        {albumsData.map((item) => {
          return (
            <SingleAlbum
              key={item.id}
              id={item.id}
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
