import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaBus,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-700">
      <div className="container mx-auto px-5 md:px-3 lg:px-0">
        <div className="flex gap-10">
          <div className="py-10 w-3/12">
            <Link
              to="/"
              className="flex items-center text-3xl font-extrabold text-white italic mb-7"
            >
              Smart<span className="text-red-500">Bus</span>
              <FaBus className="ml-2" />
            </Link>
            <p className="text-gray-200 font-md mb-4">
              IntrCity SmartBus provides safe, trusted, and standardized travel
              options around India’s long-distance routes, operating across 630+
              routes in 16 states. Its companion brand, RailYatri, provides
              comprehensive train travel information, serving over 14 million
              users monthly.
            </p>
            <p className="text-gray-200 font-md mb-4">
              Show us some love, follow us on
            </p>
            <ul className="flex items-center gap-4">
              <Link
                to="/"
                className="h-10 w-10 rounded-full border border-gray-400 flex justify-center items-center"
              >
                <FaFacebook className="text-white" />
              </Link>
              <Link
                to="/"
                className="h-10 w-10 rounded-full border border-gray-400 flex justify-center items-center"
              >
                <FaInstagram className="text-white" />
              </Link>
              <Link
                to="/"
                className="h-10 w-10 rounded-full border border-gray-400 flex justify-center items-center"
              >
                <FaTwitter className="text-white" />
              </Link>
              <Link
                to="/"
                className="h-10 w-10 rounded-full border border-gray-400 flex justify-center items-center"
              >
                <FaLinkedin className="text-white" />
              </Link>
            </ul>
          </div>
          <div className="py-10 w-2/12">
            <h3 className="text-white font-bold text-xl text-nowrap  mb-7">
              Book with us
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Bus Tickets
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Routes
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Group Booking
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-10 w-2/12">
            <h3 className="text-white font-bold text-xl text-nowrap  mb-7">
              Info
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Reviews
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Offers
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Track Refund
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Advertise with Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-10 w-2/12">
            <h3 className="text-white font-bold text-xl text-nowrap mb-7">
              Top SmartBus Cities
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Bus from Lucknow
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Bus from Delhi
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Bus from Amritsar
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Bus from Banglore
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Bus from Chennai
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Bus from Hyderabad
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Bus from Mumbai
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  Bus from Goa
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-10 w-auto">
            <h3 className="text-white font-bold text-xl text-nowrap  mb-7">
              Our Family
            </h3>
            <ul>
              <li>
                <Link
                  to="/"
                  className="text-gray-200 text-md transition-all duration-300 hover:underline"
                >
                  RailYatri
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-10 w-auto">
            <h3 className="text-white font-bold text-xl text-nowrap mb-7">
              Download Our App
            </h3>
            <ul className="flex items-center gap-4">
              <li>
                <Link to="/" className="text-gray-200 text-md"></Link>
              </li>
              <li>
                <Link to="/" className="text-gray-200 text-md"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
