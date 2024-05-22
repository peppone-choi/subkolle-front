import React from 'react';
interface HeaderMenuProps {
  menus: HeaderMenuType[] | null;
}
interface HeaderMenuType {
  icon: string;
  text: string;
  linkTo: string;
}
const HeaderMenus = ({ menus }: HeaderMenuProps) => {
  // TODO: icon 적용 및 메뉴 자동화

  return (
    <>
      <div className="hidden lg:flex text-white space-x-6 font-semibold">
        <div>캘린더</div>
        <div>행사</div>
        <div>장기 행사</div>
        <div>게시판</div>
        <div>Admin!</div>
      </div>
      <div className="flex lg:hidden space-x-2 text-white font-medium">
        <div>캘</div>
        <div>행</div>
        <div>장</div>
        <div>게</div>
        <div>A</div>
      </div>
    </>
  );
};

export default HeaderMenus;
