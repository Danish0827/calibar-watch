import React from "react";

const BrandCardSkeleton = () => {
  return (
    <div className="md:min-w-[180px] md:w-full md:h-[180px] min-w-[140px] h-[140px] space-y-3 grid grid-cols-7">
      {/* Skeleton for the image */}
      <div className="aspect-[4/5] bg-gray-300 rounded animate-pulse"></div>

      {/* Skeleton for the brand name */}
      <div className="w-full h-6 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
};

export default BrandCardSkeleton;
