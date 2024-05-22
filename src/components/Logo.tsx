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
          className="ml-4 xl:ml-0 h-12"
        />
      </Link>
    </div>
  );
};

export default Logo;
