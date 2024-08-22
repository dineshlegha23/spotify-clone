import React from "react";
import { albumsData, assets } from "../assets/assets";
import SingleAlbum from "./SingleAlbum";

const Albums = ({ heading, image, text }) => {
  return (
    <div className="flex flex-col gap-5 my-5">
      <h2 className="text-2xl font-bold sm:text-xl">{heading}</h2>
      <div className="flex gap-5 text-white/50 text-sm overflow-scroll sm:gap-3">
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
