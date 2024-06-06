import React from 'react';
import SearchInput from './SearchInput';
import Logo from './Logo';
import HeaderMenus from './HeaderMenus';
import LoginButton from './LoginButton';

const HeaderDesktop = () => {
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
          <div className="">
            <LoginButton />
            {/* <AvatarSmall /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDesktop;
