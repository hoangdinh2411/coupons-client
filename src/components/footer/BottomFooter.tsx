import React from 'react'

const BottomFooter = () => {
  return (
    <div className="isolate mt-8 pb-10 text-xs text-white">
      <div className="mb-8 flex flex-col justify-between lg:mb-8 lg:flex-row lg:items-center">
        <div className="mb-8 flex lg:mb-0">
          <a
            className="mr-6 block h-10 w-10 items-center rounded-full fill-white hover:bg-white/10"
            href="https://www.facebook.com/TrustCoupon"
            aria-label="TrustCoupon on Facebook"
          >
            <svg
              className="mx-auto mt-2 h-6 w-6"
              fill="none"
              viewBox="0 0 25 24"
            >
              <g clipPath="url(#facebook-f-circle_svg__a)">
                <path
                  fill="currentColor"
                  d="M24.5 12c0-6.627-5.373-12-12-12S.5 5.373.5 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.578V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.313 0 2.686.234 2.686.234v2.953H16.33c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C20.112 22.954 24.5 17.99 24.5 12"
                />
              </g>
              <defs>
                <clipPath id="facebook-f-circle_svg__a">
                  <path fill="currentColor" d="M.5 0h24v24H.5z" />
                </clipPath>
              </defs>
            </svg>{' '}
          </a>
          <a
            className="mr-6 block h-10 w-10 items-center rounded-full fill-white hover:bg-white/10"
            href="https://www.instagram.com/TrustCoupon"
            aria-label="TrustCoupon on Instagram"
          >
            <svg
              className="mx-auto mt-2 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1" />
            </svg>{' '}
          </a>
          <a
            className="mr-6 block h-10 w-10 items-center rounded-full fill-white hover:bg-white/10"
            href="https://www.pinterest.com/TrustCoupon"
            aria-label="TrustCoupon on Pinterest"
          >
            <svg
              className="mx-auto mt-2 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 496 512"
            >
              <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248" />
            </svg>{' '}
          </a>
          <a
            className="mr-6 block h-10 w-10 items-center rounded-full fill-white hover:bg-white/10"
            href="https://x.com/TrustCoupon"
            aria-label="TrustCoupon on X"
          >
            <svg
              className="mx-auto mt-2 h-6 w-6"
              fill="none"
              viewBox="0 0 25 24"
            >
              <path
                fill="currentColor"
                d="M14.498 10.588 22.316 1.5h-1.853l-6.788 7.89L8.253 1.5H2l8.199 11.932L2 22.962h1.853l7.168-8.333 5.726 8.333H23zm-2.538 2.949-.83-1.188-6.61-9.454h2.846l5.334 7.63.83 1.188 6.934 9.917h-2.846z"
              />
            </svg>{' '}
          </a>
          <a
            className="mr-6 block h-10 w-10 items-center rounded-full fill-white hover:bg-white/10"
            href="https://www.tiktok.com/@TrustCoupon"
            aria-label="TrustCoupon on TikTok"
          >
            <svg
              className="mx-auto mt-2 h-6 w-6"
              fill="none"
              viewBox="0 0 27 26"
            >
              <path
                fill="currentColor"
                d="M19.442 4.893a5.58 5.58 0 0 1-1.383-3.679h-4.03V17.39a3.38 3.38 0 0 1-3.379 3.261 3.4 3.4 0 0 1-3.391-3.391c0-2.244 2.165-3.927 4.395-3.235V9.902c-4.5-.6-8.44 2.896-8.44 7.357 0 4.343 3.601 7.435 7.423 7.435 4.096 0 7.422-3.326 7.422-7.435V9.054a9.6 9.6 0 0 0 5.61 1.8v-4.03s-2.453.117-4.227-1.931"
              />
            </svg>{' '}
          </a>
        </div>
        <div className="font-proxima flex flex-wrap gap-4 lg:gap-6 [&>a]:block">
          <a className="underline-offset-4 hover:underline" href="/ca/">
            TrustCoupon Canada
          </a>
          <button className="h-fit cursor-pointer underline-offset-4 hover:underline">
            <img
              className="mr-1 inline"
              src="https://cdn.ziffstatic.com/pub/icong1.png"
              alt=""
              role="presentation"
              loading="lazy"
              width={8}
              height={8}
            />
            AdChoices
          </button>
          <a
            className="underline-offset-4 hover:underline"
            href="https://www.ziffdavis.com/terms-of-use"
          >
            Terms of Service
          </a>
          <a
            className="underline-offset-4 hover:underline"
            href="https://www.ziffdavis.com/shopping-privacy-policy"
          >
            Privacy Policy
          </a>
          <a
            className="underline-offset-4 hover:underline"
            href="https://dsar.TrustCoupon.com/"
          >
            Do Not Sell My Personal Information
          </a>
          <a
            className="underline-offset-4 hover:underline"
            href="https://www.ziffdavis.com/accessibility"
          >
            Accessibility
          </a>
          <a className="underline-offset-4 hover:underline" href="/sitemap/">
            Sitemap
          </a>
        </div>
      </div>
      <span>
        ©2006-2025 TrustCoupon, Inc., a Ziff Davis company. All rights
        reserved. TrustCoupon and RMN are registered trademarks of TrustCoupon,
        Inc. Third-party trademarks are the property of their respective
        third-party owners. Presence of a third-party trademark does not mean
        that TrustCoupon has any relationship with that third-party or that the
        third-party endorses TrustCoupon or its services.
      </span>
    </div>
  )
}

export default BottomFooter
