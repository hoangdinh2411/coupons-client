import { UserData } from './auth.type'
import { BlogData } from './blog.type'
import { BaseData } from './share.type'

export interface CommentPayload {
  content: string
  blog_id?: number
  comment_id?: number
}
export interface CommentData extends BaseData {
  content: string
  blog: BlogData
  user: UserData
}
