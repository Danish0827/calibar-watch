import { fetchBrandsData } from "@/utils/ApiUtils";
import AllBrands from "@/components/AllBrands/AllBrands";
import { BrandData } from "@/utils/ApiUtils";

const Page = async () => {
  const { brands } = await fetchBrandsData(1);

  return (
    <>
      <AllBrands brands={brands} />
    </>
  );
};

export default Page;
