"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { BsEnvelopeAt } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const AnnouncementBar = () => {
  const announcements = [
    "NO COST EMI AVAILABLE ON ORDER ABOVE",
    "FREE SHIPPING ON ORDERS OVER $50",
    "LIMITED TIME OFFER: 20% OFF SITEWIDE",
    "SIGN UP FOR OUR NEWSLETTER FOR EXCLUSIVE DEALS",
  ];

  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      <Wrapper>
        <Link href={"/"} className="lg:flex hidden justify-center py-4">
          <Image
            src="/images/main_logo.png"
            alt="Our Office"
            height={130}
            width={250}
          />
        </Link>
      </Wrapper>
    </div>
  );
};

export default AnnouncementBar;
