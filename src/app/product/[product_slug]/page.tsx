import SingleProductDetail2 from "@/components/SingleProductDetail/SingleProductDetail2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caliber Star Watches Products",
  description:
    "Explore our premium collection of luxury watches, designed for precision, style, and elegance.",
};

export interface ProductData {
  product_title?: string;
  product_small_description?: string;
  product_big_description?: string;
  gallery_images?: string[];
  shipping_and_return?: string;
  brand?: string;
  model?: string;
  case_diameter?: string;
  case_material?: string;
  dial_color?: string;
  dial_type?: string;
  bezel?: string;
  bracelet?: string;
  movement?: string;
  water_resistance?: string;
  main_image_primary?: string;
  main_image_secondary?: string;
}

interface SlugPropsDataResponse {
  product: ProductData | null;
}

export async function slugPropsData(
  product_slug: string
): Promise<SlugPropsDataResponse> {
  try {
    const response = await fetch(
      `${process.env.BACKEND}/wp-json/getProductBySlug/${product_slug}`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error("Error fetching product data");
    }

    const data = await response.json();

    return { product: data || null };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return { product: null };
  }
}

interface PageProps {
  params: {
    product_slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { product_slug } = params;
  const { product } = await slugPropsData(product_slug);

  if (!product) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return <SingleProductDetail2 productDataBySlug={product} />;
};

export default Page;
