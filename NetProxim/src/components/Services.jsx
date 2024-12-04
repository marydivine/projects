import React from "react";

const Services = () => {
  return (
    <div id="services" className="flex flex-col md:flex-row justify-around items-center py-10 px-5 md:py-20 space-y-10 md:space-y-0">
      <div className="w-full md:w-[300px] dark:bg-gray-600/30 flex flex-col items-center text-center rounded-xl hover:bg-yellow-600 p-8 md:p-10">
        <img src="webs_dev.svg" alt="" className="h-24 mb-4" />
        <h2 className="text-lg md:text-xl font-semibold mb-2">Personalized Business Profiles</h2>
        <p className="text-sm md:text-base">We gather essential details, including contact information, business description, and service offerings, to create a comprehensive profile that reflects your unique identity and brand.</p>
      </div>
      <div className="w-full md:w-[300px] dark:bg-gray-600/30 flex flex-col items-center text-center rounded-xl hover:bg-gray-700 p-8 md:p-10">
        <img src="dev.svg" alt="" className="h-24 mb-4" />
        <h2 className="text-lg md:text-xl font-semibold mb-2">Seamless Networking Experience</h2>
        <p className="text-sm md:text-base">Our intuitive interface and advanced networking features make connecting with potential clients, partners, and colleagues effortless. From exchanging contact information to discovering new opportunities, our platform streamlines the networking process, ensuring you make meaningful connections with ease.</p>
      </div>
      <div className="w-full md:w-[300px] dark:bg-gray-600/30 flex flex-col items-center text-center rounded-xl hover:bg-yellow-600 p-8 md:p-10">
        <img src="mobile_dev.svg" alt="" className="h-24 mb-4" />
        <h2 className="text-lg md:text-xl font-semibold mb-2">Effortless QR Code Generation</h2>
        <p className="text-sm md:text-base">Simply input your information, and our system generates a unique QR code, a business card design, and a unique URL instantly. No hassle, no fuss – just a convenient way to share your details and connect with others.</p>
      </div>
    </div>
  );
};

export default Services;
