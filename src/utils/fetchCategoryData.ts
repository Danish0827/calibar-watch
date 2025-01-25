export interface ProductDataByCategory {
  id?: number;
  title: string;
  slug?: string;
  model?: string;
  casematerial?: any;
  featured_media_url?: any;
  product_title?: string;
  main_image_primary: string;
  main_image_secondary: string;
}

export interface PaginationData {
  current_page: number;
  total_pages: number;
  total_posts: number;
  posts_per_page: number;
  next_page: number;
}

export interface CategoryDataResponse {
  products: ProductDataByCategory[];
  pagination: PaginationData;
}

export async function fetchCategoryData(
  category_name: string,
  page: number = 1,
  per_page: number = 9
): Promise<CategoryDataResponse> {
  try {
    const response = await fetch(
      `${process.env.BACKEND}/wp-json/getBrandBySlug/${category_name}?page=${page}&per_page=${per_page}`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error("Error fetching product data");
    }

    const data = await response.json();

    return {
      products: data.related_posts || [],
      pagination: {
        current_page: data.pagination.current_page || page,
        total_pages: data.pagination.total_pages || 1,
        total_posts: data.pagination.total_posts || 0,
        posts_per_page: data.pagination.posts_per_page || 9,
        next_page: data.pagination.next_page || 0,
      },
    };
  } catch (error) {
    console.error("Error fetching category data:", error);
    return {
      products: [],
      pagination: {
        current_page: page,
        total_pages: 1,
        total_posts: 0,
        posts_per_page: 9,
        next_page: 0,
      },
    };
  }
}
