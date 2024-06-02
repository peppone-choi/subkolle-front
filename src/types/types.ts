export interface BadgeProps {
  name: string;
  color: string;
  textColor: string;
}

export interface CarouselData {
  data: CarouselProps[] | null;
}

export interface CarouselProps {
  order: number;
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
}

export interface CustomIconProps {
  type: string;
  name: string;
}

export interface EventDataTypes {
  title: string;
  headerImage: string;
  transport: string;
  isLongTimeEvent: boolean;
  startTime: string;
  endTime: string;
  tag: string[];
  isOverNight: boolean;
  state: string;
  location: string;
  detailLocation: string;
  genreAndKeyword: string[];
  detail: {
    price: {
      price: '10000';
      option: '일반';
    }[];
    link: string;
    description: string;
  };
  isShow: true;
  isDeleted: false;
}

export interface EventTagComponentProps {
  handleEventIdChange: (eventID: string) => void;
  keyString: string;
  name: object;
}

export interface HeaderMenuProps {
  menus: HeaderMenuType[] | null;
}
export interface HeaderMenuType {
  id: number;
  icon: string;
  iconType: string;
  text: string;
  linkTo: string;
}

export interface EventComponentProps {
  id: string;
  headerImagePath: string;
  title: string;
  tags: string[];
  startDate: string;
  endDate: string | null;
  location: string;
  keywords: string[];
  isLongTimeEvent: boolean;
  state: string;
  isOverNight: boolean;
  handleEventIdChange: (eventID: string) => void;
}

export type EventModalProps = {
  id: string;
  handleModalClose: () => void;
};

export type LogoProps = {
  isLogoBig: boolean;
};

export type OuterAxiosInstanceProp = {
  baseUrl: string;
  body: object | null;
  isCredentials: boolean;
};
