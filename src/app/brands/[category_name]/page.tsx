import ProductCardSkeleton from "@/components/ProductCardSkeleton/ProductCardSkeleton";
import SingleCategoryProductData from "@/components/SingleCategoryProductData/SingleCategoryProductData";
import React from "react";

export interface ProductDataByCategory {
  id?: number;
  title: string;
  slug?: string;
  featured_media_url?: string;
  product_title?: string;
  main_image_primary?: string;
  main_image_secondary?: string;
}

export async function fetchCategoryData(
  category_name: string
): Promise<ProductDataByCategory[]> {
  try {
    const response = await fetch(
      `${process.env.BACKEND}/wp-json/getBrandBySlug/${category_name}`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error("Error fetching product data");
    }

    const data = await response.json();

    return data.related_posts || [];
  } catch (error) {
    console.error("Error fetching category data:", error);
    return [];
  }
}

interface PageProps {
  params: {
    category_name: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { category_name } = params;

  const products = await fetchCategoryData(category_name);

  if (products.length === 0) {
    return <ProductCardSkeleton />;
  }

  return <SingleCategoryProductData productDataByCategory={products} />;
};

export default Page;
