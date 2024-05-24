import Link from 'next/link';
import React from 'react';
export interface HeaderMenuProps {
  menus: HeaderMenuType[] | null;
}
export interface HeaderMenuType {
  icon: string;
  text: string;
  linkTo: string;
}
const HeaderMenus = ({ menus }: HeaderMenuProps) => {
  return (
    <>
      <div className="flex text-white space-x-2 md:space-x-6 font-semibold">
        {menus?.map(menu => {
          return (
            <Link href={menu.linkTo}>
              <div className="flex space-x-3">
                <p>{menu.icon}</p> <p className="hidden md:flex">{menu.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HeaderMenus;
