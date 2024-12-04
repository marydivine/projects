import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="py-20 flex flex-col md:flex-row justify-between items-center px-5">
    <div className="max-w-[800px] mx-auto text-center">
      <p className="text-lg text-yellow-300">NetProxim Smart Business Card</p>
      <h1 className="text-7xl font-semibold"> 
      <span className="md:text-7xl sm:text-6xl text-4xl text-white font-bold md:py-6 " > Your Networking Hub</span><br/>
        <TypeAnimation
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-white"
            sequence={[" Power Your Networking With Smart Technology.", 1000, " Track your Networking Activity.", 1000, "Enhance Your Networking Skills",1000,"Stay Connected with Recent Contacts",1000]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
      </h1><br/>
      <p>
      Enhance your networking experience with cutting-edge technology and personalized business profiles. 
      </p><br/>
      <a href="https://netproxim.com/signup.html">
      <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">
        Let's Go!!
      </button>
      </a>
    </div>
    
  </div>
  );
};

export default Hero;