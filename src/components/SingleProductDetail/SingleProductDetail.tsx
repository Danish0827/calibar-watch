"use client";
import { useParams } from "next/navigation";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { CheckCheck, ChevronRight, MailCheck, Phone } from "lucide-react";
import { FiChevronsRight } from "react-icons/fi";
import { FaCheckCircle, FaTruck, FaWhatsapp } from "react-icons/fa";
import EmblaThumbnail from "../EmblaThumbnail/EmblaThumbnail";
import { EmblaOptionsType } from "embla-carousel";
import "../EmblaThumbnail/emblaThumb.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import RelatedProducts from "./RelatedProducts";

const OPTIONS: EmblaOptionsType = {};

interface Variation {
  description: string;
  image?: {
    src: string;
  };
}

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const selectedVariations1: Variation = {
  image: {
    src: "/single/single1.jpg",
  },
  description: `
    <p>This is a <strong>premium watch</strong> that is designed for both functionality and style...</p>
    <ul>
      <li><strong>Material:</strong> Stainless Steel</li>
      <li><strong>Water Resistance:</strong> 50 meters</li>
      <li><strong>Movement:</strong> Quartz</li>
    </ul>
    <p>Whether you're at the office or out with friends, this watch will keep you on time and in style.</p>
  `,
};

const data1 = {
  description: `
    <p>Introducing our latest collection of <strong>luxury wristwatches</strong>, designed for individuals...</p>
    <ol>
      <li><strong>Craftsmanship:</strong> Handcrafted with care</li>
      <li><strong>Design:</strong> Elegant and modern</li>
      <li><strong>Warranty:</strong> 2 years</li>
    </ol>
    <p>Experience the perfect blend of sophistication and performance with every piece from this collection.</p>
  `,
};

const data = {
  images: [
    { id: 1, src: "/single/single1.jpg", alt: "Gallery image 1" },
    { id: 2, src: "/single/single3.jpg", alt: "Gallery image 2" },
    { id: 3, src: "/single/single4.jpg", alt: "Gallery image 3" },
    { id: 4, src: "/single/single5.jpg", alt: "Gallery image 4" },
    { id: 5, src: "/single/single6.jpg", alt: "Gallery image 5" },
    { id: 6, src: "/single/single7.jpg", alt: "Gallery image 6" },
  ],
};

const SingleProductDetail = () => {
  const { product_slug } = useParams();
  console.log(product_slug, "product_sluh=g");
  return (
    <>
      <div>
        <Wrapper className="md:py-12 py-8">
          <div className="w-full md:flex md:flex-row flex-col gap-20 md:px-10 px-2">
            <div className="md:w-1/2 w-full space-y-4">
              <EmblaThumbnail
                options={OPTIONS}
                variationImage={
                  selectedVariations1?.image?.src ||
                  "/path/to/default/image.jpg"
                }
                gallery={data?.images}
              />
            </div>
            <div className="md:w-1/2 w-full md:mt-0 mt-9">
              <div className="mb-1">
                <ul className="flex items-center text-sm justify-start gap-1 pt-2">
                  <li>
                    <span className="text-bgMain3 font-medium uppercase">
                      Home
                    </span>
                  </li>
                  <FiChevronsRight size={19} color="black" />
                  <li className="text-black uppercase">Watches</li>
                  <FiChevronsRight size={19} color="black" />
                  <li className="text-black uppercase">Luxury Chronograph</li>
                </ul>
              </div>

              <div>
                <h3 className="text-4xl font-semibold mb-1 text-gray-900">
                  Luxury Chronograph Watch
                </h3>
              </div>

              <div className="mb-4">
                {/* <h4 className="text-lg text-black">
                  Product small Description
                </h4> */}
                <h4 className="text-lg text-black">
                  A Classic Timepiece with Modern Features
                </h4>
                <p className="text-lg text-black/[0.8]">
                  The Luxury Chronograph is designed for those who appreciate
                  elegance and precision. Crafted from premium stainless steel,
                  this watch features a sleek black dial with chronograph
                  functionality, making it the perfect blend of style and
                  utility. The watch is water-resistant up to 100 meters,
                  ensuring durability no matter where life takes you.
                </p>

                <div className="w-full mt-4 h-[1px] bg-black/[0.5] self-stretch"></div>
                <div className="mt-3">
                  {Array(6)
                    .fill("")
                    .map((_, index) => (
                      <div className="flex items-center gap-2" key={index}>
                        <CheckCheck size={18} />
                        <p className="text-lg">
                          Magnam nostrum qui, cupiditate, molestiae similique
                          eveniet
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="w-full mt-4 h-[1px] bg-black/[0.5] self-stretch"></div>

              <div className="mt-5 md:flex md:flex-row flex-wrap gap-3 ">
                <button className="bg-black flex items-center gap-2 px-8 py-2 text-white font-semibold tracking-wider uppercase shadow-md rounded-sm md:mb-0 mb-2">
                  <MailCheck />
                  Mail
                </button>

                <button className="bg-black flex items-center gap-2  px-8 py-2 text-white font-semibold tracking-wider uppercase shadow-md rounded-sm md:mb-0 mb-2">
                  <FaWhatsapp size={24} />
                  Whatsapp
                </button>

                <button className="bg-black flex items-center gap-2 px-8 py-2 text-white font-semibold tracking-wider uppercase shadow-md rounded-sm">
                  <Phone />
                  Call
                </button>
              </div>

              <div className="mt-5 text-center">
                <p className="text-sm text-gray-500">
                  Our experts are ready to assist you with any questions. Get in
                  touch to learn more about this exquisite timepiece!
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-5 bg-black flex flex-col items-center justify-center space-y-4 py-12 md:py-8 lg:py-16">
            <h2 className="text-xl md:text-3xl text-center font-semibold tracking-wide uppercase text-white">
              PRODUCT DESCRIPTION
            </h2>
            <div className="w-[150px] h-[2.5px] bg-white"></div>
            <div className="">
              {selectedVariations1.description ? (
                <div
                  className="text-[15px] leading-loose text-center tracking-wide text-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: selectedVariations1.description,
                  }}
                />
              ) : (
                <div
                  className="text-[15px] leading-loose text-center tracking-wide text-gray-300"
                  dangerouslySetInnerHTML={{ __html: data1.description }}
                />
              )}
            </div>
          </div>

          <div>
            <RelatedProducts />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default SingleProductDetail;
