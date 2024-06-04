import React from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import { HeaderMenuType } from '@/types/types';

const fetchMenus = async () => {
  return (await fetch('http://localhost:3000/api/menu', { cache: 'no-cache' })).json();
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
      <div className="flex justify-center h-24 md:h-16 bg-gradient-to-tr from-slate-900 to-slate-600">
        <div className="hidden md:flex md:justify-between items-center w-full xl:w-11/12 2xl:w-9/12">
          {menuData ? <HeaderDesktop menus={menuData} /> : <div>메뉴 데이터가 존재하지 않습니다.</div>}
        </div>
        <div className="flex md:hidden">
          {menuData ? <HeaderMobile menus={menuData} /> : <div>메뉴 데이터가 존재하지 않습니다.</div>}
        </div>
      </div>
    </>
  );
};

export default Header;
