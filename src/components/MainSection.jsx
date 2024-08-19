import React from "react";
import Header from "./Header";
import Albums from "./Albums";
import { assets } from "../assets/assets";

const MainSection = () => {
  return (
    <div className="w-[calc(100%-445px)] my-2 mb-16 mr-2 bg-white/10 rounded-lg px-[18px] py-4">
      <Header />
      <div className="my-14">
        <Albums heading={"More like Bollywood central"} />
        <Albums heading={"Songs that you like"} />
      </div>
    </div>
  );
};

export default MainSection;
