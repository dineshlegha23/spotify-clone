import React from "react";
import { assets } from "../assets/assets";

const SingleAlbum = ({ image, text }) => {
  return (
    <div className="flex flex-col gap-3">
      <img src={image} className="w-[155px] h-[155px] rounded-lg" alt="" />
      <p className="font-semibold max-w-[160px] min-w-[160px]">{text}</p>
    </div>
  );
};

export default SingleAlbum;
