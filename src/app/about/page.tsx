import AboutUsPage from "@/components/AboutUsPage/AboutUsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Caliber Star About Page",
  description:
    "Explore our premium collection of luxury watches, designed for precision, style, and elegance.",
};

const page = () => {
  return (
    <>
      <AboutUsPage />
    </>
  );
};

export default page;
