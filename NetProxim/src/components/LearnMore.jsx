import React from "react";

const LearnMore = () => {
  return (
    <div id="aboutus" className="py-10 px-5 sm:px-10 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 font-poppins">
      <div className="md:w-1/3">
        <img src="/learn_img.svg" alt="" />
      </div>
      <div className="md:w-1/2 space-y-5">
        <p className="text-yellow-400 text-lg md:text-xl lg:text-2xl font-semibold">Connect. Network. Grow.</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Connecting Professionals, Simplifying Networking
        </h1>
        <p className="text-white text-sm sm:text-base">
          Welcome to our networking platform, where connections are made easy. Our platform simplifies the process of networking by providing a user-friendly interface and powerful tools to help you expand your professional network effortlessly.
        </p>
        <p className="text-white text-sm sm:text-base">
          Whether you're a freelancer, entrepreneur, or business owner, our platform empowers you to create meaningful connections, share your expertise, and grow your business. Join us today and discover a new way to network that's simple, effective, and tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default LearnMore;

