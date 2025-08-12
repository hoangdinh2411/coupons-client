import { ROLES, VerifyCodeType } from './enum'
import { BaseData, ImageType } from './share.type'

export interface SignInPayload {
  email: string
  password: string
}
export interface SignUpPayload extends SignInPayload {
  confirm_password: string
  first_name?: string
  last_name?: string
}

export interface UserData extends BaseData {
  email_verified: boolean
  role: ROLES
  email: string
  token?: string
  first_name?: string
  last_name?: string
  image: ImageType
  youtube: string
  linkedin: string
  facebook: string
  instagram: string
  description: string
  avatar?: ImageType
}
export interface VerifyRequestPayload {
  email: string
  code: number
  type: VerifyCodeType
}

export interface VerifyCodeData {
  type: VerifyCodeType
  token?: string
}

export interface ResetPasswordPayload {
  confirm_password: string
  password: string
  reset_token?: string
}

export interface UpdateProfilePayload extends UserData {
  avatar: {
    file_name: string
    url: string
    public_id: string
    caption: string
  }
}
export interface UpdateAvatarPayload {
  file_name: string
  url: string
  public_id: string
  caption?: string
}
