import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FiChevronsRight } from "react-icons/fi";
import FAQs from "../AccordionComp/Faq";
import { EmblaOptionsType } from "embla-carousel";
import EmblaThumbnail from "../EmblaThumbnail/EmblaThumbnail";
import "../EmblaThumbnail/emblaThumb.css";
import { FaWhatsapp } from "react-icons/fa";
import { MailCheck, Phone } from "lucide-react";

import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";
import GallerySkeleton from "../ProductCardSkeleton/GallerySkeleton";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = {};

export interface ProductData {
  product_title?: string;
  product_small_description?: string;
  product_big_description?: string;
  gallery_images?: string[];
  shipping_and_return?: string;
}

interface SingleProductDetailProps {
  productDataBySlug: ProductData;
}

const SingleProductDetail2: React.FC<SingleProductDetailProps> = ({
  productDataBySlug,
}) => {
  const {
    product_title,
    product_small_description,
    product_big_description,
    gallery_images,
    shipping_and_return,
  } = productDataBySlug;

  return (
    <>
      <div>
        <Wrapper className="md:py-12 py-8">
          <div className="w-full md:flex md:flex-row flex-col gap-6 md:px-4 px-2">
            <div className="md:w-[65%] w-full md:block hidden space-y-4">
              <GallerySkeleton loading={!gallery_images} />

              <div className="grid md:grid-cols-2 gap-2">
                {gallery_images &&
                  gallery_images.map((image: string, index: number) => (
                    <div className="aspect-[4/5]" key={index}>
                      <Image
                        src={image}
                        width={458}
                        height={572}
                        alt={`Gallery image ${index + 1}`}
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="md:w-1/2 w-full space-y-4 md:hidden block">
              {gallery_images && gallery_images.length > 0 ? (
                <EmblaThumbnail
                  options={OPTIONS}
                  variationImage={
                    gallery_images[0] || "/path/to/default/image.jpg"
                  }
                  gallery={gallery_images.map((src, index) => ({
                    id: index + 1,
                    src,
                    alt: `Gallery image ${index + 1}`,
                  }))}
                />
              ) : (
                <div className="w-full h-[400px] bg-gray-200 flex justify-center items-center">
                  <ProductCardSkeleton />
                </div>
              )}
            </div>

            <div className="md:w-[35%] w-full md:mt-0 mt-9 h-full sticky top-24">
              <div className="mb-3">
                <ul className="flex items-center text-sm justify-start gap-1 pt-2">
                  <li>
                    <span className="text-bgMain3 font-medium uppercase">
                      Home
                    </span>
                  </li>
                  <FiChevronsRight size={19} color="black" />
                  <li className="text-black uppercase">Watches</li>
                  <FiChevronsRight size={19} color="black" />
                  <li className="text-black uppercase">{product_title}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold  text-gray-900">
                  {product_title}
                </h3>
              </div>

              <FAQs
                product_small_description={product_small_description}
                product_big_description={product_big_description}
                shipping_and_return={shipping_and_return}
              />

              {/* <div className="w-full mt-4 h-[1px] bg-black/[0.5] self-stretch"></div> */}

              <div className="mt-5 md:flex md:flex-row flex-wrap gap-3 ">
                <button className="bg-black flex items-center gap-2 px-8 py-2 text-white font-semibold tracking-wider uppercase shadow-md rounded-sm md:mb-0 mb-2">
                  <MailCheck />
                  Mail
                </button>

                <Link href={"https://wa.me/65 83329221"}>
                  <button className="bg-black flex items-center gap-2  px-4 py-2 text-white font-semibold tracking-wider uppercase shadow-md rounded-sm md:mb-0 mb-2">
                    <FaWhatsapp size={24} />
                    Whatsapp
                  </button>
                </Link>

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
        </Wrapper>
      </div>
    </>
  );
};

export default SingleProductDetail2;
