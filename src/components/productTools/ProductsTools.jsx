import React, { useState } from "react";
import Card from "./Card";
import AddCard from "./AddCard";

const ProductsTools = ({
  products,
  setCount,
  count,
  setNewProducts,
  newProducts,
}) => {
  const [btnToggle, setBtnToggle] = useState(true);
  const [activeButtonId, setActiveButtonId] = useState(null);
  return (
    <div className="md:w-[90%] lg:w-[85%] mx-auto my-10 mb-20">
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
              className={`${btnToggle ? "text-white bg-linear-to-r from-[#4F39F6] to-[#8839f6]" : " bg-white text-black"} rounded-full px-4 py-1.5`}
              onClick={() => setBtnToggle(true)}
            >
              Products
            </button>
            <button
              className={`${btnToggle ? "bg-white text-black" : "text-white bg-linear-to-r from-[#4F39F6] to-[#8839f6] "} rounded-full px-4 py-1.5`}
              onClick={() => setBtnToggle(false)}
            >
              <span>Cart</span>
              <span>({count})</span>
            </button>
          </div>
        </div>
      </div>
      {btnToggle ? (
        <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 bg-gray-50 rounded-lg p-3">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              setCount={setCount}
              activeButtonId={activeButtonId}
              setActiveButtonId={setActiveButtonId}
              setNewProducts={setNewProducts}
            />
          ))}
        </div>
      ) : (
        <AddCard newProducts={newProducts} setNewProducts={setNewProducts} setCount={setCount} />
      )}
    </div>
  );
};

export default ProductsTools;
