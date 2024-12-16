"use client";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FiChevronsRight } from "react-icons/fi";
import FAQs from "../AccordionComp/Faq";
import { EmblaOptionsType } from "embla-carousel";
import EmblaThumbnail from "../EmblaThumbnail/EmblaThumbnail";
import "../EmblaThumbnail/emblaThumb.css";
import { FaWhatsapp } from "react-icons/fa";
import { MailCheck, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "antd";
import ContactForm from "../ContactPage/ContactForm";

const OPTIONS: EmblaOptionsType = {};

export interface ProductData {
  product_title?: string;
  product_small_description?: string;
  product_big_description?: string;
  gallery_images?: string[];
  shipping_and_return?: string;
  main_image_primary?: string | any;
  brand?: string;
  model?: string;
  "case-diameter"?: string;
  "case-material"?: string;
  "dial-type"?: string;
  bezel?: string;
  bracelet?: string;
  movement?: string;
  "water-resistance"?: string;
}

interface SingleProductDetailProps {
  productDataBySlug: ProductData;
}

const SingleProductDetail2: React.FC<SingleProductDetailProps> = ({
  productDataBySlug,
}: any) => {
  console.log(productDataBySlug);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleAppointmentClick = () => {
    setIsOpen(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const SkeletonLoader = () => (
    <div className="space-y-4 p-7">
      {Array.from({ length: 13 }).map((_, index) => (
        <div
          key={index}
          className="w-full h-4 bg-gray-300 rounded-md animate-pulse"
        ></div>
      ))}
    </div>
  );

  return (
    <>
      <div>
        <Wrapper className="md:py-12 py-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Product Image */}
            <div className="flex justify-center">
              <Image
                src={productDataBySlug.meta.main_image_primary}
                width={458}
                height={572}
                alt="Product Image"
                className="rounded-lg lg:scale-150"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Product Details
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Brand: </span>
                  {productDataBySlug.meta.brand}
                </li>
                <li>
                  <span className="font-semibold">Model: </span>
                  {productDataBySlug.meta.model}
                </li>
                <li>
                  <span className="font-semibold">Case Diameter: </span>
                  {productDataBySlug.meta["case-diameter"]}
                </li>
                <li>
                  <span className="font-semibold">Case Material: </span>
                  {productDataBySlug.meta["case-material"]}
                </li>
                <li>
                  <span className="font-semibold">Dial Color: </span>
                  {productDataBySlug.meta["dial-type"]}
                </li>
                <li>
                  <span className="font-semibold">Bezel: </span>
                  {productDataBySlug.meta.bezel}
                </li>
                <li>
                  <span className="font-semibold">Bracelet: </span>
                  {productDataBySlug.meta.bracelet}
                </li>
                <li>
                  <span className="font-semibold">Movement: </span>
                  {productDataBySlug.meta.movement}
                </li>
                <li>
                  <span className="font-semibold">Water Resistance: </span>
                  {productDataBySlug.meta["water-resistance"]}
                </li>
              </ul>
            </div>

            {/* Action Section */}
            <div className="space-y-4">
              {/* Breadcrumbs */}
              <ul className="flex items-center text-sm text-gray-600 gap-2">
                <li>
                  <Link href="/" className="text-bgMain3 font-medium uppercase">
                    Home
                  </Link>
                </li>
                <FiChevronsRight size={19} color="black" />
                <li>{productDataBySlug.meta.brand}</li>
                <FiChevronsRight size={19} color="black" />
                <li>{productDataBySlug.meta.product_title}</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900">
                {productDataBySlug.meta.product_title}
              </h3>

              {/* Buttons */}
              <div className="block mb-3">
                <button
                  onClick={handleAppointmentClick}
                  className="bg-black text-white flex items-center gap-2 px-6 py-3 font-semibold rounded-md shadow-md hover:bg-gray-800 transition"
                >
                  <MailCheck size={20} />
                  Mail
                </button>
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

                <Link
                  target="_blank"
                  href={`https://wa.me/971507531231?text=Hello%2C%0D%0AI%27m+interested+in+${productDataBySlug.meta.product_title}`}
                >
                  <button className="bg-green-600 text-white flex items-center gap-2 px-6 py-3 font-semibold rounded-md shadow-md hover:bg-green-500 transition">
                    <FaWhatsapp size={20} />
                    Whatsapp
                  </button>
                </Link>

                {/* <Link target="_blank" href="tel:+971507531231">
                  <button className="bg-black text-white flex items-center gap-2 px-6 py-3 font-semibold rounded-md shadow-md hover:bg-gray-800 transition">
                    <Phone size={20} />
                    Call
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default SingleProductDetail2;
