import React from 'react';
import { IconType } from 'react-icons';
import { CustomIconProps } from '@/types/types';
import { iconType } from '@/config/iconType';

const CustomIcon = ({ type, name }: CustomIconProps) => {
  const icon = iconType.find(types => types.name === type)?.icon as Record<string, IconType>;
  if (!icon) {
    return null;
  }
  const IconComponent = icon[name] as IconType;

  return <IconComponent />;
};

export default CustomIcon;
