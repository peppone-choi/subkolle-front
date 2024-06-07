import React from 'react';
import { IconType } from 'react-icons';
import { CustomIconProps } from '@/types/types';
import { iconType } from '@/config/iconType';

const CustomIcon = async ({ type, name }: CustomIconProps) => {
  const iconGroup = await iconType();
  const iconTypes: { [key: string]: IconType } | { default: any } = iconGroup.filter(
    iconTypes => iconTypes.name === type,
  )?.[0].icon;

  if (!iconTypes) {
    return null;
  }

  const IconComponent = (iconTypes as { [key: string]: IconType })[name] as IconType;
  // const IconComponent = iconTypes.default.[name] as IconType;

  return <IconComponent />;
};

export default CustomIcon;
