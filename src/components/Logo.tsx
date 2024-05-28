import Link from 'next/link';
import React from 'react';

type LogoProps = {
  isLogoBig: boolean;
};

const Logo = ({ isLogoBig }: LogoProps) => {
  return (
    <div>
      <Link href="/">
        <img
          src={`https://placehold.co/${isLogoBig ? `150x48` : `48x48`}?font=roboto`}
          alt="SUBKORE LOGO"
          className="2xl:ml-4 2xl:mr-4 ml-2 min-h-12"
        />
      </Link>
    </div>
  );
};

export default Logo;
