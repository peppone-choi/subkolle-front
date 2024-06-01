import Link from 'next/link';
import React from 'react';
import CustomIcon from './CustomIcon';
export interface HeaderMenuProps {
  menus: HeaderMenuType[] | null;
}
export interface HeaderMenuType {
  id: number;
  icon: string;
  iconType: string;
  text: string;
  linkTo: string;
}
const HeaderMenus = ({ menus }: HeaderMenuProps) => {
  return (
    <>
      <div className="flex text-white font-semibold md:space-x-16 lg:space-x-3 xl:ml-6 space-x-3 xl:space-x-6 ml-0 ">
        {menus?.map(menu => {
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
        })}
      </div>
    </>
  );
};

export default HeaderMenus;
