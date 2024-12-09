"use client";
import { RootState } from "@/store/store";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";
import { ArrowLeft, LoaderCircle, Search } from "lucide-react";
import { IoSearchOutline } from "react-icons/io5";

const MobileSearch = ({ hasScrolled }: { hasScrolled: boolean }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [startSearch, setStartSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(false);
  const products = useSelector(
    (state: RootState) => state.productData.products
  );

  useEffect(() => {
    if (showMobileSearch) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMobileSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLoading(true);

    if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);

    debounceTimeoutRef.current = setTimeout(() => {
      setSearchValue(value);
      setStartSearch(value.trim().length > 0);

      setLoading(false);
    }, 500);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="lg:ml-8">
        <IoSearchOutline
          onClick={() => setShowMobileSearch(true)}
          className={
            hasScrolled ? "text-gray-600 cursor-pointer" : "text-white"
          }
          strokeWidth={2}
          size={20}
        />
      </div>

      {showMobileSearch && (
        <div className={`fixed top-0 left-0 z-50 h-screen w-full bg-white`}>
          <div className="flex items-center gap-3 bg-white p-4 ">
            <ArrowLeft
              onClick={() => setShowMobileSearch(false)}
              size={24}
              className="text-templatePrimary cursor-pointer"
              strokeWidth={2}
            />
            <div className="flex items-center gap-2 border border-gray-200 w-full p-2 rounded-full shadow-md transition-shadow duration-300 ">
              <Search
                size={20}
                strokeWidth={1.5}
                className="text-templateText"
              />
              <input
                type="text"
                onChange={handleInputChange}
                className="text-xs w-full bg-white text-templateText focus:outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-500"></div>

          {loading ? (
            <div className="flex items-center justify-center gap-2 py-10 lg:py-0 w-full">
              <LoaderCircle
                size={18}
                strokeWidth={1.5}
                className="text-templatePrimary animate-spin"
              />
              <h2 className="text-sm tracking-wider font-medium text-templatePrimary">
                Searching...
              </h2>
            </div>
          ) : (
            <SearchResult
              searchValue={searchValue}
              products={filteredProducts}
              startSearch={startSearch}
            />
          )}
          {/* ------------- */}
        </div>
      )}
    </>
  );
};

export default MobileSearch;
