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
      <div className="flex w-screen justify-center h-28 xl:h-16 bg-slate-700">
        <div className="hidden xl:flex justify-between items-center w-9/12">
          <HeaderDesktop menus={menuData} />
        </div>
        <div className="flex w-screen xl:hidden">
          <HeaderMobile menus={menuData} />
        </div>
      </div>
    </>
  );
};

export default Header;
