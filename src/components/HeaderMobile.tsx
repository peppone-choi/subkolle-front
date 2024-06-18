'use client';

import React from 'react';
import Logo from './Logo';
import AvatarSmall from './AvatarSmall';
import SearchInput from './SearchInput';
import HeaderMenus from './HeaderMenus';
import LoginButton from './LoginButton';
import { useAppSelector } from '@/store/store';

const HeaderMobile = () => {
  const loginUser = useAppSelector((state: any) => state.loginUser);
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <>
        <div className="flex w-full h-16 ml-1 justify-between space-x-3 sm:space-x-32 items-center">
          <Logo isLogoBig={false} />
          <HeaderMenus />
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

        <div className="absolute left-0 w-full top-16">
          <SearchInput />
        </div>
      </>
    )
  );
};

export default HeaderMobile;
