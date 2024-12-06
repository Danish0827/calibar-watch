import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const OurTeamSection = () => {
  return (
    <div className="md:px-6 px-3 py-12 overflow-hidden">
      <Wrapper>
        <div className="grid md:grid-cols-3 grid-cols-1 md:space-y-1 space-y-6">
          <div className="flex flex-col items-start justify-center mr-6">
            <h4 className="text-bgMain5 text-xl font-medium">Our Team</h4>

            <h6 className="md:mt-6 mt-2 md:text-5xl text-2xl text-black font-semibold">
              Meet Our Best & Professional Team
            </h6>

            <p className="mt-6 text-base md:text-lg text-gray-700 text-justify">
              At Caliber Star Watches, we bring over 10 years of experience in
              providing top-notch watch services.
            </p>

            <div className="mt-8">
              <button className="px-8 py-3 bg-bgMain4 text-white text-xl font-medium rounded-sm hover:bg-bgMain5 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative md:ml-12 group overflow-hidden">
            <Image
              src={"/images/about4.jpg"}
              width={500}
              height={300}
              alt="our_team1"
              className="transition-all"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all"></div>

            <div className="absolute bottom-4 left-4 text-white text-3xl font-semibold transform translate-y-12 group-hover:translate-y-0 transition-all duration-700">
              Owner Name
            </div>

            <div className="absolute top-12 -right-4  transform -rotate-90  text-white px-4 py-1 text-base uppercase tracking-wider font-bold rounded-lg transfrom translate-x-full group-hover:translate-x-0 transition-all duration-700">
              Owner
            </div>

            <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-center transform opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100  transition-all duration-500">
              <div className="bg-bgMain5 text-white p-2 rounded-full hover:bg-gray-200 transition-all">
                <FaFacebook size={20} color="white" />
              </div>
              <div className="bg-bgMain5 p-2 rounded-full hover:bg-gray-200 transition-all">
                <FaTwitter size={20} color="white" />
              </div>
              <div className="bg-bgMain5 p-2 rounded-full hover:bg-gray-200 transition-all">
                <FaInstagram size={20} color="white" />
              </div>
            </div>
          </div>

          <div className="relative md:ml-12  group">
            <Image
              src={"/images/about6.jpg"}
              width={500}
              height={300}
              objectFit="cover"
              alt="our_team1"
              className="transition-all"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all"></div>

            <div className="absolute bottom-4 left-4 text-white text-3xl font-semibold transform translate-y-12 group-hover:translate-y-0 transition-all duration-700">
              Owner Name
            </div>

            <div className="absolute top-16 -right-10  transform -rotate-90  text-white px-4 py-1 text-base uppercase tracking-wider font-bold rounded-lg transfrom translate-x-full group-hover:translate-x-0 transition-all duration-700">
              Watchmaker
            </div>

            <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-bgMain5 text-white p-2 rounded-full hover:bg-gray-200 transition-all">
                <FaFacebook size={20} color="white" />
              </div>
              <div className="bg-bgMain5 p-2 rounded-full hover:bg-gray-200 transition-all">
                <FaTwitter size={20} color="white" />
              </div>
              <div className="bg-bgMain5 p-2 rounded-full hover:bg-gray-200 transition-all">
                <FaInstagram size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurTeamSection;
