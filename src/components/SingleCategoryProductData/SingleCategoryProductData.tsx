"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../BreadCrumbSaif/BreadCrumb";
import NewArrivalCard from "../NewArrivalSection/NewArrivalCard";
import Wrapper from "../Wrapper/Wrapper";
import { fetchCategoryData } from "@/utils/fetchCategoryData";
import NewArrivalCardSkeleton from "../NewArrivalSection/NewArrivalCardSkeleton";
import { fetchBrandsData } from "@/utils/ApiUtils";
import TimeoutComponent from "./TimeoutComponent";
import { GiBottomRight3dArrow, GiFastArrow } from "react-icons/gi";

interface SingleCategoryProductDataProps {
  params: string; // category name or slug
}

const SingleCategoryProductData: React.FC<SingleCategoryProductDataProps> = ({
  params,
}) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState<any>([]);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 9; // Define items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { brands } = await fetchBrandsData(1);
        setBrands(brands);
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const newProducts: any = await fetchCategoryData(
        params,
        currentPage,
        itemsPerPage
      );
      setProducts(newProducts?.products || []);
      setTotalPages(newProducts?.pagination?.total_pages || 1);
      setLoading(false);
    };

    loadProducts();
  }, [currentPage, params]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageDisplay = 5; // Adjust for how many page numbers to display at once
    const startPage = Math.max(1, currentPage - Math.floor(maxPageDisplay / 2));
    const endPage = Math.min(totalPages, startPage + maxPageDisplay - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-full ${
            i === currentPage
              ? "bg-bgMain4 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          } rounded`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <BreadCrumb
        title={brands?.find((brand: any) => brand.slug === params)?.name || ""}
        page={brands?.find((brand: any) => brand.slug === params)?.slug || ""}
        image1={
          brands?.find((brand: any) => brand.slug === params)?.meta?.[
            "bread-crump"
          ] || ""
        }
      />

      <Wrapper className="py-12">
        <div className="flex justify-center items-center pb-5 md:pb-10">
          <h3 className="text-bgMain4 md:text-4xl capitalize font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:mx-auto after:bg-gradient-to-r from-gray-500 to-black after:w-[70%] after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg">
            {params.replace("-", " ")} watches
          </h3>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <NewArrivalCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length > 0 ? (
              products.map((product: any, index: any) => (
                <NewArrivalCard key={product.id || index} data={product} />
              ))
            ) : (
              <TimeoutComponent />
            )}
          </div>
        )}

        {/* Pagination Bar */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:bg-gray-200"
          >
            <GiBottomRight3dArrow className="rotate-[135deg]" />
          </button>

          {renderPageNumbers()}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:bg-gray-200"
          >
            <GiBottomRight3dArrow className="-rotate-45" />
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default SingleCategoryProductData;
