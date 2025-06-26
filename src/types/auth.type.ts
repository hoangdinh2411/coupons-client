import { ROLES } from './enum/enum'

export interface LoginRequestPayload {
  email: string
  password: string
}
export interface RegisterRequestPayLoad extends LoginRequestPayload {
  confirm_password: string
  first_name?: string
  last_name?: string
}

export interface UserData extends RegisterRequestPayLoad {
  email_verified: boolean
  role: ROLES
  token?: string
}
export interface VerifyRequestPayload {
  email: string
  code: number
}
