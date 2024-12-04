import { useState } from "react";
import NetProximLogo from "../assets/NetProximLogo.png"; 

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800 font-poppins">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="site-logo float-left">
            <img src={NetProximLogo} alt="NetProximLogo" className="w-24 h-auto" />
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={toggleNavbar}
              aria-controls="navbar-with-collapse"
              aria-label="Toggle navigation"
            >
              {isNavbarOpen ? (
                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
        {/* Toggle Button for Mobile View */}
        {isNavbarOpen && (
          <div id="navbar-with-collapse" className="sm:hidden">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a className="font-medium text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:text-gold-400" href="/home" aria-current="home">Home</a>
              <a className="font-medium text-white hover:text-gold-400 dark:text-white dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#services">Why Choose us?</a>
              <a className="font-medium text-white hover:text-gold-400 dark:text-white dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#aboutus">Know us</a>
              <a href="https://netproxim.com">
                <button className="font-medium text-white hover:text-gold-400 dark:text-white dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Login</button>
              </a>
            </div>
          </div>
        )}
        {/* Navigation Links for Desktop View */}
        <div className={`hidden sm:flex sm:flex-row gap-5 mt-5 sm:items-center sm:justify-end sm:mt-0 sm:ps-5 ${isNavbarOpen ? 'hidden' : 'block'}`}>
          <a className="font-medium text-white dark:focus:outline-none dark:hover:text-yellow-500 dark:focus:ring-1 dark:focus:ring-gray-600 hover:text-gold-400" href="/home" aria-current="home">Home</a>
          <a className="font-medium text-white hover:text-gold-400 dark:text-white dark:hover:text-yellow-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#services">Why Choose us?</a>
          <a className="font-medium text-white hover:text-gold-400 dark:text-white dark:hover:text-yellow-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#aboutus">Know us</a>
          <a href="https://netproxim.com">
            <button className="font-medium text-white hover:text-gold-400 dark:text-white dark:hover:text-yellow-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Login</button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
