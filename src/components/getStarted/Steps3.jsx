import React from "react";
import Card from "./Card";

const howItWorks = [
  {
    id: 1,
    number: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    image: "https://i.ibb.co.com/DH3hywL1/user.png",
  },
  {
    id: 2,
    number: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    image: "https://i.ibb.co.com/qFJVVq3y/package.png",
  },
  {
    id: 3,
    number: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    image: "https://i.ibb.co.com/jkQyrtSP/rocket.png",
  },
];
const Steps3 = () => {
  return (
    <div className="bg-gray-50 py-10 ">
      <div className="md:w-[90%] lg:w-[85%] mx-auto">
        <div className="text-center my-5">
          <h1 className="text-3xl md:text-4xl font-medium">Get Started in 3 Steps</h1>
          <p className="text-gray-400 my-3 text-sm">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-md:mx-3">
          {howItWorks.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps3;
