'use client';

import React from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import { useQuery } from '@tanstack/react-query';

const fetchMenus = async () => {
  return (await fetch('http://localhost:3000/api/menu', { cache: 'no-cache' })).json();
};

const Header = () => {
  const {
    isLoading,
    data: menu,
    isError,
  } = useQuery({
    queryKey: ['menu'],
    queryFn: fetchMenus,
  });

  return (
    <div className="flex justify-center h-24 md:h-16 bg-gradient-to-tr from-slate-900 to-slate-600">
      <div className="hidden md:flex md:justify-between items-center w-full xl:w-11/12 2xl:w-9/12">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>메뉴 데이터가 존재하지 않습니다.</div>
        ) : (
          <HeaderDesktop menus={menu} />
        )}
      </div>
      <div className="flex md:hidden">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>메뉴 데이터가 존재하지 않습니다.</div>
        ) : (
          <HeaderMobile menus={menu} />
        )}
      </div>
    </div>
  );
};

export default Header;
