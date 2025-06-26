import { CategoryData } from "@/models/category.type";
import customFetch from "./customFetch";
import { IResponseWithTotal } from "@/models/request.type";

export const getAllCategories = async (limit?: number, page?: number) => {
  return await customFetch<IResponseWithTotal<CategoryData[]>>(
    `/categories?limit=${limit}&page=${page}`,
    {
      next: {
        revalidate: 3600, // re-validate data after 1 hour
      },
    }
  );
};
