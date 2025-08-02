import React from 'react'

const AccountInfo = () => {
  return (
    <div className="my-4 w-full rounded-lg bg-[rgb(116,31,162)] p-6 text-white shadow-[0px_5px_10px_-7px_rgba(50,50,50,0.6)]">
      <div className="box-border flex flex-wrap items-center">
        <div className="max-w-[60%] flex-[0_0_60%]">
          <div className="float-left">
            <svg
              className="mr-3.5 h-[72px] w-[72px] rounded-[50%] align-middle"
              width="74"
              height="74"
              viewBox="0 0 74 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <circle id="a" cx="33" cy="33" r="33" />
              </defs>
              <g fill="none" fillRule="evenodd">
                <path
                  d="M36.91.532c10.126 0 19.256 4.064 25.86 10.635 6.618 6.585 10.698 15.687 10.698 25.743 0 10.227-4.073 19.32-10.655 25.903-6.583 6.583-15.678 10.655-25.723 10.655-10.227 0-19.32-4.073-25.903-10.655C4.604 56.23.532 47.135.532 37.09c0-10.227 4.073-19.32 10.655-25.903C17.77 4.604 26.865.532 36.91.532z"
                  stroke="#E0E0E0"
                  strokeWidth=".935"
                  fill="#FFF"
                />
                <g transform="translate(4 4)">
                  <mask id="b" fill="#fff">
                    <use href="#a" />
                  </mask>
                  <use fill="#F1F1F1" href="#a" />
                  <path
                    d="M46.219 43.932v.004h.103c9.453 0 17.14 7.851 17.14 17.516v4.044a4.31 4.31 0 0 1-4.307 4.312H7.48a4.31 4.31 0 0 1-4.306-4.312v-4.044c0-9.665 7.687-17.516 17.14-17.516h.103v-.004c3.604 2.722 8.04 4.397 12.901 4.397 4.862 0 9.298-1.675 12.902-4.397zM33.317 9.519c9.513 0 17.226 7.723 17.226 17.25 0 9.526-7.713 17.249-17.226 17.249-9.512 0-17.225-7.723-17.225-17.25 0-9.526 7.713-17.249 17.225-17.249z"
                    fill="#D3D3D3"
                    opacity=".6"
                    mask="url(#b)"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="inline-block w-[calc(100%-90px)]">
            <p className="m-[8px_0px_4px] overflow-hidden text-2xl font-bold text-ellipsis whitespace-nowrap text-white">
              Hello, <span className="capitalize">trannguyenvu3482</span>
            </p>

            <p className="m-0 w-full overflow-hidden text-[0.85em] leading-[1.29] font-bold tracking-normal text-ellipsis whitespace-nowrap text-white not-italic font-stretch-normal">
              trannguyenvu3482@gmail.com
            </p>
          </div>
        </div>

        <div className="max-w-[20%] flex-[0_0_20%]">
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
        </div>
      </div>
    </div>
  )
}

export default AccountInfo
