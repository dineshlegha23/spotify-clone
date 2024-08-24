import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const SingleAlbum = ({ image, text, id }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 hover:bg-zinc-800 p-2 rounded-lg">
      <img
        src={image}
        className="w-[155px] h-[155px] mx-auto sm:h-[160px] sm:w-[300px] rounded-lg"
        alt=""
        onClick={() => navigate(`/playlist/${id}`)}
      />
      <p className="font-semibold max-w-[160px] min-w-[160px] sm:w-[280px] text-white sm:min-w-[130px]">
        {text}
      </p>
    </div>
  );
};

export default SingleAlbum;
