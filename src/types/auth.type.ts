import { ROLES, VerifyCodeType } from './enum'

export interface SignInPayload {
  email: string
  password: string
}
export interface SignUpPayload extends SignInPayload {
  confirm_password: string
  first_name?: string
  last_name?: string
}

export interface UserData extends SignUpPayload {
  email_verified: boolean
  role: ROLES
  token?: string
}
export interface VerifyRequestPayload {
  email: string
  code: number
  type: VerifyCodeType
}

export interface UserRequestPayload {
  first_name: string
  last_name: string
}

export interface VerifyCodeData {
  type: VerifyCodeType
  token?: string
}
