import { createContext, useContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const [isMobilePlayerOpen, setIsMobilePlayerOpen] = useState(false);
  const [playAll, setPlayAll] = useState(undefined);
  const [time, setTime] = useState({
    currentTime: {
      minutes: 0,
      seconds: "00",
    },
    totalTime: {
      minutes: 0,
      seconds: 0,
    },
  });

  const audioRef = useRef();
  const seekBarRef = useRef();
  const seekBgRef = useRef();

  const playSong = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playWithSource = (currentPlayingSong, file) => {
    audioRef.current.src = file;
    audioRef.current.play();
    setCurrentSong(currentPlayingSong);
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

  const setSeekBar = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBgRef.current.offsetWidth) *
      audioRef.current.duration;
    audioRef.current.play();
  };

  useEffect(() => {
    audioRef.current.src = songsData[0].file;
  }, []);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (!isPlaying) {
        clearInterval(interval);
        return;
      }
      const currentSeconds = String(
        Math.ceil(audioRef.current.currentTime % 60)
      ).padStart(2, "0");
      const currentMinutes = Math.floor(audioRef.current.currentTime / 60);

      const totalSeconds = String(
        Math.ceil(audioRef.current.duration % 60)
      ).padStart(2, "0");
      const totalMinutes = Math.floor(audioRef.current.duration / 60);
      setTime({
        currentTime: { minutes: currentMinutes, seconds: currentSeconds },
        totalTime: { minutes: totalMinutes, seconds: totalSeconds },
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (!currentSong?.desc) {
      if (audioRef.current.ended === true || false) {
        playNext();
        return;
      }

      if (playAll === undefined) {
        return;
      }

      audioRef.current.src = songsData[0].file;
      setCurrentSong(songsData[0]);
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      return;
    }
  }, [playAll, audioRef?.current?.ended]);

  useEffect(() => {
    setIsPlaying(!audioRef.current.paused);
    audioRef.current.onplay = () => {
      setIsPlaying(true);
    };
    audioRef.current.onpause = () => {
      setIsPlaying(false);
    };

    // if (audioRef.current.ended) {
    //   playNext();
    // }
  }, [audioRef?.current?.paused]);

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        playSong,
        playPrevious,
        playNext,
        currentSong,
        isPlaying,
        pauseSong,
        setIsPlaying,
        playWithSource,
        seekBarRef,
        time,
        seekBgRef,
        setSeekBar,
        isMobilePlayerOpen,
        setIsMobilePlayerOpen,
        playAll,
        setPlayAll,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlyerContext = () => {
  return useContext(PlayerContext);
};
