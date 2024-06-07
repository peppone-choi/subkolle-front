'use client';

import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { CustomIconProps } from '@/types/types';
import { iconType } from '@/config/iconType';

const CustomIcon = ({ type, name }: CustomIconProps) => {
  const [iconData, setIconData] = useState<any>();

  useEffect(() => {
    const fetchIconData = async (type: string) => {
      const res = await iconType(type);
      setIconData(res);
    };
    fetchIconData(type);
  }, [name]);

  if (!iconData) {
    return null;
  }

  const IconComponent = (iconData as { [key: string]: IconType })[name] as IconType;
  return <IconComponent />;
};

export default CustomIcon;
