import React from "react";
import { assets } from "../assets/assets";
import SingleAlbum from "./SingleAlbum";

const Albums = ({ heading, image, text }) => {
  return (
    <div className="flex flex-col gap-5 my-14">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <div className="flex gap-5 text-white/50 text-sm overflow-scroll">
        <SingleAlbum
          image={assets.img1}
          text={"Let these songs be the background score to..."}
        />
        <SingleAlbum
          image={assets.img2}
          text={"Let these songs be the background score to..."}
        />
        <SingleAlbum
          image={assets.img3}
          text={"Let these songs be the background score to..."}
        />
        <SingleAlbum
          image={assets.img4}
          text={"Let these songs be the background score to..."}
        />
        <SingleAlbum
          image={assets.img5}
          text={"Let these songs be the background score to..."}
        />
        <SingleAlbum
          image={assets.img6}
          text={"Let these songs be the background score to..."}
        />
        <SingleAlbum
          image={assets.img7}
          text={"Let these songs be the background score to..."}
        />
      </div>
    </div>
  );
};

export default Albums;
