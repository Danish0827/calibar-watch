"use client";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { FaArrowRight } from "react-icons/fa";

const highlightsData = [
  {
    title: "CUBITUS GRAND DATE",
    ref: "REF. 5822P-001",
    imageUrl: "https://www.patek.com/resources/img/launch_2024_5822/thumbnail_500.v456303664129977.jpg", // Replace with your image paths
  },
  {
    title: "CUBITUS",
    ref: "REF. 5821/1AR-001",
    imageUrl: "https://www.patek.com/resources/img/articles/topics/5821_1AR_001/thumbnail_500.v456303664129977.jpg", // Replace with your image paths
  },
  {
    title: "CUBITUS",
    ref: "REF. 5821/1A-001",
    imageUrl: "https://www.patek.com/resources/img/articles/topics/5821_1A_001/thumbnail_500.v456303664129977.jpg", // Replace with your image paths
  },
];

const CurrentHighlights = () => {
  return (
    <div className="py-12 bg-white">
      <Wrapper>
        <div className="flex justify-center items-center mb-5">
          <h3 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:bg-gradient-to-r from-gray-500 to-black after:w-1/2 after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg mb-2">
            Current Highlights
          </h3>
        </div>
        <div className="container m-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlightsData.map((item, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-black transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{item.ref}</p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-black p-2 rounded-full shadow-md hover:bg-black hover:text-white transition-colors duration-300">
                  <FaArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default CurrentHighlights;
