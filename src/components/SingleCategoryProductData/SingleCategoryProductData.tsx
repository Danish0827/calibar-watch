import React from "react";
import BreadCrumb from "../BreadCrumbSaif/BreadCrumb";
import NewArrivalCard from "../NewArrivalSection/NewArrivalCard";
import Wrapper from "../Wrapper/Wrapper";

export interface ProductDataByCategory {
  id?: number;
  title: string;
  slug?: string;
  model?:string;
  casematerial?:any;
  featured_media_url?: any;
  product_title?: string;
  main_image_primary: string;
  main_image_secondary: string;
}

interface SingleCategoryProductDataProps {
  productDataByCategory: ProductDataByCategory[];
  params: string; // category name or slug
}

const SingleCategoryProductData: React.FC<SingleCategoryProductDataProps> = ({
  productDataByCategory,
  params,
}) => {
  console.log(productDataByCategory, params, "productDataByCategory dansih");

  return (
    <div>
      <BreadCrumb
        title="Category"
        page="category"
        image1="/images/breadImage.jpg"
      />

      <Wrapper className="py-12">
        <div className="flex justify-center items-center pb-5 md:pb-10">
          <h3 className="text-bgMain4 md:text-4xl capitalize font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:mx-auto after:bg-gradient-to-r from-gray-500 to-black after:w-[70%] after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full rounded-lg">
             {params.replace('-', ' ')} watches
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
