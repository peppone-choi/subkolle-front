'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {
  const loginUser = useSelector((state: any) => state.loginUser.user);
  return (
    <main className="w-screen justify-center">
      <div className="flex justify-center">
        <div className="w-11/12 xl:w-9/12 p-2 xl:p-8 flex justify-center">
          <div className="w-full flex justify-center items-center">
            <div className="hidden w-10/12 md:flex items-center rounded-2xl shadow-2xl min-h-96">
              <div className="w-1/2 text-center">소셜 로그인</div>
              <div className="w-1/2 text-center">일반 로그인 + 회원가입</div>
            </div>
            <div className="w-11/12 flex-col justify-center items-center rounded-2xl shadow-2xl min-h-96 md:hidden">
              <div className="min-h-48 flex justify-center items-center">모바일 일반 로그인 + 회원가입</div>
              <div className="min-h-48 flex justify-center items-center">모바일 소셜 로그인</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
