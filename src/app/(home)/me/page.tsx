import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import AccountInfo from './AccountInfo'
import { getUserProfile } from '@/services/userApi'
import { notFound } from 'next/navigation'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My account',
  openGraph: {
    url: `${METADATA.APP_URL}/${APP_ROUTERS.ACCOUNT}`,
  },
}

const ProfilePage = async () => {
  const res = await getUserProfile()

  if (!res.success || !res.data) {
    notFound()
  }

  return (
    <main className="mx-auto my-4 w-full max-w-[792px] flex-1 lg:p-4">
      <p className="m-0 h-14 text-[40px] font-semibold text-[#323232] font-stretch-normal text-shadow-xs">
        Account
      </p>

      <AccountInfo profile={res.data} />

      <div className="flex flex-wrap items-center gap-4 max-md:flex-col">
        <div className="mb-4 min-h-[160px] w-full max-w-full flex-1 grow basis-0 rounded-lg border border-solid border-[rgb(224,224,224)] bg-white px-3 py-4 shadow-[rgb(226,226,226)_0px_5px_10px_-7px]">
          <div className="mb-4 block h-10">
            <svg
              width="55"
              height="40"
              viewBox="0 0 55 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fillRule="nonzero" fill="none">
                <path
                  d="M35.259 36.417s-12.84 6.052-20.392.947c-7.552-5.105-25.26-23.076.763-30.575 26.023-7.5 41.469 1.131 38.443 9.946-3.026 8.815-11.946 16.393-18.814 19.682z"
                  fill="#F3E8F9"
                />
                <path
                  d="M33.049.421c.079.026-7.052 15.472-7.052 15.472l-2.026.237c-2.29-3.079-1.474-7.394-.474-10.552.184-.579.553-1.236.947-1.842C25.997 1.342 28.681-.132 31.496.08c.684.053 1.237.184 1.553.342z"
                  fill="#741FA2"
                />
                <path
                  d="M35.075 38.653l7.473-15.866s-13.525-2.237-17.42-9.289c-3.157-7.499.843-11.55.843-11.55s-8.157 7.367-5.868 22.55c1.763 11.866 14.972 14.155 14.972 14.155z"
                  fill="#00CDAD"
                />
                <path
                  d="M28.023 21.392c5.026 4.842 6.42 8.183 4.763 11.13-1.658 2.947-5.21 2.921-8.184.764 4.447 4.341 10.473 5.394 10.473 5.394l7.473-15.867s-13.525-2.236-17.42-9.288c-.526-1.29-.868-2.447-1.052-3.526.026-.026-1.684 5.946 3.947 11.393z"
                  fill="#5DE5B4"
                />
                <g fill="#B267D9">
                  <path d="M34.233 13.235c0-.079-.027-.184-.027-.29-.026.106 0 .185.027.29zM34.206 12.946s0 .026 0 0zM40.364 2.631c-.027.027-.027.053-.053.08.026-.027.053-.053.053-.08z" />
                  <g>
                    <path d="M36.101 17.445c.026 0 .053-.026.079-.052-.026 0-.053.026-.079.052zM41.785 13.42h-.027.027z" />
                  </g>
                  <g>
                    <path d="M45.837 14.42h-.08.08z" />
                  </g>
                  <g>
                    <path d="M.79 16.577c.052-.079.078-.21.157-.342a1.408 1.408 0 0 0-.158.342zM15.55 21.024c-.026-.026-.052-.053-.104-.053.052.027.078.053.105.053zM8.894 6.13c-.027.053-.08.132-.106.211l.106-.21zM8.762 6.368h.026zM17.13 16.893c-.027 0-.027 0-.053-.027.026 0 .026 0 .053.027z" />
                    <g>
                      <path d="M10.051 22.892c-.026 0-.026.053-.052.079.026-.026.026-.053.052-.079zM10.683 23.05c0-.026 0 0 0 0z" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <Link
            href={APP_ROUTERS.MY_COUPONS}
            className="flex cursor-pointer items-center text-sm leading-[1.71] font-bold tracking-[0.4px] text-[rgb(116,31,162)] not-italic no-underline"
          >
            My rewards
            <FaChevronRight className="h-3 w-3" />
          </Link>

          <p className="mx-0 my-[5px] text-sm leading-[1.43] text-[rgb(50,50,50)] not-italic">
            Redeem and view your reward activity here.
          </p>
        </div>
        <div className="mb-4 min-h-[160px] w-full max-w-full flex-1 grow basis-0 rounded-lg border border-solid border-[rgb(224,224,224)] bg-white px-3 py-4 shadow-[rgb(226,226,226)_0px_5px_10px_-7px]">
          <div className="mb-4 block h-10">
            <svg
              width="63"
              height="40"
              viewBox="0 0 63 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M29.542 39.582s16.724 2.083 23.813-5.99C60.444 25.52 75.114.03 42.765.927 10.416 1.823-4.658 16.406 1.62 24.855c6.28 8.448 18.952 13.57 27.922 14.727z"
                  fill="#F3EAF9"
                  fillRule="nonzero"
                />
                <path
                  d="M46.671 29.89c0-7.929-6.423-14.323-14.322-14.323-7.9 0-14.323 6.423-14.323 14.322 0 0 0 3.53 4.109 3.53H42.62c4.051 0 4.051-3.53 4.051-3.53M32.32 14.44a7.174 7.174 0 0 1-7.176-7.176A7.174 7.174 0 0 1 32.32.087a7.174 7.174 0 0 1 7.175 7.176 7.174 7.174 0 0 1-7.175 7.175"
                  fill="#741FA2"
                />
                <g fill="#FFF" fillRule="nonzero">
                  <path d="M44.675 18.431c-.03.03-.03.058-.03.058s.03-.029.03-.058zM42.505 21.585c.029.029.057.029.086.029-.029-.029-.057-.029-.086-.029zM42.591 21.614h-.029z" />
                </g>
              </g>
            </svg>
          </div>
          <Link
            href={APP_ROUTERS.PROFILE}
            className="flex cursor-pointer items-center text-sm leading-[1.71] font-bold tracking-[0.4px] text-[rgb(116,31,162)] not-italic no-underline"
          >
            Profile
            <FaChevronRight className="h-3 w-3" />
          </Link>

          <p className="mx-0 my-[5px] text-sm leading-[1.43] text-[rgb(50,50,50)] not-italic">
            Provide and edit personal details for your account.
          </p>
        </div>
        {/* <div className="mb-4 min-h-[160px] w-full max-w-full flex-1 grow basis-0 rounded-lg border border-solid border-[rgb(224,224,224)] bg-white px-3 py-4 shadow-[rgb(226,226,226)_0px_5px_10px_-7px] max-md:mr-4">
          <div className="mb-4 block h-10">
            <svg
              width="66"
              height="40"
              viewBox="0 0 66 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M29.018 37.365s17.044 2.557 24.845-5.135C61.642 24.54 78.38.131 45.057 0 11.734-.131-4.633 13.7 1.289 22.135c5.922 8.435 18.617 13.832 27.73 15.23z"
                  fill="#F3E8F9"
                  fillRule="nonzero"
                />
                <path
                  d="M34.35 6.184a1.552 1.552 0 0 0-1.726 0L15.12 17.94l18.311 10.838a.133.133 0 0 0 .175 0L51.918 17.94 34.35 6.184z"
                  fill="#4A0072"
                  fillRule="nonzero"
                />
                <path
                  d="M48.946 30.7l-30.81.044a.15.15 0 0 1-.153-.152l-.043-19.776a.15.15 0 0 1 .153-.153l30.81-.043a.15.15 0 0 1 .153.153l.043 19.775c.022.087-.065.153-.153.153z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
                <g fillRule="nonzero">
                  <path
                    d="M51.918 17.94L33.607 28.406a.133.133 0 0 1-.175 0L15.121 17.94v20.955h36.797V17.94z"
                    fill="#A751D4"
                  />
                  <path
                    fill="#741FA2"
                    d="M15.143 38.873V17.94l36.775 20.933z"
                  />
                </g>
                <g fill="#B267D9" fillRule="nonzero">
                  <path d="M8.325 10.838h.197a.303.303 0 0 0-.197 0zM8.522 10.816H8.5zM15.82 15.514l-.044-.043.044.043zM13.985 11.625c0 .022 0 .022.022.043-.022-.021-.022-.043-.022-.043z" />
                  <g>
                    <path d="M55.13 11.34a.349.349 0 0 0-.065-.174c.022.044.043.11.065.175zM50.673 12.346c0 .022.022.022.022.044-.022-.022-.022-.022-.022-.044z" />
                    <g>
                      <path d="M54.89 9.068c-.022 0-.044.044-.087.066.043 0 .065-.022.087-.066zM51.743 15.733s0-.022.022-.022l-.022.022z" />
                    </g>
                  </g>
                  <g>
                    <path d="M53.513 16.716c.022 0 .022 0 .044-.022-.022 0-.044 0-.044.022zM56.245 14.269s0 .022 0 0c0 .022 0 .022 0 0z" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <Link
            href="/me/coupons"
            className="flex cursor-pointer items-center text-sm leading-[1.71] font-bold tracking-[0.4px] text-[rgb(116,31,162)] not-italic no-underline"
          >
            Communication Preferences
            <FaChevronRight className="h-3 w-3" />
          </Link>

          <p className="mx-0 my-[5px] text-sm leading-[1.43] text-[rgb(50,50,50)] not-italic">
            You can control your email settings here.
          </p>
        </div> */}
      </div>
    </main>
  )
}

export default ProfilePage
