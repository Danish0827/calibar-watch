"use client";
import Image from "next/image";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const OurJourneyReverse = () => {
  return (
    <div className={`   `}>
      <Wrapper>
        <div
          className={`flex flex-col-reverse py-4  md:py-16 lg:flex-row w-full `}
        >
          <div className="relative  lg:block hidden mx-2 font-medium group md:w-full md:h-full md:min-h-[300px] md:max-w-[500px]">
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-2 translate-y-2  bg-gradient-to-tr from-bgMain4 to-bgMain3 group-hover:-translate-x-0 group-hover:-translate-y-0 z-10"></span>
            <span className="absolute inset-0 w-full h-full  group-hover:bg-indigo-50 z-20"></span>
            <span className="relative hidden lg:block overflow-hidden border border-gray-400 w-full h-full z-30">
              <Image
                src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?t=st=1730961327~exp=1730964927~hmac=7569bf913fe9779b5f48ef5782806a3048375585b9f4249146d0d6fd9f17d441&w=1060"
                alt="banner"
                className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px]"
                width={600}
                height={80}
              />
            </span>
          </div>

          <div className=" md:px-8 flex-1 group">
            <span className="    text-xl md:-ml-2 md:text-3xl py-1.5  text-primary">
              Our Values
            </span>
            <div className="h-1 rounded-full w-16 md:w-20  md:group-hover:w-32 group-hover:w-24 duration-300 mt-1 mb-4 bg-gradient-to-r from-bgMain4 to-bgMain3 "></div>

            <div className="relative  inline-block lg:hidden font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-2 translate-y-2  bg-gradient-to-tr from-bgMain4 to-bgMain3 group-hover:-translate-x-0 group-hover:-translate-y-0 z-10"></span>
              <span className="absolute inset-0 w-full h-full  group-hover:bg-indigo-50 z-20"></span>
              <span className="relative block overflow-hidden border border-[#BCC1C9] w-full h-full z-30">
                <Image
                  src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?t=st=1730961327~exp=1730964927~hmac=7569bf913fe9779b5f48ef5782806a3048375585b9f4249146d0d6fd9f17d441&w=1060"
                  alt="banner"
                  className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px]"
                  width={600}
                  height={80}
                />
              </span>
            </div>

            <div className="text-sm md:text-base text-gray-600 duration-300 group-hover:text-black mt-4">
              <p className="text-justify">
                At Caliber Start Watches, we are driven by a commitment to
                excellence that defines every aspect of our craft. Our core
                values shape how we design, create, and engage with our clients,
                ensuring we deliver watches that not only meet the highest
                standards but also exceed expectations. Our clients are at the
                heart of our brand. We take the time to understand their unique
                preferences, ensuring that each watch we produce aligns with
                their personal style and values. Whether you're seeking
                elegance, precision, or innovation, we are dedicated to
                delivering a timepiece that not only meets but enhances your
                lifestyle.
              </p>
              <p className="mt-3 text-justify">
                From the drawing board to the final assembly, every watch is
                crafted with precision and care. We are uncompromising in our
                pursuit of quality, ensuring that every detail is meticulously
                executed. Our passion for perfection is evident in every watch
                we produce, as we aim to exceed the expectations of even the
                most discerning collectors. We understand the importance of our
                role in preserving the environment and communities we serve. We
                are committed to sustainable practices in the sourcing of
                materials, minimizing waste, and ensuring that our production
                processes are as eco-conscious as possible.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurJourneyReverse;
