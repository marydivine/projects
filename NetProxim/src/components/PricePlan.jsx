import React from "react";
import PricingCard from "./PricingCard";

const PricePlan = () => {
  return (
    <div id="prices" className="py-10 md:py-20">
      <div className="w-full md:w-2/3 mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold">
          We've got a plan that's perfect for you
        </h1>
        <p className="text-sm text-gray-400">
        Choose the perfect plan that suits your needs. Enjoy access to all premium features, personalized support, and regular updates. Upgrade your networking experience today!
        </p>
      </div><br/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center px-5 md:px-10">
        <PricingCard
          bg="yellow-500"
          title="Basic"
          text="black"
          img="/check_white.svg"
          price="9,500"
          button="bg-gray-800 text-yellow-500"
        />
        <PricingCard
          bg="yellow-500"
          title="1 Year Plan"
          text="black"
          img="/check_white.svg"
          price="12,500"
          button="bg-gray-800 text-yellow-500"
        />
        <PricingCard
          bg="yellow-500"
          title="2 Year Plan"
          text="black"
          img="/check_white.svg"
          price="20,000"
          button="bg-gray-800 text-yellow-500"
        />
      </div>
    </div>
  );
};

export default PricePlan;
