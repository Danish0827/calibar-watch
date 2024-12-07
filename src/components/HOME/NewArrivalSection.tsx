"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";
import { useDispatch } from "react-redux";
import { setProducts } from "@/store/slice/productSlice";
import useEmblaCarousel from "embla-carousel-react";
import NewArrivalCard from "../NewArrivalSection/NewArrivalCard";
import { transform } from "next/dist/build/swc/generated-native";

const NewArrivalSection = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([]);
  const [pagination, setPagination] = useState<{
    totalProducts: number;
    totalPages: number;
    currentPage: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps", // Ensures no excessive spacing
  });

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.BACKEND}/wp-json/custom-api/v1/products?page=${currentPage}&per_page=${perPage}`
      );
      const result = await response.json();
      console.log(result, "result");

      if (response.ok) {
        setData(result.products);
        dispatch(setProducts(result.products));
        setPagination({
          totalProducts: result.total_products,
          totalPages: result.total_pages,
          currentPage: result.current_page,
        });
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
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#f1f1f1] pt-12 pb-8 md:px-4 overflow-hidden">
      <Wrapper>
        <div>
          <div className="flex justify-center items-center">
            <h3 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:bg-gradient-to-r from-gray-500 to-black after:w-1/2 after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg mb-2">
              New Arrivals
            </h3>

            {/* Carousel Navigation Buttons */}
            {/* <div className="flex gap-4 justify-center items-center">
              <button
                className="bg-gray-100 w-[48px] h-[48px] flex justify-center items-center rounded-full shadow-md cursor-pointer"
                onClick={() => emblaApi && emblaApi.scrollPrev()}
              >
                <GoArrowLeft size={22} />
              </button>
              <button
                className="bg-gray-100 w-[48px] h-[48px] flex justify-center items-center rounded-full shadow-md cursor-pointer"
                onClick={() => emblaApi && emblaApi.scrollNext()}
              >
                <GoArrowRight size={22} />
              </button>
            </div> */}
          </div>

          {/* Embla Carousel */}
          <div className="embla mt-4" ref={emblaRef}>
            <div
              className="embla__container flex gap-3"
            >
              {loading
                ? Array(perPage)
                    .fill(null)
                    .map((_, i) => (
                      <div
                        className="embla__slide flex-shrink-0 basis-[calc(100%/2)] md:basis-[calc(100%/3)] lg:basis-[calc(100%/5)]"
                        key={i}
                      >
                        <ProductCardSkeleton />
                      </div>
                    ))
                : data.map((product, index) => (
                    <div
                      className=" flex-shrink-0 basis-[calc(100%/2)] md:basis-[calc(100%/3)] lg:basis-[calc(100%/6)]"
                      key={index}
                    >
                      <NewArrivalCard data={product} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NewArrivalSection;
