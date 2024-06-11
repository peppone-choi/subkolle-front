import React from 'react';
import SocialLoginButton from './SocialLoginButton';
import { SocialLoginType } from '@/types/types';

const SocialLoginButtonPlate = () => {
  return (
    <div className="flex flex-col h-full space-y-3 shadow-lg w-full rounded-xl p-4 m-4 lg:space-y-5">
      <SocialLoginButton provider={SocialLoginType.KAKAO} />
      <SocialLoginButton provider={SocialLoginType.NAVER} />
      <SocialLoginButton provider={SocialLoginType.GOOGLE} />
      <SocialLoginButton provider={SocialLoginType.FACEBOOK} />
      <SocialLoginButton provider={SocialLoginType.TWITTER} />
    </div>
  );
};

export default SocialLoginButtonPlate;
