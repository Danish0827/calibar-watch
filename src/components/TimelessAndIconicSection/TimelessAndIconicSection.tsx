"use client";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";

const TimelessAndIconicSection = () => {
  return (
    <div className="md:px-6 md:py-0 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <Wrapper>
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-12">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h3 className="text-sm uppercase text-[#8c7a66] font-bold tracking-widest">
              Timeless and Iconic
            </h3>
            <h5 className="uppercase text-4xl md:text-5xl mt-4 mb-6 text-black font-semibold">
              Caliber Star
            </h5>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              The Caliber Star collection features classic or sporty designs
              boasting sophisticated functionalities, rich details, and flawless
              style.
            </p>
            <Link
              href={"/brands/rolex"}
              className="bg-gradient-to-r from-[#8c7a66] to-[#d4bea4] text-white px-8 py-3 font-semibold text-lg uppercase rounded-md shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              View Products
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[50%]">
            <div className="relative">
              <Image
                src="/images/main.webp"
                layout="responsive"
                width={616}
                height={616}
                alt="Timeless Watch"
                className="rounded-lg "
              />
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8c7a66] opacity-40 rounded-lg"></div> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TimelessAndIconicSection;
