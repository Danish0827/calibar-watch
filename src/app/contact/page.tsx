import ContactPage from "@/components/ContactPage/ContactPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Caliber Star Contact Page",
  description:
    "Explore our premium collection of luxury watches, designed for precision, style, and elegance.",
};

const page = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default page;
