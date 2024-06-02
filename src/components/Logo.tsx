import { LogoProps } from '@/types/types';
import Link from 'next/link';
import React from 'react';

const Logo = ({ isLogoBig }: LogoProps) => {
  return (
    <div>
      <Link href="/">
        <img
          src={`https://placehold.co/${isLogoBig ? `150x48` : `48x48`}?font=roboto`}
          alt="SUBKORE LOGO"
          className="xl:ml-4 2xl:mr-4 min-h-12"
        />
      </Link>
    </div>
  );
};

export default Logo;
