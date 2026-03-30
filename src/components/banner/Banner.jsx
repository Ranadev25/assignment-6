import React from "react";
import BannerImg from "../../assets/banner.png";
import PlayIcon from "../../assets/Play.png";

const Banner = () => {
  return (
    <div className="md:w-[90%] lg:w-[85%] mx-auto mt-10">
      <div className="px-0 max-sm:px-3">
        <div className=" md:flex justify-center items-center gap-5 lg:gap-10">
          <div className="md:w-[56%]">
            <div className="bg-blue-50 inline-block px-4 py-1 rounded-full mt-10 text-blue-500 ">
              <div className="flex accent-emerald-50 justify-center">
                <input type="radio" className="accent-[#4F39F6] mr-1" />
                <span>New: AI-Powered Tools Available</span>
              </div>
            </div>
            <h1 className="text-3xl mt-3 lg:mt-7 sm:text-4xl md:text-5xl xl:text-7xl font-medium">Supercharge Your</h1>
            <h1 className="text-3xl my-2 lg:mb-5 sm:text-4xl md:text-5xl xl:text-7xl font-medium">Digital Workflow</h1>
            <p className="text-[#627382] py-3">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex items-center gap-2 mt-2 lg:mt-5"> 
              <button className="text-white bg-linear-to-r from-[#4F39F6] to-[#8839f6] hover:scale-95 rounded-full px-3 py-2 cursor-pointer">Explore Products</button>
              <button className="flex gap-2 items-center justify-center border border-gray-300 hover:bg-blue-50 rounded-full px-3 py-2 cursor-pointer">
                <img src={PlayIcon} alt="Play Icon" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          <div className="md:w-[44%]">
            <div>
              <img className="w-full my-10 md:my-16" src={BannerImg} alt="banner image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
