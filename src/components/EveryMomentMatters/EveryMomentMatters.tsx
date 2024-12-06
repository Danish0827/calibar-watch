"use client";
import React, { useState, useEffect } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";

const EveryMomentMatters = () => {
  const words = ["Precisions", "Accuracy", "Elegance"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:px-6 px-3 my-24">
      <Wrapper>
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <h3 className="text-black text-xl font-semibold text-center">
            Every Moment Matters
          </h3>
          <div className="mt-7">
            <h4 className="md:text-6xl text-4xl text-center font-semibold">
              Timeless{" "}
              <span
                className={`text-white bg-black px-2 py-1 inline-block transition-all duration-500 ease-in transform `}
              >
                {currentWord}
              </span>
            </h4>
          </div>
          <div className="hidden mt-6 relative md:w-full w-full md:flex flex-col justify-center items-center h-[200px] overflow-hidden">
            {/* Watch Image */}
            <Image
              src="/images/watch.png"
              width={150}
              height={140}
              alt="watch_img"
              className="z-10 absolute top-7"
            />

            {/* Strap Image */}
            <div
              className="absolute top-16 w-full h-full"
              style={{
                transform: `translateX(${scrollPosition * 0.4}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <Image
                src="/images/strap.png"
                width={900}
                height={900}
                alt="strap_img"
                className="z-0"
              />
            </div>
          </div>

          <div className="hidden md:flex flex-wrap items-center mt-10 justify-center space-x-6 w-full">
            <div className="text-center px-8 py-6 bg-white rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out w-full sm:w-auto mb-6 sm:mb-0">
              <h4 className="text-6xl font-extrabold text-gray-800">58</h4>
              <h5 className="text-xl mt-4 text-gray-600 uppercase tracking-wide">
                Mechanical
              </h5>
            </div>

            <div className="w-[2px] h-[80px] bg-gray-300 mx-4 sm:mx-6"></div>

            <div className="text-center px-8 py-6 bg-white rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out w-full sm:w-auto mb-6 sm:mb-0">
              <h4 className="text-6xl font-extrabold text-gray-800">36</h4>
              <h5 className="text-xl mt-4 text-gray-600 uppercase tracking-wide">
                Digital
              </h5>
            </div>

            <div className="w-[2px] h-[80px] bg-gray-300 mx-4 sm:mx-6"></div>

            <div className="text-center px-8 py-6 bg-white rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out w-full sm:w-auto mb-6 sm:mb-0">
              <h4 className="text-6xl font-extrabold text-gray-800">59</h4>
              <h5 className="text-xl mt-4 text-gray-600 uppercase tracking-wide">
                Quartz
              </h5>
            </div>

            <div className="w-[2px] h-[80px] bg-gray-300 mx-4 sm:mx-6"></div>

            <div className="text-center px-8 py-6 bg-white rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out w-full sm:w-auto">
              <h4 className="text-6xl font-extrabold text-gray-800">25</h4>
              <h5 className="text-xl mt-4 text-gray-600 uppercase tracking-wide">
                Automatic
              </h5>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default EveryMomentMatters;
