import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { singersData, songsData } from "../assets/assets";

export const PlayerContext = createContext({});

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBgRef = useRef();
  const seekBarRef = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: "00",
      minute: 0,
    },
    totalTime: {
      second: "00",
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id, artist_id = 0, type = 0) => {
    let findSong;
    if (type == 1) {
      findSong = singersData
        .find((album) => album.id === Number(artist_id))
        .play_list.find((song) => song.id === Number(id));
    } else {
      findSong = songsData.find((album) => album.id === Number(id));
    }
    await setTrack(findSong);
    play();
  };

  const previous = async () => {
    if (track.id > 1) {
      const prevSong = songsData.find(
        (album) => album.id === Number(track.id - 1)
      );
      await setTrack(prevSong);
      play();
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      const nextSong = songsData.find(
        (album) => album.id === Number(track.id + 1)
      );
      await setTrack(nextSong);
      play();
    }
  };

  const seekSong = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBgRef.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    const currentAudio = audioRef.current;

    const updateSeekBar = () => {
      if (currentAudio && seekBarRef.current) {
        const widthPercentage = Math.floor(
          (currentAudio.currentTime / currentAudio.duration) * 100
        );
        seekBarRef.current.style.width = `${widthPercentage}%`;

        setTime({
          currentTime: {
            second: Math.floor(currentAudio.currentTime % 60)
              .toString()
              .padStart(2, "0"),
            minute: Math.floor(currentAudio.currentTime / 60),
          },
          totalTime: {
            second: currentAudio.duration
              ? Math.floor(currentAudio.duration % 60)
                  .toString()
                  .padStart(2, "0")
              : "00",
            minute: currentAudio.duration
              ? Math.floor(currentAudio.duration / 60)
              : 0,
          },
        });
      }
    };

    currentAudio.ontimeupdate = updateSeekBar;

    return () => {
      if (currentAudio) {
        currentAudio.ontimeupdate = null;
      }
    };
  }, [audioRef, seekBarRef, setTime]);

  const contextValue = {
    audioRef,
    seekBgRef,
    seekBarRef,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

PlayerContextProvider.propType = {
  children: PropTypes.node.isRequired,
};

export default PlayerContextProvider;
