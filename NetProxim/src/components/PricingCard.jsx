import React from "react";

const PricingCard = ({ bg, text, img, price, button, title }) => {
  return (
    <div className={`p-6 md:p-10 space-y-4 rounded-md bg-${bg} shadow-2xl text-${text} font-poppins`}>
      <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
      <h1 className="text-2xl md:text-4xl font-bold">
        ₦{price} <span className="font-thin">/month</span>
      </h1>
      <p className="text-sm md:text-base">Unlock Exclusive Features</p>
      <ul className="space-y-3">
        <li className="flex items-center space-x-2">
          <img src={img} alt="" className="w-6 h-6" />
          <span>Unlimited access to cards</span>
        </li>
        <li className="flex items-center space-x-2">
          <img src={img} alt="" className="w-6 h-6" />
          <span>24/7 support.</span>
        </li>
        <li className="flex items-center space-x-2">
          <img src={img} alt="" className="w-6 h-6" />
          <span>Advanced analytics.</span>
        </li>
        <li className="flex items-center space-x-2">
          <img src={img} alt="" className="w-6 h-6" />
          <span>Download card option</span>
        </li>
      </ul>
      <button className={`px-4 md:px-5 py-2 ${button} font-semibold rounded-full`}>
        Choose plan
      </button>
    </div>
  );
};

export default PricingCard;
