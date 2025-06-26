"use server";
import { cookies } from "next/headers";
import customFetch from "./customFetch";
import { IResponse } from "@/models/request.type";

export default async function customFetchWithToken<T>(
  url: string,
  config: RequestInit = {}
): Promise<IResponse<T>> {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (token) {
    config.headers = {
      ["Cookie"]: `token=${token}`,
    };
  }
  return await customFetch(url, config);
}
