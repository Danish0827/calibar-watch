"use client";
import { allProducts } from "@/utils/allProducts";
import { menuItem } from "@/utils/MenuItem";
import { defaultDescription } from "@/utils/utilsimp";
import { ChevronRight, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RequestAppointment from "./FloatingAppointment";

const Footer = () => {
  return (
    <div className="bg-bgMain">
      <div className="sacontainer  md:px-14  text-black py-6 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
        <div className="space-y-5">
          <Link href={"/"}>
            <Image
              src={"/images/main_logo.png"}
              alt="logo"
              height={200}
              width={300}
              className="w-[80%] object-contain"
            />
          </Link>
          {/* <h2 className="text-[18px] lg:text-[25px] leading-none tracking-wide uppercase font-medium">
            Caliber Star Watches
          </h2> */}
          <p className="text-sm font-light text-justify">
            {defaultDescription}
          </p>
        </div>

        {/* <div className="space-y-4">
          <h2 className="text-xl font- tracking-wide">OUR PRODUCTS</h2>
          <div className="w-[100px] h-[1.5px] bg-bgMain3"></div>
          <ul className="space-y-3 md:space-y-4 text-sm font-light">
            {allProducts.map((item, index) => (
              <li key={index}>
                <Link
                  href={`${item.link}`}
                  className="hover:text-templateOrange hover:pl-2 transition-all ease"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="justify-center flex">
          <div className="space-y-4">
            {/* <h2 className="text-xl font- tracking-wide">USEFUL LINKS</h2>
            <div className="w-[100px] h-[1.5px] bg-bgMain3"></div> */}
            <h2 className="text-xl font- tracking-wide">USEFUL LINKS</h2>
            <div className="w-[100px] h-[1.5px] bg-bgMain3"></div>
            <ul className="space-y-2 md:space-y-3 text-sm font-light">
              {menuItem.map((item, index) => (
                <li key={index}>
                  <Link
                    className="hover:text-templateOrange hover:pl-2 transition-all ease"
                    href={item.url}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* <li>
              <Link
                className=" hover:text-templateOrange hover:pl-2 transition-all ease"
                href={"/sitemap.xml"}
              >
                Sitemap
              </Link>
            </li> */}
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font- tracking-wide">CONTACT DETAILS</h2>
          <div className="w-[100px] h-[1.5px] bg-bgMain3"></div>
          <div className="space-y-2">
            <h2 className="text-lg font-medium">HEAD OFFICE</h2>
            <p className="text-sm tracking-wide">
              80 GENTING LANE, # 03-10 RUBY INDUSTRIAL COMPLEX, SINGAPORE -
              349565
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-medium">SECOND OFFICE</h2>
            <p className="text-sm tracking-wide">DUBAI | UAE</p>
          </div>
          <div className="w-full h-[1px] bg-black/10"></div>
          <div className="space-y-2">
            <h2 className="text-lg font-medium">EMAIL</h2>
            <a
              href="mailto:info@caliberstar.com"
              className="text-sm tracking-wide"
            >
              info@caliberstar.com
            </a>
          </div>
          <div className="w-full h-[1px] bg-black/10"></div>
          <div className="space-y-2">
            <h2 className="text-lg font-medium">CONTACT</h2>
            <a href="tel:+918087010270" className="text-sm tracking-wide">
              +65 8332 9221
            </a>
          </div>
        </div>
      </div>
      <div className="templateContainer">
        <hr />
      </div>
      <div className="templateContainer text-black py-6">
        <p className="text-sm tracking-wider text-center">
          © Copyright 2024 | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
