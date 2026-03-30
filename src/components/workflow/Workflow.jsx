import React from "react";

const Workflow = () => {
  return (
    <div className="text-white bg-linear-to-r from-[#4F39F6] to-[#8839f6] text-center py-10 md:py-20">
      <div className="md:w-[90%] lg:w-[85%] mx-auto">
        <h1 className="font-medium text-3xl md:text-4xl mb-3">Ready to Transform Your Workflow?</h1>
        <p className="text-sm mb-3">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>
        <div className="flex items-center justify-center gap-3 my-5">
          <button className="bg-white text-black px-4 py-2 rounded-full cursor-pointer hover:scale-95">Explore Products</button>
          <button className="border border-gray-400 px-4 py-2 rounded-full cursor-pointer hover:scale-95">View Pricing</button>
        </div>
        <p className="text-sm">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Workflow;
