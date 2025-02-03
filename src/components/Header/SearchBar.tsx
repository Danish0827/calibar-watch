"use client";
import { RootState } from "@/store/store";
import { LoaderCircle, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";

interface Product {
  title: string;
  slug: string;
  brand: string;
  model: string;
  casediameter: string;
  casematerial: string;
  dialcolor: string;
  dialtype: string;
  bezel: string;
  bracelet: string;
  movement: string;
  waterresistance: string;
  featured_media_url: string;
  main_image_primary: string;
  main_image_secondary?: string | null;
}

const SearchBar = ({ hasScrolled }: { hasScrolled: boolean }) => {
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [startSearch, setStartSearch] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const path = usePathname();
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // const products = useSelector(
  //   (state: RootState) => state.productData.products
  // );

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.BACKEND}/wp-json/custom-api/v1/products`
      );
      const result = await response.json();
      // console.log(result, "result");

      if (response.ok) {
        setProducts(result?.products);
        // console.log(result?.products);
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
  }, []);

  // console.log(products, "searchproducts");
  const handleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    setLoading(true);

    if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);

    debounceTimeoutRef.current = setTimeout(() => {
      setSearchValue(value);
      setStartSearch(value.trim().length > 0);

      setLoading(false);
    }, 500);
  };
  const handleClear = () => {
    setSearchValue("");
    setStartSearch(false);
  };

  const filteredProducts = products.filter((product) => {
    const searchTerm = searchValue.toLowerCase();

    // Safely check each property to ensure it exists before calling toLowerCase
    return (
      (product.title && product.title.toLowerCase().includes(searchTerm)) ||
      (product.brand && product.brand.toLowerCase().includes(searchTerm)) ||
      (product.model && product.model.toLowerCase().includes(searchTerm)) ||
      (product.casediameter &&
        product.casediameter.toLowerCase().includes(searchTerm)) ||
      (product.casematerial &&
        product.casematerial.toLowerCase().includes(searchTerm)) ||
      (product.dialcolor &&
        product.dialcolor.toLowerCase().includes(searchTerm)) ||
      (product.dialtype &&
        product.dialtype.toLowerCase().includes(searchTerm)) ||
      (product.bezel && product.bezel.toLowerCase().includes(searchTerm)) ||
      (product.bracelet &&
        product.bracelet.toLowerCase().includes(searchTerm)) ||
      (product.movement &&
        product.movement.toLowerCase().includes(searchTerm)) ||
      (product.waterresistance &&
        product.waterresistance.toLowerCase().includes(searchTerm))
    );
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target as Node)
      ) {
        setShowSearchBox(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   if (showSearchBox) setShowSearchBox(false);
  // }, [path]);
  // useEffect(() => {
  //   // Update body style when showSearchBar changes
  //   if (showSearchBar) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = ""; // Reset to default
  //   }

  //   // Cleanup to ensure no residual styles
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [showSearchBar]);

  return (
    <>
      <li
        onClick={handleSearchBar}
        className={`${
          showSearchBar && "bg-bgMain4 border-b-2 border-bgMain4"
        } list-none group cursor-pointer hover:border-b-2 border-bgMain4 hover:bg-bgMain4 p-6 transition-transform ease-in text-bgMain4 hover:text-white `}
      >
        <Link
          href=""
          className="text-bgMain4 hover:text-gray-600 py-2.5 hover:pl-0.5 transition-all ease-linear"
        >
          <Search
            size={20}
            strokeWidth={1.5}
            className={`text-templateText group-hover:text-white ${
              showSearchBar && "text-white"
            }`}
          />
        </Link>
      </li>
      {showSearchBar && (
        <>
          <div className="bg-bgMain4 absolute w-full top-[69px] left-0 py-8 ">
            <div className="flex items-center gap-3 justify-center w-2/3 m-auto p-4 bg-[#ffffff7b] rounded-full">
              <input
                onClick={() => setShowSearchBox(true)}
                onChange={handleInputChange}
                className={`placeholder:text-white bg-transparent outline-none ml-2 w-full ${
                  hasScrolled ? "text-white" : "text-white"
                }`}
                type="text"
                value={searchValue}
                placeholder="Search Products..."
              />
              <IoCloseCircleOutline
                onClick={handleClear}
                className="text-white text-3xl cursor-pointer"
              />
              <BiSearch className="text-white text-3xl cursor-pointer" />
            </div>
          </div>

          <div
            ref={searchBoxRef}
            className={`bg- w-full flex items-center rounded-full shadow-md transition-shadow duration-300 hover:shadow-xl ${
              hasScrolled ? "border-black" : "border-white"
            } `}
          >
            <div
              className={`absolute right-11 z-50 top-[250%] left-0 w-full h-[80vh] rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex items-center justify-center bg-[#fff] transition-all duration-300 transform ${
                showSearchBox
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
            >
              {loading ? (
                <div className="flex gap-2">
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
                  setShowSearchBar={setShowSearchBar}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SearchBar;
