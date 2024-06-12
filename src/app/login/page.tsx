'use client';
import LoginComponent from '@/components/LoginComponent';
import SocialLoginButtonPlate from '@/components/SocialLoginButtonPlate';
import { useAppSelector } from '@/store/store';
import React from 'react';

const LoginPage = () => {
  const loginUser = useAppSelector((state: any) => state.loginUser.user);
  return (
    <main className="flex justify-center items-center">
      <div className="flex mt-auto md:mt-32 items-center w-full xl:w-9/12 p-2 xl:p-8 justify-center">
        <div className="w-full flex justify-center items-center">
          <div className="hidden w-10/12 md:flex items-center rounded-2xl shadow-2xl min-h-96">
            <div className="w-1/2 text-center">
              <SocialLoginButtonPlate />
            </div>
            <div className="flex w-1/2 justify-center">
              <LoginComponent />
            </div>
          </div>
          <div className="w-11/12 flex-col justify-center items-center rounded-2xl shadow-2xl min-h-96 md:hidden">
            <div className="min-h-48 flex justify-center items-center">
              <LoginComponent />
            </div>
            <div className="min-h-56 flex justify-center items-center">
              <SocialLoginButtonPlate />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
