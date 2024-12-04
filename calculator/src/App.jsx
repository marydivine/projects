// Import necessary dependencies
import React, { useState } from 'react';


  const LandingPage = () => {
    return (
      <div className="min-h-screen flex flex-col bg-[#0f3b36] text-white font-sans">
        
        {/* Header Section */}
        <header className="flex justify-between items-center p-4 md:px-12 md:py-6">
          <div className="flex items-center">
            <img src="path/to/logo.png" alt="Logo" className="h-8 md:h-12 mr-3" />
            <span className="text-2xl font-bold">Plantu</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-lg">
            <a href="#about" className="hover:text-gray-300">About App</a>
            <a href="#how-it-works" className="hover:text-gray-300">How it works</a>
            <a href="#reviews" className="hover:text-gray-300">Reviews</a>
            <a href="#upload" className="hover:text-gray-300">Upload Image</a>
          </nav>
        </header>
  
        {/* Hero Section */}
        <main className="flex-grow flex flex-col md:flex-row justify-center items-center text-center px-4 md:px-20">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-semibold leading-snug md:leading-tight mb-6">
              Protecting our plants has never been easier.
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed md:leading-relaxed">
              Image processing algorithms are developed to detect plant infection or disease by identifying the color features of the leaf area. 
              <strong> Plantu</strong> helps you in <em>"Detecting Plant Diseases, Protecting Your Harvest"</em>.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#get-started" className="bg-[#e5d5b8] text-black px-6 py-3 rounded-lg text-base md:text-lg hover:bg-opacity-90">Get Started</a>
              <a href="#find-out-more" className="border border-[#e5d5b8] px-6 py-3 rounded-lg text-base md:text-lg hover:bg-[#e5d5b8] hover:text-black">Find out more</a>
            </div>
          </div>
          <div className="md:w-1/2 hidden md:flex justify-center items-center mt-8 md:mt-0">
            <img src="path/to/phone-mockup.png" alt="App Mockup" className="w-3/4 h-auto" />
          </div>
        </main>
  
        {/* Footer Section */}
        <footer className="bg-[#0c2f29] text-sm md:text-base p-4 text-center">
          <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-2 md:space-y-0">
            <a href="#terms" className="hover:text-gray-300">Terms of Service</a>
            <a href="#privacy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#contact" className="hover:text-gray-300">Contact Information</a>
          </div>
        </footer>
      </div>
    );
  }
  
  export default LandingPage;
  
 

