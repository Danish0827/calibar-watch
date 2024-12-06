import React from "react";
import BreadCrumb from "../BreadCrumbSaif/BreadCrumb";
import NewArrivalCard from "../NewArrivalSection/NewArrivalCard";
import Wrapper from "../Wrapper/Wrapper";

export interface ProductDataByCategory {
  id?: number;
  title: string;
  slug?: string;
  featured_media_url?: string;
  product_title?: string;
  main_image_primary: string;
  main_image_secondary: string;
}

interface SingleCategoryProductDataProps {
  productDataByCategory: ProductDataByCategory[];
}

const SingleCategoryProductData: React.FC<SingleCategoryProductDataProps> = ({
  productDataByCategory,
}) => {
  return (
    <div>
      <BreadCrumb
        title="Category"
        page="category"
        image1="/images/slide1.webp"
      />

      <Wrapper className="py-12">
        <div className="flex justify-center items-center ">
          <h3 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:mx-auto after:bg-gradient-to-r from-gray-500 to-black after:w-[70%] after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg">
            Our Category's Product
          </h3>
        </div>

        <div className="mt-8 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productDataByCategory.length > 0 ? (
            productDataByCategory.map((product, index) => (
              <NewArrivalCard key={product.id || index} data={product} />
            ))
          ) : (
            <p className="text-center col-span-full">
              No products available in this category.
            </p>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default SingleCategoryProductData;
