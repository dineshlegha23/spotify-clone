import React from "react";
import { useParams } from "react-router-dom";
import { albumsData, assets } from "../assets/assets";
import AlbumDetails from "../components/AlbumDetails";
import AlbumSongsContainer from "../components/AlbumSongsContainer";

const PlaylistPage = () => {
  const { id } = useParams();
  const album = albumsData[id];
  return (
    <>
      <AlbumDetails album={album} />
      <AlbumSongsContainer />
    </>
  );
};

export default PlaylistPage;
