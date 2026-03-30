import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navber = ({ count }) => {
  return (
    <div className="shadow-sm max-w-400 mx-auto fixed top-0 z-10 bg-white left-0 right-0">
      <div className="md:w-[90%] lg:w-[85%] mx-auto ">
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-60 p-2 shadow"
              >
                <li className="cursor-pointer hover:underline">
                  Products
                </li>
                <li className="cursor-pointer hover:underline">
                  Features
                </li>
                <li className="cursor-pointer hover:underline">
                  Pricing
                </li>
                <li className="cursor-pointer hover:underline">
                  Testimonials
                </li>
                <li className="cursor-pointer hover:underline">
                  FAQ
                </li>
                <li className="cursor-pointer hover:underline">
                  Login
                </li>
              </ul>
            </div>
            <a className="font-medium text-2xl text-[#4F39F6]">DigiTools</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu gap-5 menu-horizontal px-1">
              <li className="cursor-pointer hover:underline">
                Products
              </li>
              <li className="cursor-pointer hover:underline">
                Features
              </li>
              <li className="cursor-pointer hover:underline">
                Pricing
              </li>
              <li className="cursor-pointer hover:underline">
                Testimonials
              </li>
              <li className="cursor-pointer hover:underline">
                FAQ
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal items-center">
              <li>
                <p className="text-2xl font-medium relative">
                  <CiShoppingCart />
                  <p
                    className={`absolute top-1 right-2 text-sm bg-orange-500 text-white rounded-full leading-3 ${count && "p-0.5"}`}
                  >
                    {count ? count : ""}
                  </p>
                </p>
              </li>
              <li className=" inline max-lg:hidden ">
                <span>Login</span>
              </li>
              <li>
                <button
                  className={`text-white bg-linear-to-r from-[#4F39F6] to-[#8839f6] rounded-full`}
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
