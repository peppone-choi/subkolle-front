import Link from 'next/link';
import React from 'react';

const LoginButton = () => {
  return (
    <div>
      <Link href="/login">
        <button
          type="button"
          className="w-20 mr-8 h-8 rounded-md bg-white bg-opacity-20 font-bold text-lg text-white hover:bg-opacity-15">
          로그인
        </button>
      </Link>
    </div>
  );
};

export default LoginButton;
