"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarousalThumbsButton";

type Gallery = {
  src: string;
  alt: string;
};

type PropType = {
  options?: EmblaOptionsType;
  gallery: Gallery[];
  variationImage: string | undefined;
};

const EmblaThumbnail: React.FC<PropType> = (props) => {
  const { options, gallery, variationImage } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla-single-product">
      {/* Main Image Viewport */}
      <div
        className="embla__viewport"
        ref={emblaMainRef}
        // style={{
        //   backgroundImage: `url("${variationImage}")`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="embla__container">
          {gallery.map((item, index) => (
            <div key={index} className="embla__slide">
              <img
                alt={item.alt}
                src={item.src}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {gallery.map((item, index) => (
              <Thumb
                key={index}
                data={item.src}
                selected={index === selectedIndex}
                index={index}
                onClick={() => onThumbClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaThumbnail;
