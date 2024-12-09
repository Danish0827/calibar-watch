"use client";
import React, { useRef, useState, useEffect } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { fetchBrandsData, BrandData } from "@/utils/ApiUtils"; // Import the API function
import BrandCardSkeleton from "../ProductCardSkeleton/BrandCardSkeleton";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

const OurBrands = () => {
  const [brands, setBrands] = useState<BrandData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps", // Ensures no excessive spacing
  });

  // Function to load brands data
  const loadBrands = async (page: number) => {
    try {
      const { brands, error, totalPages } = await fetchBrandsData(page);

      if (error) {
        setError(error);
      } else {
        setBrands(brands);
        setTotalPages(totalPages);
        setLoading(false);
      }
    } catch (error) {
      setError("Failed to load brands.");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBrands(currentPage);
  }, [currentPage]); // Run the effect when currentPage changes

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -180, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 180, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="flex mx- justify-center w-full h-[200px] items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f1f1f1] pt-10 pb-6 md:px-4">
      <Wrapper>
        <div>
          <div className="flex justify-between items-center">
            {/* <h3 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:bg-gradient-to-r from-gray-500 to-black after:w-1/2 after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg">
              Our Brands
            </h3> */}
            <h3 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:bg-gradient-to-r from-gray-500 to-black after:w-1/2 after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg mb-2">
              Our Brands
            </h3>

            <div className="hidden md:flex gap-4 justify-center items-center">
              <div
                className="bg-gray-100 w-[48px] h-[48px] flex justify-center items-center rounded-full shadow-md cursor-pointer"
                onClick={scrollLeft}
              >
                <GoArrowLeft size={22} />
              </div>
              <div
                className="bg-gray-100 w-[48px] h-[48px] flex justify-center items-center rounded-full shadow-md cursor-pointer"
                onClick={scrollRight}
              >
                <GoArrowRight size={22} />
              </div>
            </div>
          </div>

          <div
            className="mt-8 overflow-x-auto scroll-smooth flex gap-5 scrollbar-hidden"
            ref={scrollRef}
          >
            {brands.map((brand) => (
              <Link href={`/brands/${brand.slug}`} key={brand.id}>
                <div className="md:min-w-[180px] md:w-[180px] md:h-[180px] min-w-[140px] h-[140px] cursor-pointer">
                  <img
                    src={brand.meta?.image || "/images/placeholder.jpg"}
                    alt={brand.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="bg-gray-100 px-4 py-2 rounded-lg"
            >
              Previous
            </button>
          )}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="bg-gray-100 px-4 py-2 rounded-lg ml-4"
            >
              Next
            </button>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default OurBrands;
