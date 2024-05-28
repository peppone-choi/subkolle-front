import React from 'react';
import Logo from './Logo';
import AvatarSmall from './AvatarSmall';
import SearchInput from './SearchInput';
import HeaderMenus, { HeaderMenuProps } from './HeaderMenus';

const HeaderMobile = ({ menus }: HeaderMenuProps) => {
  return (
    <>
      <div className="flex w-full h-16 ml-1 justify-between space-x-3 sm:space-x-32 items-center">
        <Logo isLogoBig={false} />
        <HeaderMenus menus={menus} />
        <AvatarSmall />
      </div>

      <div className="absolute left-0 w-full top-16">
        <SearchInput />
      </div>
    </>
  );
};

export default HeaderMobile;
