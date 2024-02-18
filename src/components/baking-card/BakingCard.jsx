import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function BakingCard({ content }) {
  const { id, section, title, price, butn } = content;
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div
      className="flex flex-col gap-2 h-full bg-white rounded-2xl hover:backdrop-blur-lg hover:bg-opacity-20 border-2 hover:border-2 border-gray-500 hover:bg-gray-50 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex justify-end">
        <button
          className={`absolute m-2 backdrop-blur-xl rounded-full w-10 max-w-[40px] h-10 max-h-[40px] text-2xl  ${
            isLiked ? "text-pink-700" : "text-gray-700"
          } text-gray-500 shadow-md shadow-gray-900/10`}
          type="button"
          onClick={handleClick}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <FaHeart />
          </span>
        </button>
        <img
          src="../../../snickers.jpg"
          alt="snickers"
          className="w-full object-cover max-h-72 rounded-2xl m-4 "
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-2 m-4 mt-0">
        <p className="text-pink-500 font-bold text-xs bg-pink-200 rounded-xl px-4 py-1">
          {section}
        </p>
        <h4
          className={`text-xl font-bold ${
            isHovered ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h4>
        <p className="text-pink-500 font-bold text-sm">{price}</p>
        <button
          className={` text-white  text-md font-semibold px-4 py-1 rounded-2xl ${
            isHovered ? "bg-pink-700" : "bg-black"
          }`}
        >
          {butn}
        </button>
      </div>
    </div>
  );
}

export default BakingCard;
