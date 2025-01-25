"use client";

import { useEffect, useState } from "react";
import NewArrivalCardSkeleton from "../NewArrivalSection/NewArrivalCardSkeleton";

const TimeoutComponent = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 4000); // Show message after 5 seconds

    return () => clearTimeout(timeout); // Clean up the timeout
  }, []);

  if (!showMessage) {
    return (
      //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      Array.from({ length: 9 }).map((_, index) => (
        <NewArrivalCardSkeleton key={index} />
      ))
      //   </div>
    );
  }

  return (
    <p className="text-center col-span-full">
      No products available in this category.
    </p>
  );
};

export default TimeoutComponent;
