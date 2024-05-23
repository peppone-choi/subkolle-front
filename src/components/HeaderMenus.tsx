import Link from 'next/link';
import React from 'react';
interface HeaderMenuProps {
  menus: HeaderMenuType[] | null;
}
interface HeaderMenuType {
  icon: string | null;
  text: string;
  linkTo: string;
}
const HeaderMenus = ({ menus }: HeaderMenuProps) => {
  return (
    <>
      <div className="hidden md:flex text-white space-x-2 md:space-x-6 font-semibold">
        {menus?.map(menu => {
          return (
            <Link href={menu.linkTo}>
              <div>
                <p>{menu?.icon}</p> <p className="hidden md:flex">{menu.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HeaderMenus;
