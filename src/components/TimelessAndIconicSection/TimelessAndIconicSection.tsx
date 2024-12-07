'use client'
import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";

const TimelessAndIconicSection = () => {
  return (
    <div className="md:px-4 md:py-24 py-12">
      <Wrapper>
        <div className="flex flex-col md:flex-row w-full justify-between items-center">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-xl uppercase text-gray-700">
              Timeless and Iconic
            </h3>
            <h5 className="uppercase text-3xl my-2 text-black">
              Calibar Watches
            </h5>
            <h5 className="text-base mb-4">
              The Calibar Watches collection features classic or sporty designs
              boasting sophisticated <br />
              functionalities, rich details, and flawless style.
            </h5>
            <button className="bg-black text-white border border-black px-7 py-2 font-semibold text-[18px] transition duration-300 hover:bg-gray-800">
              Shop Now
            </button>
          </div>

          <div className="w-full md:w-[50%]">
            <Image
              src="/images/timelessImage.webp"
              layout="responsive"
              width={616}
              height={616}
              alt="Timeless Watch"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TimelessAndIconicSection;
