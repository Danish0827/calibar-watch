"use client";
import React, { useEffect } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { usePrevNextButtons } from "../emblaButtons/EmblaCarousalArrowButtons";
import { useDotButton } from "../emblaButtons/EmblaCarousalDotButton";
import useEmblaCarousel from "embla-carousel-react";

export const images = [
  "/images/trending1.webp",
  "/images/trending2.webp",
  "/images/trending3.webp",
  "/images/trending4.webp",
  "/images/trending1.webp",
  "/images/trending2.webp",
  "/images/trending3.webp",
  "/images/trending4.webp",
];

const TrendingNowSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi);

  // useEffect(() => {
  //   if (!emblaApi) return;

  //   const autoScroll = setInterval(() => {
  //     emblaApi.scrollNext();
  //   }, 3000);

  //   return () => clearInterval(autoScroll);
  // }, [emblaApi]);

  return (
    <div className="bg-white mt-9 mb-14  md:px-4">
      <Wrapper>
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:bg-gradient-to-r from-gray-500 to-black after:w-1/2 after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg">
              Trending Now
            </h3>

            <div className="flex gap-4 justify-center items-center">
              <div className="bg-gray-100 w-[48px] h-[48px] flex justify-center items-center rounded-full shadow-md cursor-pointer">
                <GoArrowLeft size={22} onClick={onPrevButtonClick} />
              </div>
              <div className="bg-gray-100 w-[48px] h-[48px] flex justify-center items-center rounded-full shadow-md cursor-pointer">
                <GoArrowRight size={22} onClick={onNextButtonClick} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="embla-trending relative">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {images.map((src, index) => (
                  <div
                    className="embla__slide-trending  flex-shrink-0 "
                    key={index}
                  >
                    <div className="md:w-[460px] w-full relative">
                      <Image
                        src={src}
                        width={500}
                        height={400}
                        alt={`Trending ${index + 1}`}
                      />
                      <div className="mt-4 text-base">
                        <h4 className="md:text-start text-center">
                          Philipp Plein - The $kull
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TrendingNowSection;
