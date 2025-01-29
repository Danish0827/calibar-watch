"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";

interface BreadCrumbProps {
  title: string;
  page: string;
  image1: any;
}

const BrandBanner: React.FC<BreadCrumbProps> = ({ title, page, image1 }) => {
  console.log(image1);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [loading, setLoading] = useState(true); // Track image loading

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  useEffect(() => {
    if (image1 && Array.isArray(image1) && image1.length > 0) {
      setLoading(false); // Stop loading when images are available
    }
  }, [image1]);

  return (
    <div className="relative">
      {/* Fixed Overlay Section */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-white/10"></div>
      <div className="flex flex-col items-start justify-center absolute top-0 left-0 px-5 md:px-10 lg:!px-28 z-10 h-full">
        <h2 className="text-3xl lg:text-5xl capitalize text-white">{title}</h2>
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

      {/* Image Slider with Skeleton Loader */}
      <div className="embla relative">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {loading
              ? // Skeleton Loader
                Array.from({ length: 3 }).map((_, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="h-80 w-full bg-gray-300 animate-pulse"></div>
                  </div>
                ))
              : // Actual Images
                (Array.isArray(image1) ? image1 : []).map((src, index) => (
                  <div className="embla__slide" key={index}>
                    <img
                      className="embla__slide__img h-80 object-cover w-full"
                      src={src?.image_url}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBanner;
