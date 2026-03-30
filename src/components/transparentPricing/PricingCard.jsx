import React from "react";
import { FaCheck } from "react-icons/fa6";

const PricingCard = ({ item }) => {
  console.log(item);

  const {
    buttonText,
    features,
    highlight,
    isPopular,
    period,
    plan,
    price,
    subtitle,
    buttonStyle,
  } = item;

  return (
    <div
      className={`rounded-lg mt-5  p-3 ${highlight ? "bg-linear-to-r from-[#4F39F6] to-[#8839f6] text-white" : "bg-gray-100"} relative`}
    >
      {isPopular && (
        <p
          className="absolute -top-4 left-1/2 -translate-x-1/2 
                bg-yellow-100 text-yellow-500 text-xs font-semibold px-5 py-2 rounded-full shadow-md"
        >
          Most Popular
        </p>
      )}
      <div>
        <h1 className="text-xl font-medium">{plan}</h1>
        <p  className={`${highlight ? "text-white" : "text-gray-400"} text-sm font-normal my-2`}>{subtitle}</p>
        <div>
          <h1 className="text-4xl font-medium">
            ${price} <span  className={`${highlight ? "text-white" : "text-gray-400"} text-sm font-normal`}>{period}</span>
          </h1>
        </div>
        <ul>
          {features.map((li, index) => (
            <li key={index} className="flex gap-3 items-center my-3">
              <FaCheck className={`${highlight ? "text-white" : "text-green-600"}`} />
              <p className={`${highlight ? "text-white" : "text-gray-400"} text-sm`}>{li}</p>
            </li>
          ))}
        </ul>
        <button className={`${highlight ?  "bg-white text-black": buttonStyle } w-full rounded-full py-2 my-4 ${item.id==1 && "mt-20" } cursor-pointer`}>{buttonText}</button>
      </div>
    </div>
  );
};

export default PricingCard;
