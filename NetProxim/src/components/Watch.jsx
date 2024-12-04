import React from "react";

const Watch = () => {
  return (
    <div id= "blog" className="py-20 px-5 flex flex-col md:flex-row justify-between items-center">
    <div className="md:w-1/2 space-y-5">
      <p className="text-yellow-300">Networking Simplified.</p>
      <h1 className="text-5xl font-semibold">
      Explore, Connect, Stay Informed
      </h1>
      <p className="text-gray-300">
      Explore our platform's features, connect with fellow professionals, and take your networking experience to new heights. Access quick links to your profile, settings, and FAQs. Stay updated with our latest features and announcements. Join the community and unlock the potential for meaningful connections and collaboration.
      </p>
    </div>
    <div className="md:w-1/3">
      <img src="/watch_img.svg" alt="" />
    </div>
  </div>
  );
};

export default Watch;
