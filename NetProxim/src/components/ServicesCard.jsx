import React from "react";

const ServicesCard = ({ src, title }) => {
  return (
    <div className="md:w-[300px] p-10 dark:bg-gray-600/30 space-y-5 flex flex-col items-center text-center rounded-xl">
      <img src={src} alt="" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>
      Our tailored business profile creation service ensures that your personal and business information are accurately represented. We gather essential details, including contact information, business description, and service offerings, to create a comprehensive profile that reflects your unique identity and brand.
      </p>
  
    </div>
    
  );
};

export default ServicesCard;
