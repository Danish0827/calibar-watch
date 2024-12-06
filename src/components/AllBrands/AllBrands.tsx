import React from "react";
import BreadCrumb from "../BreadCrumbSaif/BreadCrumb";
import Wrapper from "../Wrapper/Wrapper";
import { BrandData } from "@/utils/ApiUtils";
import Link from "next/link";
import Image from "next/image";

interface AllBrandsProps {
  brands: BrandData[];
}

const AllBrands: React.FC<AllBrandsProps> = ({ brands }) => {
  return (
    <>
      <BreadCrumb
        title={"Our Brands"}
        page={"Our Brands"}
        image1="/images/slide2.webp"
      />

      <Wrapper className="py-12 ">
        <div className="flex justify-center items-center ">
          <h3 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:mx-auto after:bg-gradient-to-r from-gray-500 to-black after:w-[70%] after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg">
            Our Brands
          </h3>
        </div>
        <div className="mt-8 overflow-x-auto scroll-smooth flex gap-5 scrollbar-hidden">
          <div className="grid md:grid-cols-4 lg:grid-cols-7 grid-cols-2 gap-3 md:gap-5">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="border p-1 rounded-lg shadow-md flex flex-col items-center"
              >
                <Link href={`/brands/${brand.slug}`} className="w-full h-full">
                  {/* Image */}
                  <div className="mb-4  h-auto md:w-auto md:h-auto  ">
                    <Image
                      src={brand.meta?.image || "/images/placeholder.jpg"}
                      alt={brand.name}
                      width={180}
                      height={180}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Name */}
                  <h4 className="text-xl font-semibold text-center">
                    {brand.name}
                  </h4>
                  {/* <p className="text-gray-500 text-center">
                    {brand.description}
                  </p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default AllBrands;
