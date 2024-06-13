import { useParams } from "react-router-dom";
import { assets, songsData } from "../assets/assets";
import Navbar from "./Navbar";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplaySong = () => {
  const { id } = useParams();
  const songData = songsData.find((album) => album.id === Number(id));
  const { playWithId } = useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="rounded w-60"
          src={songData.image}
          alt="Album Data Image"
        />
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {songData.name}
          </h2>
          <h4>{songData.desc}</h4>
          <p className="mt-1 flex items-center">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt="Spotify Logo"
            />
            <span className="ml-2">1,323,154 likes</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Clock icon" />
      </div>
      <hr />
      {songsData
        .filter((item) => item.id !== Number(id))
        .map((item, index) => (
          <div
            onClick={() => playWithId(item.id)}
            key={index}
            className="grid grid-cols-3 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          >
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img
                className="inline w-10 mr-5"
                src={item.image}
                alt="Item image"
              />
              {item.name}
            </p>
            <p className="text-[15px] hidden sm:block">2 days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))}
    </>
  );
};

export default DisplaySong;
