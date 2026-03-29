import React, { useState } from "react";

const ProductsTools = () => {
  const [btnToggle, setBtnToggle] = useState(false);
  return (
    <div className="container mx-auto my-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-medium">
          Premium Digital Tools
        </h1>
        <p className="text-gray-400 my-3">
          Choose from our curated collection of premium digital products
          designed to <br /> boost your productivity and creativity.
        </p>
        <div className="text-center">
          <div className="inline-block border-2 border-gray-300 rounded-full py-0.5 px-1">
            <button
              className={`${btnToggle ? "bg-white text-black" : "text-white bg-linear-to-r from-[#4F39F6] to-[#8839f6]"} rounded-full px-4 py-1.5`}
              onClick={() => setBtnToggle(false)}
            >
              Products
            </button>
            <button
              className={`${btnToggle ? "text-white bg-linear-to-r from-[#4F39F6] to-[#8839f6] " : "bg-white text-black"} rounded-full px-4 py-1.5`}
              onClick={() => setBtnToggle(true)}
            >
              <span>Cart</span>
              <span>(0)</span>
            </button>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default ProductsTools;
