import React from "react";

const BannerBottom = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#8839f6]">
      <div className="container py-5 mx-auto">
        <div className="grid sm:grid-cols-3 justify-around ">
          <div className="text-center text-white my-5">
            <h1 className="text-4xl font-medium">50k+</h1>
            <p className="text-gray-300">Active Users</p>
          </div>
          <div className="text-center text-white my-5 sm:border-l-2 sm:border-r-2 border-gray-400">
            <h1 className="text-4xl font-medium">200+</h1>
            <p className="text-gray-300">Premium Tools</p>
          </div>
          <div className="text-center text-white my-5">
            <h1 className="text-4xl font-medium">4.9</h1>
            <p className="text-gray-300">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
