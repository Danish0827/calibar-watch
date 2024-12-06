import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FaCheckDouble } from "react-icons/fa";

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
              Welcome to Caliber Star Watches
            </h4>

            <h6 className="md:mt-6 mt-2 md:text-5xl text-2xl text-black font-semibold">
              We Have 10 Years Experience in Watch Service
            </h6>

            <p className="mt-6 text-base md:text-lg text-gray-700">
              At Caliber Star Watches, we bring over 10 years of experience in
              providing top-notch watch services. From sales to repair, our
              expert team is here to cater to all your timepiece needs. Whether
              you are a first-time buyer or a seasoned collector, we guarantee
              high-quality craftsmanship and a stellar customer experience.
            </p>

            {/* List of Features/Services */}
            <div className="mt-6 md:w-[70%] w-full">
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
            </div>

            {/* Button */}
            <div className="mt-8">
              <button className="px-8 py-3 bg-bgMain4 text-white text-xl font-medium rounded-sm hover:bg-bgMain5 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutSection1;
