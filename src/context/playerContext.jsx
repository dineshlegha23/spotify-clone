import { createContext, useContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [homePageSongs, setHomePageSongs] = useState();
  const [songs, setSongs] = useState();
  const [albums, setAlbbums] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const [isMobilePlayerOpen, setIsMobilePlayerOpen] = useState(false);
  const [songsIndex, setSongsIndex] = useState();
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
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

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

  const playWithSource = (albumSongs, currentPlayingSong) => {
    // if (songsIndex.indexOf(currentSong._id) + 1 === songsIndex.length) {
    //   return;
    // }
    // if (songsIndex.indexOf(currentSong._id) === 0) {
    //   return;
    // }
    if (albumSongs !== songs) {
      setSongsIndex(albumSongs.map((song) => song._id));
    }

    audioRef.current.src = currentPlayingSong.file;
    audioRef.current.play();

    setCurrentSong(currentPlayingSong);
    setIsPlaying(true);
    setSongs(albumSongs);
  };

  const playHomePageSongs = (currentPlayingSong) => {
    audioRef.current.src = currentPlayingSong.file;
    audioRef.current.play();

    setCurrentSong(currentPlayingSong);
    setIsPlaying(true);
    setSongs(homePageSongs);
    setSongsIndex(homePageSongs.map((song) => song._id));
  };

  const playPrevious = () => {
    if (songsIndex.indexOf(currentSong._id) === 0) {
      return;
    }

    audioRef.current.src = songs[songsIndex.indexOf(currentSong._id) - 1].file;
    audioRef.current.play();
    setCurrentSong(songs[songsIndex.indexOf(currentSong._id) - 1]);
  };

  const playNext = () => {
    if (songsIndex.indexOf(currentSong._id) + 1 === songsIndex.length) {
      return;
    }

    audioRef.current.src = songs[songsIndex.indexOf(currentSong._id) + 1].file;
    audioRef.current.play();
    setCurrentSong(songs[songsIndex.indexOf(currentSong._id) + 1]);
  };

  const setSeekBar = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBgRef.current.offsetWidth) *
      audioRef.current.duration;
    audioRef.current.play();
  };

  const fetchSongs = async () => {
    const response = await fetch("http://localhost:5000/api/v1/songs");
    const data = await response.json();
    setHomePageSongs(data.data);
    console.log(data.data);
    audioRef.current.src = data.data[0].file;
    setCurrentSong(data.data[0]);

    setCurrentPlaylist(
      data.data.map((song) => {
        return { id: song._id, file: song.file };
      })
    );
    setSongsIndex(data.data.map((song) => song._id));
  };

  const fetchAlbums = async () => {
    const response = await fetch("http://localhost:5000/api/v1/albums");
    const data = await response.json();
    setAlbbums(data.data);
    console.log(data.data);
  };

  const playAll = (songs) => {
    setSongs(songs);
    setSongsIndex(songs.map((song) => song._id));
    setCurrentSong(songs[0]);
    audioRef.current.src = songs[0].file;
    audioRef.current.play();
  };

  useEffect(() => {
    fetchSongs();
    fetchAlbums();
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
    setIsPlaying(!audioRef.current.paused);
    audioRef.current.onplay = () => {
      setIsPlaying(true);
    };
    audioRef.current.onpause = () => {
      setIsPlaying(false);
    };

    if (audioRef.current.ended) {
      playNext();
    }
  }, [audioRef?.current?.paused]);

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        songs,
        setSongs,
        homePageSongs,
        albums,
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
        setCurrentPlaylist,
        playHomePageSongs,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlyerContext = () => {
  return useContext(PlayerContext);
};
