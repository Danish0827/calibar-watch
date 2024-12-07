'use client'
import { RootState } from "@/store/store";
import { LoaderCircle, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";

const SearchBar = ({ hasScrolled }: { hasScrolled: boolean }) => {
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [startSearch, setStartSearch] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const path = usePathname();
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const products = useSelector(
    (state: RootState) => state.productData.products
  );

  // console.log(products, "searchproducts");
  const handleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

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
  const handleClear = () => {
    // setSearchValue('')
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

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

  useEffect(() => {
    if (showSearchBox) setShowSearchBox(false);
  }, [path]);

  return (
    // <div
    //   ref={searchBoxRef}
    //   className={`bg-bgMain max-w-[250px] px-3 py-2 flex items-center rounded-full shadow-md transition-shadow duration-300 hover:shadow-xl ${
    //     hasScrolled ? "border-black" : "border-white"
    //   } `}
    // >
    //   <BiSearch className="text-gray-600" />
    //   <input
    //     onClick={() => setShowSearchBox(true)}
    //     onChange={handleInputChange}
    //     className={`placeholder:text-gray-400 bg-transparent outline-none ml-2 w-full ${
    //       hasScrolled ? "text-black" : "text-white"
    //     }`}
    //     type="text"
    //     placeholder="Search Products..."
    //   />

    //   <div
    //     className={`absolute right-11 z-50 top-[105%] min-w-[750px] max-w-[650px] min-h-40 rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex items-center justify-center bg-[#fff] transition-all duration-300 transform ${
    //       showSearchBox
    //         ? "opacity-100 translate-y-0"
    //         : "opacity-0 -translate-y-5 pointer-events-none"
    //     }`}
    //   >
    //     {loading ? (
    //       <div className="flex items-center gap-2">
    //         <LoaderCircle
    //           size={18}
    //           strokeWidth={1.5}
    //           className="text-templatePrimary animate-spin"
    //         />
    //         <h2 className="text-sm tracking-wider font-medium text-templatePrimary">
    //           Searching...
    //         </h2>
    //       </div>
    //     ) : (
    //       <SearchResult
    //         searchValue={searchValue}
    //         products={filteredProducts}
    //         startSearch={startSearch}
    //       />
    //     )}
    //   </div>
    // </div>
    <>
      <li
        onClick={handleSearchBar}
        className={`${showSearchBar && 'bg-bgMain4 border-b-2 border-bgMain3'} list-none group cursor-pointer hover:border-b-2 border-bgMain3 hover:bg-bgMain4 p-6 transition-transform ease-in text-bgMain4 hover:text-white `}
      >
        <Link
          href=""
          className="text-black hover:text-gray-600 py-2.5 hover:pl-0.5 transition-all ease-linear"
        >
          <Search
            size={20}
            strokeWidth={1.5}
            className={`text-templateText group-hover:text-white ${showSearchBar && 'text-white'}`}
          />
        </Link>
      </li>
      {showSearchBar && (
        <div className="bg-bgMain4 absolute w-full left-0 py-8">
          <div className="flex items-center gap-3 justify-center w-2/3 m-auto p-4 bg-[#ffffff7b] rounded-full">
            <input
              onClick={() => setShowSearchBox(true)}
              onChange={handleInputChange}
              className={`placeholder:text-white bg-transparent outline-none ml-2 w-full ${
                hasScrolled ? "text-white" : "text-white"
              }`}
              type="text"
              placeholder="Search Products..."
            />
            <IoCloseCircleOutline
              onClick={handleClear}
              className="text-white text-3xl cursor-pointer"
            />
            <BiSearch className="text-white text-3xl cursor-pointer" />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
