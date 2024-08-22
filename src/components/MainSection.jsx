import React from "react";
import Header from "./Header";
import AlbumsPage from "../pages/AlbumsPage";
import { Route, Routes } from "react-router-dom";
import PlaylistPage from "../pages/PlaylistPage";

const MainSection = () => {
  return (
    <div className="sticky inset-0 w-[calc(100%-545px)] lg:w-[calc(100%-30%)] md:w-full md:m-0 md:rounded-none h-fit my-2 mb-28 mr-2 bg-white/10 rounded-lg px-[18px] md:px-4 py-4 md:pb-4 md:h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<AlbumsPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Routes>
    </div>
  );
};

export default MainSection;
