import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  data: string;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick, data } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <div className="aspect-[4/4]">
          <Image
            alt=""
            height={200}
            width={200}
            src={data}
            className="h-full w-full cursor-pointer !object-contain img"
          />
        </div>
      </button>
    </div>
  );
};
