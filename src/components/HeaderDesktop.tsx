'use client';

import React from 'react';
import SearchInput from './SearchInput';
import Logo from './Logo';
import HeaderMenus from './HeaderMenus';
import LoginButton from './LoginButton';
import { useSelector } from 'react-redux';
import AvatarSmall from './AvatarSmall';

const HeaderDesktop = () => {
  const loginUser = useSelector((state: any) => state.loginUser.user);
  return (
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
          <div className="">{loginUser.id === -1 ? <LoginButton /> : <AvatarSmall />}</div>
        </div>
      </div>
    </>
  );
};

export default HeaderDesktop;
