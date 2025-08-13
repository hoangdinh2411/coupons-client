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
  youtube: string
  linkedin: string
  facebook: string
  instagram: string
  description: string
  avatar: ImageType
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
