import { SocialLoginProps, SocialLoginType } from '@/types/types';
import React from 'react';
const SocialLoginButton = ({ provider }: SocialLoginProps) => {
  switch (provider) {
    case SocialLoginType.KAKAO:
      return (
        <button className="flex items-center justify-center gap-x-2 w-56 h-8 lg:w-[300px] lg:h-[45px] bg-[#FEE500] text-[#000000] opacity-85 self-center rounded-md">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
            <g clip-path="url(#clip0_1_106)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.00004 0.476132C4.02919 0.476132 1.8e-05 3.60553 1.8e-05 7.46512C1.8e-05 9.86547 1.55842 11.9815 3.93154 13.2401L2.93305 16.9069C2.84483 17.2309 3.21343 17.4892 3.49648 17.3014L7.87336 14.3974C8.24272 14.4333 8.61809 14.4542 9.00004 14.4542C13.9705 14.4542 17.9999 11.3249 17.9999 7.46512C17.9999 3.60553 13.9705 0.476132 9.00004 0.476132Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_106">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="flex justify-self-center text-[15px] text-nowrap font-semibold">카카오 계정으로 로그인</p>
        </button>
      );
    case SocialLoginType.NAVER:
      return (
        <button className="flex w-56 h-8 lg:w-[300px] lg:h-[45px]  gap-x-2 bg-[#03C75A] text-white rounded-md self-center items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
            <path d="M13.5614 10.7033L6.14609 0H0V20H6.43861V9.295L13.8539 20H20V0H13.5614V10.7033Z" fill="white" />
          </svg>
          <p className="flex justify-self-center text-[15px] text-nowrap font-semibold">네이버 계정으로 로그인</p>
        </button>
      );
    case SocialLoginType.GOOGLE:
      return (
        <button className="flex w-56 h-8 lg:w-[300px] lg:h-[45px] gap-x-[24px] bg-white text-black rounded-sm self-center items-center justify-center shadow-lg border">
          <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="24" className="">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
          <p className="flex justify-self-center text-[14px] text-nowrap font-semibold opacity-55">
            구글 계정으로 로그인
          </p>
        </button>
      );
    case SocialLoginType.FACEBOOK:
      return (
        <button className="flex w-56 h-8 lg:w-[300px] lg:h-[45px]  gap-x-2 bg-[#1877F2] text-white rounded-md self-center items-center justify-center shadow-lg">
          <svg
            version="1.1"
            id="svg9"
            width="20"
            height="20"
            viewBox="0 0 666.66668 666.66717"
            xmlns="http://www.w3.org/2000/svg">
            <defs id="defs13">
              <clipPath clipPathUnits="userSpaceOnUse" id="clipPath25">
                <path d="M 0,700 H 700 V 0 H 0 Z" id="path23" />
              </clipPath>
            </defs>
            <g id="g17" transform="matrix(1.3333333,0,0,-1.3333333,-133.33333,799.99999)">
              <g id="g19">
                <g id="g21" clip-path="url(#clipPath25)">
                  <g id="g27" transform="translate(600,350)">
                    <path
                      d="m 0,0 c 0,138.071 -111.929,250 -250,250 -138.071,0 -250,-111.929 -250,-250 0,-117.245 80.715,-215.622 189.606,-242.638 v 166.242 h -51.552 V 0 h 51.552 v 32.919 c 0,85.092 38.508,124.532 122.048,124.532 15.838,0 43.167,-3.105 54.347,-6.211 V 81.986 c -5.901,0.621 -16.149,0.932 -28.882,0.932 -40.993,0 -56.832,-15.528 -56.832,-55.9 V 0 h 81.659 l -14.028,-76.396 h -67.631 V -248.169 C -95.927,-233.218 0,-127.818 0,0"
                      style={{
                        fill: '#ffffff',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                      }}
                      id="path29"
                    />
                  </g>
                  <g id="g31" transform="translate(447.9175,273.6036)">
                    <path
                      d="M 0,0 14.029,76.396 H -67.63 v 27.019 c 0,40.372 15.838,55.899 56.831,55.899 12.733,0 22.981,-0.31 28.882,-0.931 v 69.253 c -11.18,3.106 -38.509,6.212 -54.347,6.212 -83.539,0 -122.048,-39.441 -122.048,-124.533 V 76.396 h -51.552 V 0 h 51.552 v -166.242 c 19.343,-4.798 39.568,-7.362 60.394,-7.362 10.254,0 20.358,0.632 30.288,1.831 L -67.63,0 Z"
                      style={{ fill: '#0866ff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                      id="path33"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <p className="flex justify-self-center text-[15px] text-nowrap font-semibold">페이스북 계정으로 로그인</p>
        </button>
      );
    case SocialLoginType.TWITTER:
      return (
        <button className="flex w-56 h-8 lg:w-[300px] lg:h-[45px] gap-x-2 bg-black text-white rounded-md self-center items-center justify-center shadow-lg">
          <svg
            width="300"
            height="271"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-5">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <p className="flex justify-self-center text-[15px] text-nowrap font-semibold">X (트위터) 계정으로 로그인</p>
        </button>
      );
  }
};

export default SocialLoginButton;
