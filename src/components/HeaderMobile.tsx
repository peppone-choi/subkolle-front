import React from 'react';
import Logo from './Logo';
import AvatarSmall from './AvatarSmall';
import SearchInput from './SearchInput';
import HeaderMenus, { HeaderMenuProps } from './HeaderMenus';

const HeaderMobile = ({ menus }: HeaderMenuProps) => {
  return (
    <>
      <div className="flex w-full h-16 translate-y-1 justify-between items-center">
        <Logo isLogoBig={false} />
        <div className="flex">
          <HeaderMenus menus={menus} />
        </div>
        <AvatarSmall />
      </div>

      <div className="absolute w-full top-16 translate-y-2">
        <SearchInput />
      </div>
    </>
  );
};

export default HeaderMobile;
