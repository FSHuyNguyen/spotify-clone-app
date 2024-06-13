import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[20%] rounded flex flex-col justify-around">
        <div className="flex items-center pl-7 cursor-pointer">
          <img className="w-8" src={assets.spotify_icon} alt="Spotify icon" />
          <p className="font-bold text-sm">Spotify</p>
        </div>
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="Home icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[80%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <img className="w-8" src={assets.stack_icon} alt="Stack icon" />
            <p className="font-bold">Your library</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus icon" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">it's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Let's findsome podcats to follow</h1>
          <p className="font-light">we'll keep update on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
