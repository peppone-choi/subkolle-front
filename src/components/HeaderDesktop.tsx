'use client';

import React, { useState } from 'react';
import SearchInput from './SearchInput';
import Logo from './Logo';
import HeaderMenus from './HeaderMenus';
import LoginButton from './LoginButton';

import AvatarSmall from './AvatarSmall';
import { useAppSelector } from '@/store/store';

const HeaderDesktop = () => {
  const loginUser = useAppSelector((state: any) => state.loginUser);
  const [isClient, setIsClient] = useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <>
        <div className="h-16 flex items-center">
          <Logo isLogoBig={true} />
          <div className="ml-8 lg:ml-4">
            <HeaderMenus />
          </div>
        </div>
        <div className="hidden md:flex ml-2 h-16 items-center">
          <div className="flex items-center space-x-6">
            <div>
              <SearchInput />
            </div>
            {loginUser.user.id === -1 ? (
              <LoginButton />
            ) : (
              <AvatarSmall
                src={loginUser.user.profileImage}
                nickname={loginUser.user.nickname}
                accessToken={loginUser.accessToken}
              />
            )}
          </div>
        </div>
      </>
    )
  );
};

export default HeaderDesktop;
