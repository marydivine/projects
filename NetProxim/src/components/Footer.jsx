import React from "react";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="p-5 grid grid-cols-2 md:grid-cols-7 gap-8">
        <div className="col-span-2 space-y-5">
          <h1>NetProxim</h1>
          <p className="text-sm text-gray-400">
            We are aiming to become one of the best agencies in Nigeria and to be used in a fast business environment 
          </p>
        </div>
        <div>
          <h2 className="font-bold py-2">About</h2>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <a href="/">About</a>
            <a href="/">Features</a>
            <a href="/">News</a>
            <a href="/">Art</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold py-2">Support</h2>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <a href="/">Account</a>
            <a href="/">Contact</a>
            <a href="/">Help</a>
            <a href="/">Art</a>
          </div>
        </div>

        <div className="col-span-2 space-y-5">
          <h2 className="font-bold">Get In Touch</h2>
          <p className="text-sm text-gray-400">
            If you would like to join the family and become our loyal customer.... 
          </p>
          <p>
            <a
              href="/"
              className="bg-yellow-500 text-black px-4 py-2 rounded-md"
            >
              contact Us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
