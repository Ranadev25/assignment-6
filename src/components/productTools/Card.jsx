import { toast } from 'react-toastify';
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Card = ({ product, setCount, activeButtonId, setActiveButtonId,setNewProducts }) => {
  const [isClick, setIsClick] = useState(false)
  const {
    id,
    description,
    features,
    image,
    name,
    period,
    price,
    tagType,
  } = product;
  const getTagStyle = (tagType) => {
    switch(tagType) {
      case 'best-seller':
        return 'bg-amber-200 text-amber-500';    
      case 'popular':
        return 'bg-purple-200 text-purple-500';    
      case 'new':
        return 'bg-emerald-200 text-emerald-500';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const handelBuyProduct = (id) => {
    setCount(pre => pre + 1)
    setIsClick(true)
    setActiveButtonId(id);
    setNewProducts(pre => [...pre, product])
    toast.success("Product card is added")
  }
  return (
    <div className="border-2 border-gray-200 rounded-lg p-3 relative bg-white">
      <div>
        <p className={`absolute top-1 right-3 ${getTagStyle(tagType)} px-3 py-0.5 rounded-full `} >{tagType}</p>
        <img className="border border-gray-200 p-2 mt-3 rounded-full" src={image} alt="img" />
        <h1 className="text-xl font-medium my-3">{name}</h1>
        <p className="text-gray-400 text-sm">{description}</p>
        <h2 className="font-medium text-lg my-2 ">
          ${price}
          <span className="text-sm text-gray-400">/{period}</span>{" "}
        </h2>
        <ul>
          {features.map((item,index) => (
            <li key={index} className="flex gap-2 items-center text-sm text-gray-400">
              <FaCheck className="text-green-500" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <button className={`text-center w-full  text-white py-2 rounded-full mt-3 cursor-pointer ${activeButtonId === product.id  ? "bg-green-500 hover:bg-green-400" : "bg-blue-500 hover:bg-blue-400"}`} onClick={() => handelBuyProduct(id)} disabled={isClick} >{ isClick ? "Card is Added" : "Buy Now"}</button>
      </div>
    </div>
  );
};

export default Card;
