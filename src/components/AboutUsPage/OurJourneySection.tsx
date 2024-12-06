import Image from "next/image";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const OurJourney = () => {
  return (
    <div className=" overflow-hidden">
      <Wrapper>
        <div
          className={`flex flex-col-reverse py-4  md:py-16 lg:flex-row w-full `}
        >
          <div className=" md:px-8 flex-1 group">
            <span className="    text-xl md:-ml-1 md:text-3xl py-1.5  text-primary">
              Our Journey
            </span>
            <div className="h-1 rounded-full w-16 md:w-20  md:group-hover:w-32 group-hover:w-24 duration-300 mt-1 mb-4 bg-gradient-to-r from-bgMain4 to-bgMain3 "></div>

            <div className="relative  inline-block lg:hidden font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-2 translate-y-2  bg-gradient-to-tr from-bgMain4 to-bgMain3 group-hover:-translate-x-0 group-hover:-translate-y-0 z-10"></span>
              <span className="absolute inset-0 w-full h-full  group-hover:bg-indigo-50 z-20"></span>
              <span className="relative block overflow-hidden border border-[#BCC1C9] w-full h-full z-30">
                <Image
                  src="https://img.freepik.com/free-photo/competent-team-with-thumbs-up_1098-3020.jpg?t=st=1730185094~exp=1730188694~hmac=f1d6a2320e6833012b8dbda389ab54b74055ca75e68dd3e32a79088ce5945096&w=1060"
                  alt="banner"
                  className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px]"
                  width={600}
                  height={80}
                />
              </span>
            </div>

            <div className="text-sm md:text-base text-gray-600 duration-300 group-hover:text-black mt-4 text-justify">
              Welcome to Caliber Star Watches, your ultimate destination for
              premium timepieces. Founded in year, we have been dedicated to
              bringing you the finest watches crafted by the best artisans
              around the world. From luxurious designs to innovative technology,
              we combine heritage with cutting-edge trends to offer watches that
              make a statement.
            </div>
            <div className="text-sm md:text-base text-gray-600 duration-300 group-hover:text-black mt-4 text-justify">
              Every watch in our collection is a masterpiece, built with
              precision and attention to detail. Our timepieces are crafted with
              the finest materials, from stainless steel and titanium to premium
              leather and ceramic. Whether it’s a mechanical movement, quartz
              precision, or smartwatch functionality, each piece is engineered
              for longevity and performance. Our partnerships with
              world-renowned watchmakers allow us to bring you exclusive
              collections that can’t be found elsewhere. We collaborate with
              designers who combine traditional Swiss watchmaking techniques
              with modern innovations, creating watches that blend classic
              elegance with contemporary design.
            </div>
          </div>
          <div className="relative  lg:block hidden mx-2 font-medium group md:w-full md:h-full md:min-h-[300px] md:max-w-[500px]">
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-2 translate-y-2  bg-gradient-to-tr from-bgMain3 to-bgMain4 group-hover:-translate-x-0 group-hover:-translate-y-0 z-10"></span>
            <span className="absolute inset-0 w-full h-full  group-hover:bg-indigo-50 z-20"></span>
            <span className="relative hidden lg:block overflow-hidden border border-gray-400 w-full h-full z-30">
              <Image
                src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?t=st=1730961221~exp=1730964821~hmac=8d41d2babcda5cb4fb8540cd7e0b4109556b41c5c19d12f3a8fa2ecefe54f9d9&w=996"
                alt="banner"
                className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px]"
                width={600}
                height={80}
              />
            </span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurJourney;
