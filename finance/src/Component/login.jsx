import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaFileInvoiceDollar,
  FaPrescriptionBottleAlt,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import caduceus from "../../assets/Caduceus.svg";
import PatientDashboard from "../../Pages/PatientDashboard";
import PatientPayments from "../../Pages/PatientPayments";
import PrescriptionPage from "../../Pages/PatientPrescription";
import ProfilePage from "../../Pages/PatientProfile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <PatientDashboard />;
      case "Payments":
        return <PatientPayments />;
      case "Prescriptions":
        return <PrescriptionPage />;
      case "Profile":
        return <ProfilePage />;
      default:
        return <PatientDashboard />;
    }
  };

  return (
    <div className="relative z-10 flex">
      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-screen w-64 bg-white text-black flex flex-col justify-between p-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
      >
        {/* Toggle Button for Mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-4 text-[#10316B] text-2xl focus:outline-none z-20"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <div className="py-10">
          <h1 className="text-3xl mb-6 text-left flex items-center text-[#10316B] font-nova">
            <img src={caduceus} alt="caduceus" className="w-8 h-8 mr-2" />
            MED <span className="text-[#396CF0]">NEXUS</span>
          </h1>

          {/* Menu items */}
          <ul className="space-y-4 mt-10">
            <li>
              <button
                onClick={() => {
                  setActiveComponent("Dashboard");
                  toggleSidebar();
                }}
                className={`flex items-center text-lg text-opacity-80 hover:text-white hover:bg-[#10316B] p-3 rounded-2xl ${
                  activeComponent === "Dashboard" ? "bg-[#10316B] text-white" : ""
                }`}
              >
                <FaTachometerAlt className="mr-3" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveComponent("Payments");
                  toggleSidebar();
                }}
                className={`flex items-center text-lg text-opacity-80 hover:text-white hover:bg-[#10316B] p-3 rounded-2xl ${
                  activeComponent === "Payments" ? "bg-[#10316B] text-white" : ""
                }`}
              >
                <FaFileInvoiceDollar className="mr-3" />
                Payments
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveComponent("Prescriptions");
                  toggleSidebar();
                }}
                className={`flex items-center text-lg text-opacity-80 hover:text-white hover:bg-[#10316B] p-3 rounded-2xl ${
                  activeComponent === "Prescriptions" ? "bg-[#10316B] text-white" : ""
                }`}
              >
                <FaPrescriptionBottleAlt className="mr-3" />
                Prescriptions
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveComponent("Profile");
                  toggleSidebar();
                }}
                className={`flex items-center text-lg text-opacity-80 hover:text-white hover:bg-[#10316B] p-3 rounded-2xl ${
                  activeComponent === "Profile" ? "bg-[#10316B] text-white" : ""
                }`}
              >
                <FaUser className="mr-3" />
                Profile
              </button>
            </li>
          </ul>
        </div>

        {/* Logout */}
        <div>
          <button
            onClick={() => alert("Logging out...")}
            className="flex items-center text-lg text-black hover:text-red-500"
          >
            <FaSignOutAlt className="mr-3" />
            Log out
          </button>
        </div>
      </div>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content area */}
      <div className={`flex-1 p-6 ${isOpen ? "hidden lg:block" : ""}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Navbar;
