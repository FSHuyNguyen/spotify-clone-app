import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="relative min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] group"
    >
      <img className="rounded" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100"
        height="100"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 1600 800"
        className="absolute bottom-[64px] -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        <g id="Calque_1">
          <path fill="transparent" d="M0,0 L1600,0 L1600,800 L0,800 L0,0 z" />
          <g id="change_theme_color.png">
            <path
              id="Gray_Shape"
              fill="#1ED761"
              d="M800,780 C590.132,780 420,609.868 420,400 C420,190.132 590.132,20 800,20 C1009.868,20 1180,190.132 1180,400 C1180,609.868 1009.868,780 800,780 z"
            />
            <path
              id="play"
              fill="#000"
              d="M955.061,379.165 C976.022,391.403 975.978,411.155 954.974,423.283 L726.626,555.11 C705.6,567.26 688.484,557.395 688.374,533.139 L687.188,266.76 C687.078,242.504 703.996,232.726 724.957,244.964 L955.061,379.165 z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

AlbumItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  id: PropTypes.number,
};

export default AlbumItem;
