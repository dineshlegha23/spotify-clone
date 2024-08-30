import React from "react";
import MusicPodcast from "../components/MusicPodcast";
import Albums from "../components/Albums";
import Songs from "../components/Songs";

const AlnumsPage = () => {
  return (
    <>
      <MusicPodcast />
      <Albums heading={"More like Bollywood central"} />
      <Songs heading={"Your favourites"} />
    </>
  );
};

export default AlnumsPage;
