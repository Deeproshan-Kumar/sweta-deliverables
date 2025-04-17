import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section aria-label="Hero Section">
      <div className="container mx-auto px-5 md:px-3 lg:px-0">
        <div className="flex items-center">
          <div className="w-6/12">
            <h1 className="text-4xl text-blue-800 font-extrabold mb-7">
              It's not a Bus, <br />
              <span className="text-red-500">It's a SmartBus!</span>
            </h1>
            <div className="flex mb-7">
              <div className="w-3/12 border-l border-gray-300 pl-5">
                <p className="text-gray-600 font-bold">
                  In-Bus
                  <br />
                  Washroom
                </p>
              </div>
              <div className="w-3/12 border-l border-gray-300 pl-5">
                <p className="text-gray-600 font-bold">
                  Smart Boarding
                  <br />
                  Lounges
                </p>
              </div>
              <div className="w-3/12 border-l border-gray-300 pl-5">
                <p className="text-gray-600 font-bold">
                  Safety &<br />
                  Hygiene
                </p>
              </div>
              <div className="w-3/12 border-l border-gray-300 pl-5">
                <p className="text-gray-600 font-bold">
                  Trained &<br />
                  Bus Caption
                </p>
              </div>
              <div className="w-3/12 border-l border-gray-300 pl-5">
                <Link
                  to="/"
                  className="flex items-center gap-1 text-blue-800 text-md font-bold transition-all duration-300 hover:text-red-500"
                >
                  Explore <br />
                  More
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
            <button className="flex justify-center items-center gap-1 px-6 py-3 rounded-sm bg-gradient-to-r from-red-500 to-red-300 text-md text-white font-bold cursor-pointer">
              Explore
              <MdDoubleArrow className="animate-pulse" />
            </button>
          </div>
          <div className="w-6/12 p-5 pr-0">
            <img
              src={HeroImg}
              alt="Hero Image"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
