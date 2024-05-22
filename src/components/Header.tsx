import React from 'react';
import SearchInput from './SearchInput';
import AvatarSmall from './AvatarSmall';
import Logo from './Logo';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
  return (
    <>
      <div className="flex w-screen justify-center h-28 xl:h-16 bg-slate-700">
        <div className="hidden xl:flex justify-between items-center w-9/12">
          <HeaderDesktop />
        </div>
        <div className="flex w-screen xl:hidden">
          <HeaderMobile />
        </div>
      </div>
    </>
  );
};

export default Header;
