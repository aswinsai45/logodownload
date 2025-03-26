import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-bold box-border p-5">
        <div className="flex flex-row items-center justify-center box-border border-4 p-4 max-w-[600px] rounded-[20px]">
          <FaSearch />
          <input
            className="px-5 outline-none"
            type="text"
            placeholder="search a sticker or logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
