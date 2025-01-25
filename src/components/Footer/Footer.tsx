"use client";
import { menuItem } from "@/utils/MenuItem";
import { defaultDescription } from "@/utils/utilsimp";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandData, fetchBrandsData } from "@/utils/ApiUtils";

const Footer = () => {
  const [brands, setBrands] = useState<BrandData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { brands } = await fetchBrandsData(1);
        setBrands(brands);
        // console.log(brands, "dfsfdsf");
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <footer
      style={{
        boxShadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
      }}
      className="bg-bgMain text-black shadow-md"
    >
      {/* Main Footer Content */}
      <div className="sacontainer md:px-14 py-6 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div className="space-y-5">
          <Link href="/">
            <Image
              src="/images/mainlogo.png"
              alt="logo"
              height={200}
              width={300}
              className="w-[80%] object-contain"
            />
          </Link>
          <p className="text-sm font-light text-justify">
            {defaultDescription}
          </p>
        </div>

        {/* Useful Links Section */}
        <div className="flex md:justify-center">
          <div className="space-y-3">
            <h2 className="text-xl font-medium tracking-wide text-bgMain4">
              USEFUL LINKS
            </h2>
            <div className="w-[100px] h-[1.5px] bg-bgMain4"></div>
            <ul className="space-y-2 md:space-y-3 text-sm font-light">
              {menuItem.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="hover:text-bgMain4 hover:pl-1 font-medium transition-all ease"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-medium tracking-wide text-bgMain4">
              BRANDS
            </h2>
            <div className="w-[100px] h-[1px] bg-bgMain4"></div>
            <ul className="space-y-2 md:space-y-3 text-sm font-light">
              {brands.slice(0, 5).map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/brands/${item.slug}`}
                    className="hover:text-bgMain4 hover:pl-1 font-medium transition-all ease-in-out"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium tracking-wide text-bgMain4">
            CONTACT DETAILS
          </h2>
          <div className="w-[100px] h-[1.5px] bg-bgMain4"></div>

          {/* Head Office */}
          {/* <div>
            <h3 className="text-lg font-medium">HEAD OFFICE</h3>
            <p className="text-sm tracking-wide flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span>
                80 Genting Lane, #03-10 Ruby Industrial Complex, Singapore -
                349565
              </span>
            </p>
          </div> */}

          {/* Second Office */}
          {/* <div>
            <h3 className="text-lg font-medium">SECOND OFFICE</h3>
            <p className="text-sm tracking-wide flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span>Dubai </span>
            </p>
          </div> */}

          {/* Email */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">EMAIL</h3>
            <a
              href="mailto:info@caliberstar.com"
              className="text-sm tracking-wide flex items-center space-x-2 hover:text-bgMain4 transition-all"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5 text-gray-600" />
              <span>info@caliberstar.com</span>
            </a>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">CONTACT</h3>
            <a
              href="tel: +6583329221"
              className="text-sm tracking-wide flex items-center space-x-2 hover:text-bgMain4 transition-all"
            >
              <Phone className="w-5 h-5 text-gray-600" />
              <span>+65 8332 9221</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="sacontainer">
        <hr />
      </div>

      {/* Footer Bottom */}
      <div className="sacontainer py-6">
        <p className="text-sm tracking-wider text-center">
          © Copyright 2024 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
