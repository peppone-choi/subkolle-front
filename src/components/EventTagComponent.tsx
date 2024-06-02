'use client';

import React, { useEffect, useState } from 'react';
import EventComponent from './EventComponent';
import { eventTagList } from '@/config/eventTagList';
import { EventTagComponentProps } from '@/types/types';

const EventTagComponent = ({ handleEventIdChange, keyString }: EventTagComponentProps) => {
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

  const [isViewed, setIsViewed] = useState(false);
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchEventData(keyString);
      if (data) {
        setIsViewed(true);
      }
      setEventData(data);
    }
    fetchData();
  }, []);

  const name = eventTagList.get(keyString)?.text;
  return (
    <div className="m-4 mb-8">
      <h1 className="flex text-2xl font-extrabold mb-2 items-center space-x-2">
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
      <div
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-5 place-items-center ${!isViewed && 'hidden'}`}>
        {eventData ? (
          eventData.map((data: any) => (
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
          ))
        ) : (
          <div>이벤트 데이터가 존재하지 않습니다.</div>
        )}
      </div>
    </div>
  );
};

export default EventTagComponent;
