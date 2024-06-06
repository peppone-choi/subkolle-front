import React from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
  return (
    <div className="flex justify-center h-24 md:h-16 bg-gradient-to-tr from-slate-900 to-slate-600">
      <div className="hidden md:flex md:justify-between items-center w-full xl:w-11/12 2xl:w-9/12">
        <HeaderDesktop />
      </div>
      <div className="flex md:hidden">
        <HeaderMobile />
      </div>
    </div>
  );
};

export default Header;
