import React, { useEffect, useState } from "react";
import SingleSong from "./SingleSong";

const Songs = ({ heading }) => {
  const [songs, setSongs] = useState();

  const fetchSongs = async () => {
    const response = await fetch("http://localhost:5000/api/v1/songs");
    const data = await response.json();
    console.log(data);
    setSongs(data.data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);
  return (
    <div className="flex flex-col gap-5 my-5 cursor-pointer">
      <h2 className="text-2xl font-bold sm:text-xl">{heading}</h2>
      <div className="flex gap-3 text-white/50 text-sm overflow-scroll sm:gap-0">
        {songs &&
          songs.map((song) => {
            return <SingleSong key={song._id} {...song} />;
          })}
      </div>
    </div>
  );
};

export default Songs;
