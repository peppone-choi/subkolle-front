import React from 'react';
import SearchInput from './SearchInput';
import AvatarSmall from './AvatarSmall';
import Logo from './Logo';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import { HeaderMenuProps, HeaderMenuType } from './HeaderMenus';

const fetchMenus = async () => {
  return (await fetch('http://localhost:3000/api/menu')).json();
};

const Header = async () => {
  let menuData: HeaderMenuType[] | null = null;
  try {
    menuData = await fetchMenus();
  } catch (error) {
    console.error('Failed to fetch menu data', error);
  }

  return (
    <>
      <div className="flex w-screen justify-center h-24 md:h-16 bg-slate-700">
        <div className="w-screen hidden lg:flex lg:justify-between items-center xl:w-11/12 2xl:w-9/12">
          <HeaderDesktop menus={menuData} />
        </div>
        <div className="flex w-screen lg:hidden">
          <HeaderMobile menus={menuData} />
        </div>
      </div>
    </>
  );
};

export default Header;
