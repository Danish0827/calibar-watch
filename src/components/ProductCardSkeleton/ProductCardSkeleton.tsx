import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="space-y-3">
      <div className="aspect-[4/5] bg-black/10 rounded animate-pulse"></div>
      <div className="w-full h-6 rounded bg-black/10 animate-pulse"></div>
    </div>
  );
};

export default ProductCardSkeleton;
