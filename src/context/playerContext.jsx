import { createContext, useContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const audioRef = useRef();
  const data = "data1";

  const playSong = (file) => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playWithSource = (id, file) => {
    audioRef.current.src = file;
    audioRef.current.play();
    setCurrentSong(songsData[id]);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    if (currentSong.id == 0) {
      return;
    }
    audioRef.current.src = songsData[currentSong.id - 1].file;
    audioRef.current.play();
    setCurrentSong(songsData[currentSong.id - 1]);
  };

  const playNext = () => {
    if (songsData.length <= currentSong.id + 1) {
      return;
    }
    audioRef.current.src = songsData[currentSong.id + 1].file;
    audioRef.current.play();
    setCurrentSong(songsData[currentSong.id + 1]);
  };

  useEffect(() => {
    audioRef.current.src = songsData[0].file;
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        data,
        audioRef,
        playSong,
        playPrevious,
        playNext,
        currentSong,
        isPlaying,
        pauseSong,
        setIsPlaying,
        playWithSource,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlyerContext = () => {
  return useContext(PlayerContext);
};
