import { StoreData } from "@/models/store.type";
import customFetch from "./customFetch";
import { IResponseWithTotal } from "@/models/request.type";

export const getAllStores = async (limit?: number, page?: number) => {
  return await customFetch<IResponseWithTotal<StoreData[]>>(
    `/stores?limit=${limit}&page=${page}`
  );
};

export const getStoreBySlug = async (slug: string) => {
  return await customFetch<StoreData>(`/stores/${slug}`, {
    next: {
      tags: [slug],
      revalidate: 3600,
    },
  });
};
