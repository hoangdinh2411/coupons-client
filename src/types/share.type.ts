export interface IResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  status?: number;
}

export interface IResponseWithTotal<T> {
  results: T;
  total: number;
}

export interface TimestampedEntity {
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export interface MetaData {
  title?: string;
  description?: string;
  keywords?: string[];
}
