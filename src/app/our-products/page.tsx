import AllProducts from "@/components/AllProducts/AllProducts";
import BreadCrumb from "@/components/BreadCrumbSaif/BreadCrumb";
import React from "react";
const Ourproductpage = () => {
  return (
    <>
      <BreadCrumb
        title="Our Products"
        page="Our Products"
        image1="/images/slide3.webp"
      />

      <AllProducts />
    </>
  );
};

export default Ourproductpage;
