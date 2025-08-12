'use server'
import {
  UpdateAvatarPayload,
  UpdateProfilePayload,
  UserData,
} from '@/types/auth.type'
import customFetchWithToken from './customFetchWithToken'
import { CouponData } from '@/types/coupon.type'
import { revalidateTag } from 'next/cache'

export const getUserProfile = async () => {
  return await customFetchWithToken<UserData>(`/users/profile`, {
    method: 'GET',
    next: {
      revalidate: 3600,
    },
  })
}

export async function getUserSavedCoupons() {
  return await customFetchWithToken<CouponData[]>(`/users/my-coupons`, {
    method: 'GET',
    next: {
      tags: ['my-coupons'],
    },
  })
}
export async function saveCoupon(couponId: number) {
  const res = await customFetchWithToken<CouponData[]>(`/users/my-coupons`, {
    method: 'POST',
    body: JSON.stringify({
      coupon_id: couponId,
    }),
  })
  if (res.success) {
    revalidateTag('my-coupons')
  }
  return res
}

export async function updateProfile(params: UpdateProfilePayload) {
  const res = await customFetchWithToken<UpdateProfilePayload>(
    `/users/profile`,
    {
      method: 'PUT',
      body: JSON.stringify({
        first_name: params.first_name,
        last_name: params.last_name,
        youtube: params.youtube,
        linkedin: params.linkedin,
        facebook: params.facebook,
        instagram: params.instagram,
        description: params.description,
        image: params.image,
        // avatar: {
        //   url: params.avatar?.url,
        //   public_id: params.avatar?.public_id,
        //   file_name: params.avatar?.file_name,
        //   caption: params.avatar?.caption,
        // },
      }),
    },
  )
  return res
}

export async function updateAvatar(params: UpdateAvatarPayload) {
  const res = await customFetchWithToken<UpdateAvatarPayload>(
    `/users/profile`,
    {
      method: 'PUT',
      body: JSON.stringify({
        avatar: {
          url: params?.url,
          public_id: params?.public_id,
          file_name: params?.file_name,
          caption: params.caption,
        },
      }),
    },
  )
  return res
}
