import { useAppDispatch, useAppSelector } from '@/store/store';
import React from 'react';
import { logout } from '@/store/login';

interface AvartarType {
  src: string | null;
  nickname: string;
  accessToken: string;
}

const AvatarSmall = ({ src, nickname, accessToken }: AvartarType) => {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const loginUser = useAppSelector((state: any) => state.loginUser);
  const avatarClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logoutMenuClick = async () => {
    const res = await fetch('http://localhost:3000/api/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      credentials: 'include',
    });
    if (!res.ok) {
      console.error(res.statusText);
    }
    if (res.ok) {
      dispatch(logout());
    }
  };

  return (
    <>
      <div className="flex">
        <button onClick={avatarClick}>
          {src ? (
            <img src={src as string} alt="profile" className="h-12 rounded-full mr-2 object-contain" />
          ) : (
            <div className="h-12 font-semibold flex justify-center items-center w-12 rounded-full text-2xl bg-gradient-to-tr from-gray-300 to-gray-600 mr-2">
              {nickname.substring(0, 1)}
            </div>
          )}
        </button>
      </div>
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} p-0.5 right-4 xl:right-20 2xl:right-60 top-10 z-50 border-spacing-1 border absolute border-black bg-white bg-opacity-65 w-24 flex flex-col items-center justify-center`}>
        <p className="text-black text-sm font-semibold">{nickname}</p>
        <div className="border-spacing-1 border border-black flex items-center justify-center">
          <button onClick={logoutMenuClick} className="text-black text-sm font-semibold">
            로그아웃
          </button>
        </div>
      </div>
    </>
  );
};

export default AvatarSmall;
