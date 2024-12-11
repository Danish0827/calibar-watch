"use client";
import Link from "next/link";
import React from "react";

const ContactSectionHome = () => {
  return (
    <div
      className="w-full md:h-[500px] h-auto relative flex items-center justify-left"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/contactHome.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center md:text-left px-6 md:px-20">
        <h4 className="text-white text-5xl font-bold mb-4 uppercase leading-tight">
          Contact Us
        </h4>
        <h5 className="text-gray-200 text-lg md:text-xl mb-6">
          Unsure of your options? Let us guide you!
        </h5>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-medium text-lg uppercase transition-all duration-300 hover:from-yellow-500 hover:to-yellow-700 hover:text-white shadow-lg hover:shadow-xl"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ContactSectionHome;
