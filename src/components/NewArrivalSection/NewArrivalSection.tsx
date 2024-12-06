"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import NewArrivalCard from "./NewArrivalCard";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";
import { useDispatch } from "react-redux";
import { setProducts } from "@/store/slice/productSlice";

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
    // window.scrollTo({ top: 0, behavior: "smooth" });
    fetchAllProducts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="bg-white mt-12 mb-8 md:px-4">
      <Wrapper>
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:bg-gradient-to-r from-gray-500 to-black after:w-1/2 after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg mb-2">
              New Arrivals
            </h3>

            {/* <div className="flex gap-4 justify-center items-center">
              <div className="bg-gray-100 w-[48px] h-[48px] flex justify-center items-center rounded-full shadow-md cursor-pointer">
                <GoArrowLeft size={22} />
              </div>
              <div className="bg-gray-100 w-[48px] h-[48px] flex justify-center items-center rounded-full shadow-md cursor-pointer">
                <GoArrowRight size={22} />
              </div>
            </div> */}
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-4 gap-y-10">
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
        </div>
      </Wrapper>
    </div>
  );
};

export default NewArrivalSection;
