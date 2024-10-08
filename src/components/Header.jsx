import React from "react";
import backward from "../assets/left_arrow.png";
import forward from "../assets/right_arrow.png";
import { assets } from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      <nav className="flex justify-between font-bold text-sm">
        <div className="flex gap-2">
          <img
            onClick={() => (location.pathname === "/" ? null : navigate(-1))}
            src={backward}
            className={`h-8 w-8 rounded-full bg-black/70 p-2 ${
              location.pathname == "/" ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            alt="back"
          />
          <img
            onClick={() => navigate(1)}
            src={forward}
            className={`h-8 w-8 rounded-full bg-black/70 p-2 cursor-pointer`}
            alt="forward"
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-black rounded-full px-4 py-1 sm:hidden">
            Explore Premium
          </button>

          <button className="flex items-center gap-1 bg-black/70 rounded-full px-3 py-1 [@media(max-width:350px)]:hidden">
            <img
              src={assets.arrow_icon}
              className="rotate-90 w-4 border border-white rounded-full p-1"
              alt="download"
            />
            <p> Install App</p>
          </button>
          <img
            src={assets.bell_icon}
            className="rounded-full bg-black/70 p-2 w-8 h-8"
            alt="bell"
          />
          <img
            src="https://makerbrane-f879.kxcdn.com/wp-content/uploads/avatars/51270/avatar-bpfull.jpg"
            className="w-8 h-8 rounded-full bg-black/70 p-1"
            alt="user"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
