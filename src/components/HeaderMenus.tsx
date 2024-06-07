'use client';

import Link from 'next/link';
import React from 'react';
import CustomIcon from './CustomIcon';
import { useQuery } from '@tanstack/react-query';
import { HeaderMenuType } from '@/types/types';

const fetchMenus = async () => {
  try {
    return (await fetch('http://localhost:3000/api/menu')).json();
  } catch (error) {
    throw new Error('메뉴를 불러오지 못하였습니다.');
  }
};

const HeaderMenus = () => {
  const {
    isLoading,
    data: menus,
    isError,
  } = useQuery({
    queryKey: ['menu'],
    queryFn: fetchMenus,
  });
  return (
    <>
      <div className="flex text-white font-semibold md:space-x-16 lg:space-x-3 xl:ml-6 space-x-3 xl:space-x-6 ml-0 ">
        {isLoading ? (
          <div>메뉴를 로딩중입니다</div>
        ) : isError ? (
          <div>메뉴를 불러오지 못하였습니다.</div>
        ) : (
          menus.map((menu: HeaderMenuType) => {
            return (
              <Link href={menu.linkTo} key={menu.id}>
                <div className="flex items-center w-full">
                  <p className="text-4xl mr-2">
                    <CustomIcon type={menu.iconType} name={menu.icon} />
                  </p>{' '}
                  <p className="mr-2 text-lg truncate hidden lg:flex">{menu.text}</p>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default HeaderMenus;
