import { ImageType } from '@/shared/layouts-components/uploadFile/UploadFile';
import { MetaData, TimestampedEntity } from './share.type';
import { TopicData } from './topic.type';

export interface BlogPayload {
  title?: string;
  content?: string;
  keywords?: string[];
  topic_id?: number;
  rating?: number;
  images?: ImageType;
  meta_data?: MetaData;
}
export interface BlogData extends TimestampedEntity {
  title: string;
  content: string;
  keywords: string[];
  topic_id: number;
  id: number;
  slug: string;
  topic?: TopicData;
  meta_data?: MetaData;
  rating: number;
  image: ImageType;
  is_published: boolean;
  is_indexed: boolean;
}
