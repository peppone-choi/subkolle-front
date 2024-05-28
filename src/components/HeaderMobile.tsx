import React from 'react';
import Logo from './Logo';
import AvatarSmall from './AvatarSmall';
import SearchInput from './SearchInput';
import HeaderMenus, { HeaderMenuProps } from './HeaderMenus';

const HeaderMobile = ({ menus }: HeaderMenuProps) => {
  return (
    <>
      <div className="flex w-full h-16 ml-1 justify-between items-center">
        <Logo isLogoBig={false} />
        <HeaderMenus menus={menus} />
        <AvatarSmall />
      </div>

      <div className="absolute w-full top-16">
        <SearchInput />
      </div>
    </>
  );
};

export default HeaderMobile;
