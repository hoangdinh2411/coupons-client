export interface CategoryPayload {
  name: string;
  image_bytes: string;
}

export interface CategoryData extends CategoryPayload {
  id: number;
  slug: string;
}
