"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import BreadCrumb from "../BreadCrumbSaif/BreadCrumb";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FaMapPin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import { contactFormSubmission } from "@/utils/ContactSubmission";
import { send } from "@/utils/ContactMail";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  const words = ["With Us", "With Our Team"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BreadCrumb
        title={"Contact us"}
        page={"Contact us"}
        image1="/images/contact1.jpg"
      />

      <div className="md:px-6 px-3 my-24">
        <Wrapper>
          <div className="w-full h-auto flex flex-col justify-center items-center">
            <h3 className="text-black text-xl font-semibold text-center">
              Direct Communication
            </h3>
            <div className="mt-5">
              <h4 className="md:text-5xl text-4xl text-center font-semibold">
                Connect{" "}
                <span
                  className={`text-white bg-black px-2 py-1 inline-block transition-all duration-500 ease-in transform `}
                >
                  {currentWord}
                </span>
              </h4>
            </div>
          </div>

          <div className="my-10">
            <div className="flex md:flex-row flex-col ">
              <div className="md:w-1/2 w-full">
                <Image
                  src="/images/contact2.jpg"
                  layout="responsive"
                  width={700}
                  height={500}
                  className="object-cover"
                  alt="contact_img"
                />
              </div>

              <div className="bg-black p-[60px] h-auto md:w-1/2 w-full">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="">
            <div className="bg-black grid md:grid-cols-3 grid-cols-1 gap-8 px-8 py-8">
              <div className="flex md:flex-row flex-col gap-4 items-center justify-center text-center md:text-left">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white">
                  <FaMapPin size={24} color="black" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base text-bgMain">
                    80 Genting Lane, #03-10 Ruby Industrial Complex
                  </h3>
                  <h4 className="text-2xl text-white">SINGAPORE - 349565</h4>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-4 items-center justify-center text-center md:text-left">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white">
                  <FaPhoneAlt size={24} color="black" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base text-bgMain ">Reach out to us at</h3>
                  <h4 className="text-2xl text-white">
                    <Link href="tel:+6583329221">Phone: +65 8332 9221</Link>
                  </h4>
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-4 items-center justify-center text-center md:text-left">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white">
                  <IoIosMail size={24} color="black" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base text-bgMain ">Customer Service</h3>
                  <h4 className="text-2xl text-white">
                    <Link href="mailto:info@caliberstar.com">
                      Email - info@caliberstar.com
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ContactPage;
