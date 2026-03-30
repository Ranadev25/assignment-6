import React from "react";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black text-white pt-20 max-md:px-3">
      <div className="md:w-[90%] lg:w-[85%] mx-auto ">
        <div className="pb-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div>
            <h1 className="text-3xl font-medium">DigiTools</h1>
            <p className="mt-4 text-sm text-gray-300">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex justify-around">
            <div>
              <h2 className="text-xl font-medium">Product</h2>
              <ul className="text-sm text-gray-300 leading-9 mt-3">
                <li>
                  <a className="hover:underline" href="">Features</a>
                </li>
                <li>
                  <a className="hover:underline" href="">Pricing</a>
                </li>
                <li>
                  <a className="hover:underline" href="">Templates</a>
                </li>
                <li>
                  <a className="hover:underline" href="">Integrations</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-medium">Company</h2>
              <ul className="text-sm text-gray-300 leading-9 mt-3">
                <li>
                  <a className="hover:underline" href="">About</a>
                </li>
                <li>
                  <a className="hover:underline" href="">Blog</a>
                </li>
                <li>
                  <a className="hover:underline" href="">Careers</a>
                </li>
                <li>
                  <a className="hover:underline" href="">press</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <h1 className="text-xl font-medium">Resources</h1>
              <ul className="text-sm text-gray-300 leading-9 mt-3">
                <li>
                  <a className="hover:underline" href="">Documentation</a>
                </li>
                <li>
                  <a className="hover:underline" href="">Help Center</a>
                </li>
                <li>
                  <a className="hover:underline" href="">Community</a>
                </li>
                <li>
                  <a className="hover:underline" href="">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-medium">Social Links</h1>
              <div className="flex gap-2 mt-3">
                <div className="text-black bg-white w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white cursor-pointer">
                  <FaYoutube />
                </div>
                <div className="text-black bg-white w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white cursor-pointer">
                  <FaFacebook />
                </div>
                <div className="text-black bg-white w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white cursor-pointer">
                  <FaXTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 border-t border-gray-400 grid sm:flex items-center justify-between text-sm text-gray-400">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
