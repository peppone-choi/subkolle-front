'use client';

import Link from 'next/link';
import React from 'react';
import CustomIcon from './CustomIcon';
import { useQuery } from '@tanstack/react-query';
import { HeaderMenuType } from '@/types/types';

const fetchMenus = async () => {
  const res = await fetch('http://localhost:3000/api/menu');
  if (!res.ok) {
    const { error } = await res.json();
    throw new Error(error);
  }
  return res.json();
};

const HeaderMenus = () => {
  const {
    data: menus,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['menu'],
    queryFn: fetchMenus,
    retry: false,
  });

  return (
    <>
      <div className="flex text-white font-semibold md:space-x-16 lg:space-x-3 xl:ml-6 space-x-3 xl:space-x-6 ml-0 ">
        {isError ? (
          <p>{error.message}</p>
        ) : (
          menus?.map((menu: HeaderMenuType) => {
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
