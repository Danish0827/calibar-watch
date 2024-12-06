"use client";
import React, { useEffect } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../emblaButtons/EmblaCarousalArrowButtons";
import {
  DotButton,
  useDotButton,
} from "../emblaButtons/EmblaCarousalDotButton";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/images/slide1.webp",
  "/images/slide2.webp",
  "/images/slide3.webp",
  "/images/slide1.webp",
  "/images/slide2.webp",
  "/images/slide3.webp",
];

const HomeBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={src}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-black opacity-10 z-10" /> */}

      <div className="hidden absolute left-1/2 bottom-0 transform -translate-x-1/2 mb-6 md:flex items-center gap-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-4 h-4 rounded-full ${
              index === selectedIndex
                ? "bg-white border border-black"
                : "bg-black opacity-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
