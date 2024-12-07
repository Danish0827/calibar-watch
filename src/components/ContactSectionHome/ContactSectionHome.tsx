'use client'
import React from "react";

const ContactSectionHome = () => {
  return (
    <div
      className="w-full md:h-[454px] h-auto relative"
      style={{
        backgroundImage: `url("/images/contact-image.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
      <div className="relative z-10 px-4 md:px-40 py-20 md:py-40 flex flex-col items-center md:items-start justify-center text-center">
        <h4 className="text-white text-4xl mb-4 uppercase">Contact Us</h4>
        <h5 className="uppercase text-gray-100 text-xl md:mb-6 mb-2">
          You Do Not Know What To Choose? We Help You!
        </h5>
        <button className="bg-bgMain text-black px-12 py-2 md:mt-5 mt-2 uppercase transition duration-300 hover:bg-gray-800">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactSectionHome;
