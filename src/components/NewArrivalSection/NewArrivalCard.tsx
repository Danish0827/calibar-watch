"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ProductDataByCategory } from "../SingleCategoryProductData/SingleCategoryProductData";

interface ProductDataProps {
  data: ProductDataByCategory;
  //  {
  //   title: string;
  //   slug: string;
  //   main_image_primary: string;
  //   main_image_secondary?: string | null;
  // };
}

const NewArrivalCard: React.FC<ProductDataProps> = ({ data }) => {
  const { title, main_image_primary, main_image_secondary, slug } = data;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={`/product/${slug}`}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[4/5] border border-gray-100 overflow-hidden cursor-pointer mb-2 "
      >
        {/* <div className="absolute top-0 right-0 bg-[#6d600b] text-white text-xs font-semibold px-2 py-1 rounded-bl-lg uppercase z-10">
          New
        </div> */}

        {/* Primary Image */}
        {/* <div className="absolute left-0 top-0 w-full h-full">
            <Image
              src={main_image_primary}
              width={340}
              height={410}
              alt={title}
              layout="responsive"
              objectFit="cover"
            />
          </div> */}
        <div className="absolute left-0 top-0 w-full h-full">
          {main_image_secondary && (
            <Image
              src={isHovered ? main_image_secondary : main_image_primary}
              width={400}
              height={450}
              alt={title}
              layout="responsive"
              objectFit="cover"
              className="transition-transform duration-600 hover:scale-105 duration-300 ease-in-out "
            />
          )}
        </div>

        {/* Product Title */}
        <div className="absolute bottom-0 md:-bottom-3 left-0 text-center md:mb-3 mb-0 w-full">
          <h4 className="md:text-base text-[14px] font-medium text-black rounded-md py-1 px-2 z-10 md:line-clamp-none line-clamp-1">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default NewArrivalCard;
