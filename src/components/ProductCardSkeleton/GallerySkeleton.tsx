import React from "react";

const GallerySkeleton: React.FC<{ loading: boolean }> = ({ loading }) => {
  if (loading) {
    return (
      <div className=" w-full md:block hidden space-y-4 space-x-3">
        <div className="grid md:grid-cols-2 gap-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className=" aspect-[4/5] bg-black/10 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default GallerySkeleton;
