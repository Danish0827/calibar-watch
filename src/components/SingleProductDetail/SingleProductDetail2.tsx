"use client";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FiChevronsRight } from "react-icons/fi";
import { EmblaOptionsType } from "embla-carousel";
import "../EmblaThumbnail/emblaThumb.css";
import { FaWhatsapp } from "react-icons/fa";
import { MailCheck, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  watch_code?: string;
  "water-resistance"?: string;
}

interface SingleProductDetailProps {
  productDataBySlug: ProductData;
}

const SingleProductDetail2: React.FC<SingleProductDetailProps> = ({
  productDataBySlug,
}: any) => {
  // console.log(productDataBySlug);

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

  const sendToWhatsappMessage = () => {
    // Format the details as a string
    const details = [
      productDataBySlug?.meta?.brand &&
        `Brand: ${productDataBySlug.meta.brand.replace(/&amp;/g, "&")}`,
      productDataBySlug?.meta?.model &&
        `Model: ${productDataBySlug.meta.model.replace(/&amp;/g, "&")}`,
      productDataBySlug?.meta?.["case-diameter"] &&
        `Case Diameter: ${productDataBySlug.meta["case-diameter"].replace(
          /&amp;/g,
          "&"
        )}`,
      productDataBySlug?.meta?.["case-material"] &&
        `Case Material: ${productDataBySlug.meta["case-material"].replace(
          /&amp;/g,
          "&"
        )}`,
      productDataBySlug?.meta?.["dial-color"] &&
        `Dial Color: ${productDataBySlug.meta["dial-color"].replace(
          /&amp;/g,
          "&"
        )}`,
      productDataBySlug?.meta?.["dial-type"] &&
        `Dial Type: ${productDataBySlug.meta["dial-type"].replace(
          /&amp;/g,
          "&"
        )}`,
      productDataBySlug?.meta?.bezel &&
        `Bezel: ${productDataBySlug.meta.bezel.replace(/&amp;/g, "&")}`,
      productDataBySlug?.meta?.bracelet &&
        `Bracelet: ${productDataBySlug.meta.bracelet.replace(/&amp;/g, "&")}`,
      productDataBySlug?.meta?.movement &&
        `Movement: ${productDataBySlug.meta.movement.replace(/&amp;/g, "&")}`,
      productDataBySlug?.meta?.["water-resistance"] &&
        `Water Resistance: ${productDataBySlug.meta["water-resistance"].replace(
          /&amp;/g,
          "&"
        )}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Create the WhatsApp message text
    const message = `Hello, I'm interested in the product: ${productDataBySlug.meta.product_title}.\n\nDetails:\n${details}\n\nProduct Link: ${process.env.FRONTEND}/product/${productDataBySlug.slug}`;

    return message;
  };
  const imageRef = useRef<HTMLImageElement>(null);
  const zoomLensRef = useRef<HTMLDivElement>(null);
  const zoomedImageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const image = imageRef.current;
    const zoomLens = zoomLensRef.current;
    const zoomedImage = zoomedImageRef.current;

    if (!image || !zoomLens || !zoomedImage) return;

    // Get image dimensions and calculate the position of the zoom lens
    const bounds = image.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;

    const lensSize = zoomLens.offsetWidth;
    const imageWidth = bounds.width;
    const imageHeight = bounds.height;

    // Move the zoom lens according to mouse position
    let lensX = mouseX - lensSize / 2;
    let lensY = mouseY - lensSize / 2;

    // Prevent lens from going out of bounds
    lensX = Math.max(0, Math.min(lensX, imageWidth - lensSize));
    lensY = Math.max(0, Math.min(lensY, imageHeight - lensSize));

    zoomLens.style.left = `${lensX}px`;
    zoomLens.style.top = `${lensY}px`;

    // Show the zoomed image area and calculate zoom level
    const zoomFactor = 2; // Zoom scale factor
    const zoomX = (mouseX / imageWidth) * 100;
    const zoomY = (mouseY / imageHeight) * 100;

    zoomedImage.style.backgroundImage = `url(${image.src})`;
    zoomedImage.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
    zoomedImage.style.backgroundSize = `${imageWidth * zoomFactor}px ${
      imageHeight * zoomFactor
    }px`;

    // Show the zoomed image and lens when hovering
    zoomLens.style.display = "block";
    zoomedImage.style.display = "block";
  };

  const handleMouseLeave = () => {
    const zoomLens = zoomLensRef.current;
    const zoomedImage = zoomedImageRef.current;

    if (zoomLens && zoomedImage) {
      zoomLens.style.display = "none";
      zoomedImage.style.display = "none";
    }
  };

  useEffect(() => {
    const imageContainer: any = imageRef.current?.closest(".image-container");

    imageContainer?.addEventListener("mousemove", handleMouseMove);
    imageContainer?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageContainer?.removeEventListener("mousemove", handleMouseMove);
      imageContainer?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <>
      <div>
        <Wrapper className="md:py-12 py-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="image-container">
                <img
                  ref={imageRef}
                  src={productDataBySlug.featured_media_url || ""}
                  alt="Product Image"
                  className="product-image"
                />
                <div ref={zoomLensRef} className="zoom-lens"></div>
                <div ref={zoomedImageRef} className="zoomed-image"></div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6 lg:h-[400px]">
              <h2 className="text-3xl font-bold text-bgMain4">
                Product Details
              </h2>
              <ul className="space-y-2 text-gray-700">
                {productDataBySlug?.meta?.brand && (
                  <li>
                    <span className="font-semibold">Brand: </span>
                    {productDataBySlug.meta.brand.replace(/&amp;/g, "&")}
                  </li>
                )}
                {productDataBySlug?.meta?.model && (
                  <li>
                    <span className="font-semibold">Model: </span>
                    {productDataBySlug.meta.model.replace(/&amp;/g, "&")}
                  </li>
                )}
                {productDataBySlug?.meta?.["case-diameter"] && (
                  <li>
                    <span className="font-semibold">Case Diameter: </span>
                    {productDataBySlug.meta["case-diameter"].replace(
                      /&amp;/g,
                      "&"
                    )}mm
                  </li>
                )}
                {productDataBySlug?.meta?.["case-material"] && (
                  <li>
                    <span className="font-semibold">Case Material: </span>
                    {productDataBySlug.meta["case-material"].replace(
                      /&amp;/g,
                      "&"
                    )}
                  </li>
                )}
                {productDataBySlug?.meta?.["dial-color"] && (
                  <li>
                    <span className="font-semibold">Dial Color: </span>
                    {productDataBySlug.meta["dial-color"].replace(
                      /&amp;/g,
                      "&"
                    )}
                  </li>
                )}
                {productDataBySlug?.meta?.["dial-type"] && (
                  <li>
                    <span className="font-semibold">Dial Type: </span>
                    {productDataBySlug.meta["dial-type"].replace(/&amp;/g, "&")}
                  </li>
                )}
                {productDataBySlug?.meta?.bezel && (
                  <li>
                    <span className="font-semibold">Bezel: </span>
                    {productDataBySlug.meta.bezel.replace(/&amp;/g, "&")}
                  </li>
                )}
                {productDataBySlug?.meta?.bracelet && (
                  <li>
                    <span className="font-semibold">Bracelet: </span>
                    {productDataBySlug.meta.bracelet.replace(/&amp;/g, "&")}
                  </li>
                )}
                {productDataBySlug?.meta?.movement && (
                  <li>
                    <span className="font-semibold">Movement: </span>
                    {productDataBySlug.meta.movement.replace(/&amp;/g, "&")}
                  </li>
                )}
                {productDataBySlug?.meta?.["water-resistance"] && (
                  <li>
                    <span className="font-semibold">Water Resistance: </span>
                    {productDataBySlug.meta["water-resistance"].replace(
                      /&amp;/g,
                      "&"
                    )}
                  </li>
                )}
              </ul>
            </div>

            {/* Action Section */}
            <div className="space-y-4 lg:h-[400px]">
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
                <Link target="_blank" href={`mailto:info@caliberstar.com`}>
                  <button className="mb-3 bg-black text-white flex justify-center w-full items-center gap-2 px-6 py-3 font-semibold rounded-md shadow-md hover:bg-black transition">
                    <MailCheck size={20} />
                    Mail
                  </button>
                </Link>
                <Link
                  target="_blank"
                  href={`https://wa.me/6583329221?text=${encodeURIComponent(
                    sendToWhatsappMessage()
                  )}`}
                >
                  <button className="mb-3 bg-green-600 text-white flex justify-center w-full items-center gap-2 px-6 py-3 font-semibold rounded-md shadow-md hover:bg-green-500 transition">
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
                <button
                  onClick={handleAppointmentClick}
                  className="bg-black w-full mb-3 text-white flex justify-center items-center gap-2 px-6 py-3 font-semibold rounded-md shadow-md hover:bg-gray-800 transition"
                >
                  <MailCheck size={20} />
                  Inquire for price
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
                      <ContactForm
                        productTitle={productDataBySlug?.meta?.product_title}
                        productModel={productDataBySlug?.meta?.model}
                        productCode={productDataBySlug?.meta?.watch_code}
                      />
                    </div>
                  )}
                </Modal>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default SingleProductDetail2;
