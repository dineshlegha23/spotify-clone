import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AlbumDetails from "../components/AlbumDetails";
import AlbumSongsContainer from "../components/AlbumSongsContainer";

const PlaylistPage = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState();

  const fetchSingleAlbum = async () => {
    const response = await fetch(`http://localhost:5000/api/v1/albums/${id}`);
    const data = await response.json();
    setAlbumData(data.album);
  };

  useEffect(() => {
    fetchSingleAlbum();
  }, []);

  return (
    <>
      <AlbumDetails albumData={albumData} />
      <AlbumSongsContainer songs={albumData?.songs} />
    </>
  );
};

export default PlaylistPage;
