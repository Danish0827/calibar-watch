"use client";
import React from "react";

const NewArrivalCardSkeleton: React.FC = () => {
  return (
    <div className="relative flex items-center p-4 bg-gray-100 shadow-md rounded-lg cursor-pointer">
      {/* Skeleton for Product Details */}
      <div className="ml-4 text-left w-2/3 space-y-2">
        <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-3 w-1/2 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-3 w-1/3 bg-gray-300 rounded animate-pulse mt-2"></div>
      </div>

      {/* Skeleton for Product Image */}
      <div className="overflow-hidden">
        <div className="w-[250px] h-[250px] bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default NewArrivalCardSkeleton;
