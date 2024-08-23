import React from "react";

const MusicPodcast = () => {
  return (
    <div className="mt-6 mb-10 flex gap-2 text-sm font-semibold">
      <button className="bg-white text-black rounded-full px-3 py-1 pb-[8px]">
        All
      </button>
      <button className="bg-zinc-800 text-white rounded-full px-3 py-1 pb-[8px]">
        Music
      </button>
      <button className="bg-zinc-800 text-white rounded-full px-3 py-1 pb-[8px]">
        Podcasts
      </button>
    </div>
  );
};

export default MusicPodcast;
