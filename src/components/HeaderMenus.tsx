import Link from 'next/link';
import React from 'react';
import CustomIcon from './CustomIcon';
export interface HeaderMenuProps {
  menus: HeaderMenuType[] | null;
}
export interface HeaderMenuType {
  icon: string;
  iconType: string;
  text: string;
  linkTo: string;
}
const HeaderMenus = ({ menus }: HeaderMenuProps) => {
  return (
    <>
      <div className="flex text-white font-semibold xl:ml-6 space-x-4 xl:space-x-6 ml-0 whitespace-nowrap">
        {menus?.map(menu => {
          return (
            <Link href={menu.linkTo} key={menu.text}>
              <div className="flex items-center">
                <p className="text-4xl mr-2">
                  <CustomIcon type={menu.iconType} name={menu.icon} />
                </p>{' '}
                <p className="hidden mr-2 text-lg lg:inline">{menu.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HeaderMenus;
