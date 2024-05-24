import React from 'react';
import AvatarSmall from './AvatarSmall';
import SearchInput from './SearchInput';
import Logo from './Logo';
import HeaderMenus, { HeaderMenuProps } from './HeaderMenus';

const HeaderDesktop = ({ menus }: HeaderMenuProps) => {
  return (
    <>
      <div className="h-16 flex items-center">
        <Logo isLogoBig={true} />
        <div className="ml-8">
          <HeaderMenus menus={menus} />
        </div>
      </div>

      <div className="hidden xl:flex ml-2 h-16 items-center">
        <div className="flex items-center space-x-6">
          <div>
            <SearchInput />
          </div>
          <div className="">
            <AvatarSmall />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDesktop;
