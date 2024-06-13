import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useEffect, useRef, useState } from "react";
import { albumsData, singersData, songsData } from "../assets/assets";
import DisplayArtist from "./DisplayArtist";
import DisplaySong from "./DisplaySong";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    switch (path) {
      case "album": {
        setBgColor("#2a4365");
        break;
      }
      case "artist":
        {
          setBgColor("#22543d");
        }
        break;
      case "song":
        {
          setBgColor("#742a2a");
        }
        break;
      default:
        setBgColor("");
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    if (bgColor) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  }, [bgColor]);

  return (
    <div
      ref={displayRef}
      className="w-[100%] lg:w-[75%] m-2 lg:ml-0 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/artist/:id" element={<DisplayArtist />} />
        <Route path="/song/:id" element={<DisplaySong />} />
      </Routes>
    </div>
  );
};

export default Display;
