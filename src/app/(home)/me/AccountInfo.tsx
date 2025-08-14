import { formatDisplayName } from '@/helpers/format'
import { UserData } from '@/types/auth.type'
import Image from 'next/image'
import React from 'react'

const AccountInfo = ({ profile }: { profile: UserData }) => {
  return (
    <div className="bg-light-green/40 my-4 w-full rounded-lg p-6 text-white shadow-[0px_5px_10px_-7px_rgba(50,50,50,0.6)]">
      <div className="box-border flex flex-wrap items-center">
        <div className="flex w-full justify-between">
          <span className="relative mr-3.5 h-[72px] w-[72px] overflow-hidden rounded-full align-middle">
            <Image
              src={profile?.avatar?.url || '/images/no-img.webp'}
              alt={profile.email}
              fill
              priority
              sizes="72px"
            />
          </span>
          <div className="inline-block w-[calc(100%-90px)]">
            <p className="text-olive-green m-[8px_0px_4px] overflow-hidden text-2xl font-bold text-ellipsis whitespace-nowrap">
              Hello,{' '}
              <span className="capitalize">{formatDisplayName(profile)}</span>
            </p>

            <p className="text-olive-green m-0 w-full overflow-hidden text-[0.85em] leading-[1.29] font-bold tracking-normal text-ellipsis whitespace-nowrap not-italic font-stretch-normal">
              {profile.email}
            </p>
          </div>
        </div>

        {/* <div className="max-w-[20%] flex-[0_0_20%]">
          <p className="m-0 w-full overflow-hidden text-[0.85em] leading-[1.29] font-bold tracking-normal text-ellipsis whitespace-nowrap text-white not-italic font-stretch-normal">
            Approved Rewards
          </p>
          <p className="m-0 w-full overflow-hidden text-2xl leading-[1.33] font-bold tracking-normal text-ellipsis whitespace-nowrap text-white not-italic font-stretch-normal">
            $0.00
          </p>
        </div>

        <div className="max-w-[20%] flex-[0_0_20%]">
          <p className="m-0 w-full overflow-hidden text-[0.85em] leading-[1.29] font-bold tracking-normal text-ellipsis whitespace-nowrap text-white not-italic font-stretch-normal">
            Lifetime Savings
          </p>
          <p className="m-0 w-full overflow-hidden text-2xl leading-[1.33] font-bold tracking-normal text-ellipsis whitespace-nowrap text-white not-italic font-stretch-normal">
            $0.00
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default AccountInfo
