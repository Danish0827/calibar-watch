"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const CurrentHighlights = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.BACKEND}/wp-json/wp/v2/products?_fields=id,slug,title,meta.main-image-primary,meta.is-highlight-product,meta.model&per_page=100`
      );
      const result = await response.json();
      console.log(result, "result");

      if (response.ok) {
        const filteredData = result.filter(
          (item: any) => item.meta?.["is-highlight-product"]?.yes === "true"
        );
        setData(filteredData);
        // console.log(result);
      } else {
        console.error("Failed to fetch products:", result);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  });

  return (
    <div className="py-12 bg-white">
      <Wrapper>
        <div className="flex justify-center items-center mb-5">
          <h3 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:bg-gradient-to-r from-gray-500 to-black after:w-1/2 after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg mb-2">
            Current Highlights
          </h3>
        </div>
        <div className="container m-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.slice(0, 3).map((item, index) => (
            <Link key={index} href={`/product/${item.slug}`}>
              <div className="group border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={item.meta?.["main-image-primary"]}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-black transition-colors duration-300">
                    {item.title.rendered}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Model : {item.meta.model}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-black p-2 rounded-full shadow-md hover:bg-black hover:text-white transition-colors duration-300">
                    <FaArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default CurrentHighlights;
