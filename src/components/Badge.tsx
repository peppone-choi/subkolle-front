import { BadgeProps } from '@/types/types';
import React from 'react';
import css from 'styled-jsx/css';
import tw from 'twin.macro';

const Badge = ({ name, color, textColor }: BadgeProps) => {
  return (
    <>
      <span
        className="text-xs rounded-md p-0.5 px-1.5 m-1"
        style={{
          backgroundColor: color as string,
          color: textColor as string,
        }}>
        {name}
      </span>
    </>
  );
};

export default Badge;
