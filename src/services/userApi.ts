import { UserData } from "@/models/auth.type";
import customFetchWithToken from "./customFetchWithToken";

export const getUserProfile = async () => {
  return await customFetchWithToken<UserData>(`/users/profile`, {
    method: "GET",
    next: {
      tags: ["profile"],
      revalidate: 3600,
    },
  });
};
