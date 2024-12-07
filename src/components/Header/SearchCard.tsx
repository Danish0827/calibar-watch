'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProductDataProps {
  data: {
    title: string;
    slug: string;
    main_image_primary: string;
    main_image_secondary?: string | null;
  };
}

const SearchCard: React.FC<ProductDataProps> = ({ data }) => {
  const { title, main_image_primary, main_image_secondary, slug } = data;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Link href={`/product/${slug}`}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative aspect-[4/5]   shadow-md border border-gray-100 overflow-hidden cursor-pointer mb-2 "
        >
          <div className="absolute top-0 right-0 bg-[#6d600b] text-white text-xs font-semibold px-2 py-1 rounded-bl-lg uppercase z-10">
            New
          </div>

          {/* Primary Image */}
          <div className="absolute left-0 top-0 w-full h-full">
            <Image
              src={main_image_primary}
              width={340}
              height={410}
              alt={title}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          {main_image_secondary && (
            <Image
              src={isHovered ? main_image_secondary : main_image_primary}
              width={340}
              height={410}
              alt={title}
              className="object-cover transition-transform duration-600 hover:scale-105 duration-300 ease-in-out absolute top-0 left-0 "
            />
          )}

          {/* Product Title */}
          <div className="  absolute bottom-0 text-center left-0 w-full">
            <h4 className="md:text-[14px] text-[14px] font-normal text-black/[0.8] rounded-md py-1 px-2 z-10  line-clamp-1">
              {title}
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SearchCard;
