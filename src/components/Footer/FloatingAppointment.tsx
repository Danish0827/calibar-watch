"use client";
import { Modal } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import ContactForm from "@/components/ContactPage/ContactForm";
import { IoIosArrowForward, IoMdCloseCircleOutline } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import ContactPage from "../ContactPage/ContactPage";

// Social links array
const socialLinks = [
  {
    href: "https://www.instagram.com/drarpitbansal.surgeon/",
    icon: FaInstagram,
  },
  {
    href: "https://www.youtube.com/@DRARPITBANSAL",
    icon: FaYoutube,
  },
  {
    href: "https://www.linkedin.com/in/dr-arpit-bansal-0b39891b/",
    icon: FaLinkedin,
  },
  {
    href: "https://www.facebook.com/drarpit/",
    icon: FaFacebook,
  },
];

// SocialLink component
const SocialLink = ({ href, Icon }: { href: string; Icon: any }) => (
  <li className="flex items-center rotate-90">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-white hover:text-[#cdc5c5] transition-colors"
    >
      <Icon className="text-2xl" />
    </a>
  </li>
);

// AppointmentLinks component for rendering social links
const AppointmentLinks = ({ className }: { className: string }) => (
  <div className={className}>
    <ul className="flex items-center gap-2 pb-4">
      {socialLinks.map(({ href, icon: Icon }, index) => (
        <SocialLink key={index} href={href} Icon={Icon} />
      ))}
    </ul>
  </div>
);

// SkeletonLoader component for loading state
const SkeletonLoader = () => (
  <div className="space-y-4 p-7">
    {Array.from({ length: 16 }).map((_, index) => (
      <div
        key={index}
        className="w-full h-4 bg-gray-300 rounded-md animate-pulse"
      ></div>
    ))}
  </div>
);

// FloatingAppointment component
const FloatingAppointment = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Show loading and open modal
  const handleAppointmentClick = () => {
    setIsOpen(true);
    setIsLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  const handleHideAppointment = () => {
    setShow(false);
  };
  const handleShowAppointment = () => {
    setShow(true);
  };

  return (
    <>
      {show === true && (
        <>
          {/* Large screen button */}
          <div className="flex gap-3 items-center cursor-pointer fixed -right-[110px] md:-right-[40px] z-50 shadow-lg -rotate-90 px-7 md:px-3 md:pr-0 py-2 rounded-t-xl bottom-[50%] bg-bgMain4 ">
            <h2 onClick={handleAppointmentClick} className="text-white text-lg">
              Inquiry Now
            </h2>
            <h2 className="text-white">
              <IoMdCloseCircleOutline
                onClick={handleHideAppointment}
                className="md:hidden text-lg "
              />
            </h2>
          </div>

          {/* Social links for large screens */}
          {/* <AppointmentLinks className="block fixed -right-[60px] z-50 -rotate-90 px-4 pt-3 pb-1 rounded-t-xl bottom-[30%] bg-[#232c77]" /> */}
        </>
      )}
      {show === false && (
        <div className="block fixed -right-[10px] z-50 -rotate-90 px-4 pt-3 pb-1 rounded-t-xl bottom-[70%] bg-[#232c77]">
          <MdMenuOpen
            onClick={handleShowAppointment}
            className="md:hidden text-xl text-white rotate-90 mb-3"
          />
        </div>
      )}
      {/* Modal for appointment form */}
      <Modal
        title={
          <span className="relative top-3 left-5 mx-3 my-3 text-bgMain4 text-xl font-bold uppercase">
             Inquiry Now
          </span>
        }
        centered
        footer={null}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
      >
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <div className="bg-black p-[60px] h-auto w-full mt-6">
            <ContactForm />
          </div>
        )}
      </Modal>
    </>
  );
};

export default FloatingAppointment;
