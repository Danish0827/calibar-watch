"use client";
import React, { useEffect, useState } from "react";
import NewArrivalCard from "../NewArrivalSection/NewArrivalCard";
import Wrapper from "../Wrapper/Wrapper";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";

const AllProducts = () => {
  const [data, setData] = useState<any[]>([]);
  const [pagination, setPagination] = useState<{
    totalProducts: number;
    totalPages: number;
    currentPage: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;

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
    // window.scrollTo({ top: 0, behavior: "smooth" });
    fetchAllProducts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * perPage + 1;
  const endIndex = Math.min(
    currentPage * perPage,
    pagination?.totalProducts || 0
  );

  return (
    <Wrapper className="md:my-16 my-10">
      <div className="flex justify-center items-center ">
        <h3 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:mx-auto after:bg-gradient-to-r from-gray-500 to-black after:w-[70%] after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg">
          Our Products
        </h3>
      </div>

      <div className="flex gap-0.5 items-center justify-between pt-0 pb-4 mt-7">
        <p className="text-sm font-medium tracking-wider">
          Showing{" "}
          <span className="text-templateOrange font-bold">
            {startIndex}-{endIndex}
          </span>{" "}
          of{" "}
          <span className="text-templateOrange font-bold">
            {pagination?.totalProducts || 0}
          </span>{" "}
          Products
        </p>
        <div></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-4 gap-y-10">
        {loading ? (
          <>
            {Array(perPage)
              .fill(null)
              .map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
          </>
        ) : (
          data.map((product, index) => (
            <NewArrivalCard key={index} data={product} />
          ))
        )}
      </div>

      {pagination && (
        <div className="flex justify-center items-center mt-6 gap-8">
          <button
            className={`text-black flex items-center ${
              pagination.currentPage === 1
                ? "text-gray-700 cursor-not-allowed"
                : ""
            }`}
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="space-x-4">
            {Array.from({ length: pagination.totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`${
                  currentPage === i + 1
                    ? "text-black font-bold border border-black h-8 w-8 rounded-md"
                    : "text-white"
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            className={`text-bgMain4 bg-transparent flex items-center rounded-full ${
              pagination.currentPage === pagination.totalPages
                ? "text-gray-700 cursor-not-allowed"
                : ""
            }`}
            onClick={() => handlePageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default AllProducts;
