"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ProductDataByCategory } from "../SingleCategoryProductData/SingleCategoryProductData";

interface ProductDataProps {
  data: ProductDataByCategory;
}

const NewArrivalCard: React.FC<ProductDataProps> = ({ data }) => {
  console.log(data);

  const { casematerial, model, title, featured_media_url, slug } = data;

  return (
    <Link href={`/product/${slug}`}>
      <div className="group relative flex items-center p-4 bg-gray-100 shadow-md hover:shadow-xl rounded-lg cursor-pointer transition duration-300">
        {/* Product Details */}
        <div className="ml-4 text-left w-2/3">
          <h4 className="text-lg pb-1 md:pb-2 font-semibold text-bgMain4">{title}</h4>
          <p className="text-sm text-gray-700">
            {casematerial.replace(/&amp;/g, "&")}
          </p>
          {/* <p className="text-md font-bold mt-1">163,800 AED</p> */}
          <span className="text-xs uppercase font-semibold text-black">
            {model}
          </span>
        </div>
        {/* Product Image */}
        <div className="overflow-hidden">
          <Image
            src={featured_media_url}
            width={250}
            height={250}
            alt={title}
            className="transition-transform duration-300 group-hover:scale-110 -mt-10"
          />
        </div>
      </div>
    </Link>
  );
};

export default NewArrivalCard;
