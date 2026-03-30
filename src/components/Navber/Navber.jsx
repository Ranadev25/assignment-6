import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navber = ({count}) => {
  return (
    <div className="shadow-sm bg-white">
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
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Testimonials</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
              </ul>
            </div>
            <a className="font-medium text-2xl text-[#4F39F6]">DigiTools</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal items-center">
              <li>
                <a href="" className="text-2xl font-medium relative">
                  <CiShoppingCart />
                  <p className={`absolute top-1 right-2 text-sm bg-orange-500 text-white rounded-full leading-3 ${count && "p-0.5"}`}>
                    {count ? count : "" }
                  </p>
                </a>
              </li>
              <li className=" inline max-lg:hidden ">
                <a href="">Login</a>
              </li>
              <li>
                <a
                  className={`text-white bg-linear-to-r from-[#4F39F6] to-[#8839f6] rounded-full`}
                  href=""
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
