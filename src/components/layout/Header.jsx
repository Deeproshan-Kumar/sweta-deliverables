import React from "react";
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { FaUser, FaBus } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-5 md:px-3 lg:px-0">
        <div className="min-h-20 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center text-3xl font-extrabold text-blue-800 italic"
          >
            Smart<span className="text-red-500">Bus</span>
            <FaBus className="ml-2"/>
          </Link>
          <ul className="flex items-center gap-10">
            <Link
              to="/"
              className="relative text-md font-medium transition-all duration-500 hover:text-red-500"
            >
              <MdWorkspacePremium className="absolute -top-4 left-[50%] translate-x-[-50%] text-lg text-red-500" />{" "}
              SmartBus Club
            </Link>
            <Link
              to="/"
              className="text-md font-medium transition-all duration-500 hover:text-red-500"
            >
              Bus Tickets
            </Link>
            <Link
              to="/"
              className="text-md font-medium transition-all duration-500 hover:text-red-500"
            >
              Group Booking
            </Link>
            <Link
              to="/"
              className="text-md font-medium transition-all duration-500 hover:text-red-500"
            >
              Data Room
            </Link>
            <Link
              to="tel:+91 7271053944"
              className="text-md font-medium flex items-center gap-2 transition-all duration-500 hover:text-red-500"
            >
              <div className="p-2 bg-red-500 rounded-full animate-pulse">
                <IoIosCall className="text-white" />
              </div>
              Call to book
              <span className="italic">+91 7271053944</span>
            </Link>
            <Link
              to="/"
              className="text-md font-medium bg-gradient-to-r from-red-500 to-red-300 rounded-full px-4 py-2 text-white flex items-center gap-2"
            >
              <FaUser /> Sign In
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
