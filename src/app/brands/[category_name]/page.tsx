import SingleCategoryProductData from "@/components/SingleCategoryProductData/SingleCategoryProductData";
import React from "react";

export interface ProductDataByCategory {
  id?: number;
  title: string;
  slug?: string;
  featured_media_url?: string;
  product_title?: string;
  main_image_secondary?: string;
}

interface PageProps {
  params: Promise<{ category_name: string }>;
}

const Page = async ({ params }: PageProps) => {
  // Await params to unwrap the Promise
  const { category_name } = await params;

  return <SingleCategoryProductData params={category_name} />;
};

export default Page;
