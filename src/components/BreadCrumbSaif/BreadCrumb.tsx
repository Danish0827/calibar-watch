import Link from "next/link";
import React from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";

interface BreadCrumbProps {
  title: string;
  page: string;
  image1: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title, page, image1 }) => {
  return (
    <>
      <div
        className="relative bg-bottom h-auto py-14 md:py-32 object-cover"
        style={{
          backgroundImage: `url(${image1 ? image1 : "/breadcrumbImage.webp"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-white/10"></div>
        <div className="flex flex-col items-start justify-center relative px-5 md:px-10 lg:!px-28 z-10">
          <h2 className="text-3xl lg:text-5xl capitalize text-white">
            {title}
          </h2>
          <div>
            <ul className="flex items-center text-sm justify-start gap-1 pt-2">
              <Link href="/">
                <FaHome size={17} className="-mt-1" color="white" />
              </Link>
              <li>
                <Link href={"/"}>
                  <span className="text-white font-medium">Home</span>
                </Link>
              </li>
              <FiChevronsRight size={19} color="white" />
              <li className="text-white">{page}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
