export interface BrandData {
  id: number;
  name: string;
  description: string;
  slug: string;
  meta: any;
}

export interface BrandsPropsDataResponse {
  brands: BrandData[];
  error?: string;
  currentPage: number;
  totalPages: number;
}

export async function fetchBrandsData(
  page: number = 1
): Promise<BrandsPropsDataResponse> {
  const brands: BrandData[] = [];
  const perPage = 100;

  try {
    const response = await fetch(
      `${process.env.BACKEND}/wp-json/wp/v2/brands?_fields=id,count,description,name,slug,meta&per_page=${perPage}&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Error fetching brands data");
    }

    const data = await response.json();

    if (data.length === 0) {
      return { brands: [], currentPage: page, totalPages: page };
    }

    brands.push(...data);

    const totalPages = Math.ceil(
      parseInt(response.headers.get("X-WP-Total") || "0") / perPage
    );

    return {
      brands,
      currentPage: page,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching brands:", error);
    return {
      brands: [],
      currentPage: page,
      totalPages: 1,
      error: "An unknown error occurred",
    };
  }
}
