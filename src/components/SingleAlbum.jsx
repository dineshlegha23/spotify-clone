import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const SingleAlbum = ({ image, text, id }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3">
      <img
        src={image}
        className="w-[155px] h-[155px] rounded-lg"
        alt=""
        onClick={() => navigate(`/playlist/${id}`)}
      />
      <p className="font-semibold max-w-[160px] min-w-[160px]">{text}</p>
    </div>
  );
};

export default SingleAlbum;
