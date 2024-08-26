import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { usePlyerContext } from "../context/playerContext";
import { assets } from "../assets/assets";
import MobileSeekBar from "./MobileSeekBar";
import MobileControllers from "./MobileControllers";
import { GoShareAndroid } from "react-icons/go";

const MobileFullPlayer = () => {
  const {
    currentSong,
    time,
    seekBarRef,
    seekBgRef,
    audioRef,
    setSeekBar,
    isPlaying,
    playSong,
    pauseSong,
    playPrevious,
    playNext,
    setIsMobilePlayerOpen,
  } = usePlyerContext();
  return (
    <section className="animate-showHide bg-[#102850] w-screen h-screen fixed flex flex-col justify-between top-0 z-10 px-6 text-white">
      <div className="flex justify-between items-center pt-2">
        <RiArrowDropDownLine
          onClick={() => setIsMobilePlayerOpen(false)}
          size={50}
          color="white"
          className="-ml-5"
        />
        <h4>Bollywood Central</h4>
        <BsThreeDots color="white" size={20} className="mr-2" />
      </div>
      <div className="flex justify-center mb-[400px] mt-2">
        <img
          src={currentSong.image}
          className="h-[45vh] max-h-[40vh] w-[100vw] max-w-[400px]"
          alt="song"
        />
      </div>

      <div className="fixed bottom-5 sm:bottom-0 w-screen pr-12">
        <div className="mt-5 flex justify-between items-center mb-8">
          <div>
            <h2 className="font-bold text-2xl">{currentSong.name}</h2>
            <p className="text-zinc-200">{currentSong.singers}</p>
          </div>
          <img src={assets.like_icon} alt="like icon" className="w-6" />
        </div>

        <MobileSeekBar
          audioRef={audioRef}
          seekBarRef={seekBarRef}
          setSeekBar={setSeekBar}
          seekBgRef={seekBgRef}
          currentSong={currentSong}
          time={time}
        />

        <MobileControllers
          playSong={playSong}
          pauseSong={pauseSong}
          isPlaying={isPlaying}
          playNext={playNext}
          playPrevious={playPrevious}
        />

        <div className="flex justify-between items-center mt-16 mb-4">
          <img src={assets.speaker_icon} className="w-4" alt="speaker icon" />
          <GoShareAndroid size={20} className="-mr-2" />
        </div>
      </div>
    </section>
  );
};

export default MobileFullPlayer;
