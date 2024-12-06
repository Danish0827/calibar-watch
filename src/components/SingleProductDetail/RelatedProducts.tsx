import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import NewArrivalCard from "../NewArrivalSection/NewArrivalCard";
import { usePrevNextButtons } from "../emblaButtons/EmblaCarousalArrowButtons";
import "./singleProduct.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const RelatedProducts = () => {
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": {
        slidesToScroll: 2,
      },
      "(min-width: 1280px)": {
        slidesToScroll: 2,
      },
    },
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;
    console.log("Embla initialized!", emblaApi);
    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  return (
    <div className="mt-9">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:bg-gradient-to-r from-gray-500 to-black after:w-1/2 after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg">
          Related Products
        </h3>
        <div className="flex gap-4 justify-center items-center">
          <div
            onClick={onPrevButtonClick}
            className={`bg-gray-100 w-[48px] h-[48px] flex justify-center items-center rounded-full shadow-md cursor-pointer ${
              prevBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <GoArrowLeft size={22} />
          </div>
          <div
            onClick={onNextButtonClick}
            className={`bg-gray-100 w-[48px] h-[48px] flex justify-center items-center rounded-full shadow-md cursor-pointer ${
              nextBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <GoArrowRight size={22} />
          </div>
        </div>
      </div>

      <div className="embla-related-product mt-6">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {data &&
              data.map((product, index) => (
                <div className="embla__slide" key={index}>
                  <NewArrivalCard data={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
