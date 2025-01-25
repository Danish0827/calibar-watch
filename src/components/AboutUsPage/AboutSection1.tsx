import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FaCheckDouble } from "react-icons/fa";
import Link from 'next/link';

const AboutSection1 = () => {
  return (
    <div className="md:px-6 px-3 my-14">
      <Wrapper className="">
        <div className="flex flex-col md:flex-row space-x-2">
          {/* Left Column - Image */}
          <div className="relative md:w-[45%] w-full">
            <Image
              src={"/images/about5.jpg"}
              width={595}
              height={550}
              alt="about_image"
            />
            <h4 className="absolute md:right-16 right-6 top-0 md:text-5xl text-3xl font-semibold text-bgMain4">
              About Us
            </h4>
          </div>

          {/* Right Column - Text and List */}
          <div className="mt-8 md:w-1/2 md:mt-0 w-full">
            <h4 className="text-bgMain5 text-xl font-medium">
              Welcome to Caliber Star
            </h4>

            <h6 className="md:mt-6 mt-2 md:text-5xl text-2xl text-black font-semibold">
              Over a Decade of Expertise in Watch Trading
            </h6>

            <p className="mt-6 text-base md:text-lg text-gray-700">
              At Caliber Star, we bring a decade of expertise as trusted watch
              traders and wholesalers. Specializing in the sale and distribution
              of luxury timepieces, we take pride in offering a curated
              selection of exceptional watches that appeal to both first-time
              buyers and seasoned collectors.
            </p>
            <p className="mt-6 text-base md:text-lg text-gray-700">
              Our unwavering commitment to quality and craftsmanship ensures
              that every client experiences unmatched service and genuine value.
              Whether you're looking to make your first investment in a luxury
              watch or add a rare gem to your collection, we are here to guide
              you every step of the way. At Caliber Star, it's not just about
              selling watches—it's about celebrating the artistry, heritage, and
              timeless appeal of horology.
            </p>

            {/* List of Features/Services */}
            {/* <div className="mt-6 md:w-[70%] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-bgMain5" />
                  <h4 className="text-lg text-gray-600">Watch Sale</h4>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-bgMain5" />
                  <h4 className="text-lg text-gray-600">Free Consultations</h4>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-bgMain5" />
                  <h4 className="text-lg text-gray-600">Watch Repairs</h4>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-bgMain5" />
                  <h4 className="text-lg text-gray-600">Genuine Accessories</h4>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-bgMain5" />
                  <h4 className="text-lg text-gray-600">Authorized Dealers</h4>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-bgMain5" />
                  <h4 className="text-lg text-gray-600">Watch Customization</h4>
                </div>
              </div>
            </div> */}

            {/* Button */}
            <div className="mt-8">
              <Link href="/contact">
              <button className="px-8 py-3 bg-bgMain4 text-white text-xl font-medium rounded-sm hover:bg-bgMain5 transition-all duration-300">
                Contact Us
              </button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutSection1;
