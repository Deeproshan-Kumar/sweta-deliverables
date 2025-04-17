import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MasterForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <article className="sticky top-10 p-10 z-10">
      <form>
        <div className="container bg-gradient-to-r from-blue-800 to-blue-900 mx-auto p-5 rounded-sm shadow-lg">
          <h2 className="text-white text-2xl font-bold mb-2">
            Book Your Bus Ticket
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-11/12">
              <div className="flex gap-4">
                <div className="w-4/12">
                  <div className="w-full flex items-center bg-white border border-gray-400 rounded-sm pl-4">
                    <FaMapMarkerAlt />
                    <input
                      type="text"
                      placeholder="Source City"
                      required
                      className="w-full text-lg text-gray-600 font-medium p-3 focus:outline-0"
                    />
                  </div>
                </div>
                <div className="w-4/12">
                  <div className="w-full flex items-center bg-white border border-gray-400 rounded-sm pl-4">
                    <FaMapMarkerAlt />
                    <input
                      type="text"
                      placeholder="Destination City"
                      required
                      className="w-full text-lg text-gray-600 font-medium p-3 focus:outline-0"
                    />
                  </div>
                </div>
                <div className="w-4/12">
                  <div className="w-full flex items-center bg-white border border-gray-400 rounded-sm pl-4">
                    <FaCalendarAlt />
                    <DatePicker
                      selected={startDate}
                      className="w-full text-lg text-gray-600 font-medium p-3 focus:outline-0"
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/12">
              <button className="w-full text-md text-center font-bold bg-gradient-to-r from-red-500 to-red-300 rounded-sm px-6 py-4 text-white cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </article>
  );
};

export default MasterForm;
