import React from "react";
import { IoIosBus } from "react-icons/io";
import smartBusAssist from "../../utils/data/smartBusAssist";

const Services = () => {
  return (
    <section aria-label="Services Section">
      <div className="container mx-auto px-5 md:px-3 lg:px-0">
        <div>
          <h2 className="text-4xl font-extrabold text-black text-center mb-7">
            SmartBus Assist You at Every Step of Your Journey
          </h2>
          {!!smartBusAssist &&
            smartBusAssist.map((block) => {
              return (
                <div key={block?.id} className="mb-10">
                  <h3 className="text-xl font-bold text-center text-blue-800 mb-10">
                    <span className="flex justify-center items-center">
                      <div className="h-10 w-10 rounded-full bg-red-500 flex justify-center items-center mr-2">
                        <IoIosBus className="text-white" />
                      </div>
                      {block?.heading}
                    </span>
                  </h3>
                  <div className="flex justify-center flex-wrap">
                    {!!block?.data &&
                      block?.data.map((d) => {
                        const { id, image, title, description } = d;
                        return (
                          <article key={id} className="w-3/12">
                            <div>
                              <div className="mb-4">
                                <img
                                  src={image}
                                  alt={title}
                                  className="max-w-36 w-full mx-auto animate-pulse"
                                />
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-black text-center mb-2">
                                  {title}
                                </h4>
                                <p className="max-w-9/12 w-full mx-auto text-md text-gray-600 text-center">
                                  {description}
                                </p>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Services;
