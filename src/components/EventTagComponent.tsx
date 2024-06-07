'use client';

import React, { useEffect, useState } from 'react';
import EventComponent from './EventComponent';
import { eventTagList } from '@/config/eventTagList';
import { EventTagComponentProps } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { Swiper } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';

const fetchEventData = async (key: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/event/tags/${key}`, { cache: 'reload' });
    if (!response.ok) {
      throw new Error('Failed to fetch event data');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch event data', error);
  }
};

const EventTagComponent = ({ handleEventIdChange, keyString }: EventTagComponentProps) => {
  const {
    isPending,
    isError,
    data: eventData,
    error,
  } = useQuery({
    queryKey: ['event', keyString],
    queryFn: () => fetchEventData(keyString),
  });

  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    if (eventData) {
      setIsViewed(true);
    }
  }, [eventData]);

  const name = eventTagList.get(keyString)?.text;
  return (
    <div className="w-full mb-8">
      <h1 className="ml-4 flex text-2xl font-extrabold mb-2 items-center space-x-2">
        <span
          className={`size-7 rounded-md shadow-lg flex justify-center items-center text-sm hover:cursor-pointer`}
          style={{
            backgroundColor: eventTagList.get(keyString)?.color,
            color: eventTagList.get(keyString)?.textColor,
          }}
          onClick={() => setIsViewed(!isViewed)}>
          <p className={`text-xl font-normal ${eventTagList.get(keyString)?.textColor}`}>{isViewed ? '▼' : '▲'}</p>
        </span>
        <p
          style={{
            color: eventTagList.get(keyString)?.textColor,
          }}>
          {name}
        </p>
      </h1>
      <div className={`w-screen ${!isViewed && 'hidden'}`}>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1510: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1780: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
          slidesPerView={3} //한 슬라이드에 보여줄 갯수
          spaceBetween={5} //슬라이드간 거리
          loop={true}
          modules={[A11y]}>
          {isPending ? (
            <></>
          ) : isError ? (
            <></>
          ) : (
            eventData.map((data: any) => (
              <SwiperSlide key={data} className="flex justify-center">
                <EventComponent
                  id={data.shortcut}
                  handleEventIdChange={handleEventIdChange}
                  key={data.shortcut}
                  headerImagePath={data.headerImage}
                  title={data.title}
                  tags={data.tag}
                  startDate={
                    data.startTime.split('T')[0].split('-')[0] +
                    '년 ' +
                    data.startTime.split('T')[0].split('-')[1] +
                    '월 ' +
                    data.startTime.split('T')[0].split('-')[2] +
                    '일'
                  }
                  endDate={
                    data.startTime.split('T')[0] === data.endTime.split('T')[0]
                      ? null
                      : data.endTime.split('T')[0].split('-')[0] +
                        '년 ' +
                        data.endTime.split('T')[0].split('-')[1] +
                        '월 ' +
                        data.endTime.split('T')[0].split('-')[2] +
                        '일'
                  }
                  location={data.location}
                  keywords={data.genreAndKeyword}
                  isLongTimeEvent={data.isLongTimeEvent}
                  state={data.state}
                  isOverNight={data.isOverNight}
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default EventTagComponent;
