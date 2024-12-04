import React from "react";
import Carousel from "react-elastic-carousel";
import womanPic from './images/sjfi1.png';
import manPic from './images/sjfi2.png';
import nursePic from './images/sjfi3.png';

const Slider = () => {
  const imageSize = { width: "1200px", height: "550.67px" };

  return (
    <div className="bg-[#FFF4F4]  flex flex-col lg:flex-row min-h-[80vh] items-center overflow-hidden">
      <Carousel
        itemsToShow={1}
        showArrows={false}
        pagination
        autoPlay // Enable auto play
        autoPlaySpeed={1000} // Set auto play speed to 3 seconds (3000 milliseconds)
        style={{ width: "1000px", height: "590.67px", padding: "10px 20px", margin: "auto" }} // Adjusted padding
      >
        <img
          src={womanPic}
          alt="Slide 1"
          style={{ ...imageSize, objectFit: 'cover', opacity: 0.85 }} // Add opacity
          className="w-full lg:w-1/2 lg:h-screen lg:block hidden"
        />
        <img
          src={manPic}
          alt="Slide 2"
          style={{ ...imageSize, objectFit: 'cover', opacity: 0.85 }} // Add objectFit: 'cover'
          className="w-full lg:w-1/2 lg:h-screen lg:block hidden"
        />
        <img
          src={nursePic}
          alt="Slide 3"
          style={{ ...imageSize, objectFit: 'cover', opacity: 0.85 }} // Add objectFit: 'cover'
          className="w-full lg:w-1/2 lg:h-screen lg:block hidden"
        />
      </Carousel>
    </div>
  );
};

export default Slider;
