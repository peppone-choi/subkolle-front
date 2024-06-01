'use client';

import React, { useEffect, useState } from 'react';
import Badge from './Badge';
import { eventStateList, eventTagList } from '@/config/eventTagList';

type EventModalProps = {
  id: string;
};

const fetchEventData = async (id: string) => {
  const res = await fetch(`/api/event/${id}`);
  const data = await res.json();
  return data;
};

interface EventDataTypes {
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

const EventModal = ({ id }: EventModalProps) => {
  const [eventData, setEventData] = useState<EventDataTypes>();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchEventData(id);
      setEventData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="h-[30rem] w-7/12 overflow-y-scroll rounded-md bg-white min-h-[50rem]">
      <div
        style={{
          backgroundImage: `url(${eventData?.headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="h-96 flex items-end">
        <h1 className="text-5xl text-white m-4 font-bold">{eventData?.title}</h1>
      </div>
      <div>
        <div className="m-4">
          <div className="flex">
            <p className="w-40">날짜</p>
            <p>
              {eventData?.startTime.split('T')[0].split('-')[0]}년 {eventData?.startTime.split('T')[0].split('-')[1]}월{' '}
              {eventData?.startTime.split('T')[0].split('-')[2]}일
              {eventData?.startTime.split('T')[0] === eventData?.endTime.split('T')[0]
                ? null
                : ` -> ${eventData?.endTime.split('T')[0].split('-')[0]}년 ${eventData?.endTime.split('T')[0].split('-')[1]}월 ${eventData?.endTime.split('T')[0].split('-')[2]}일`}
            </p>
          </div>
          <div className="flex">
            <p className="w-40">유형/상태</p>
            {eventData?.tag.map(tag => {
              return (
                <Badge
                  name={eventTagList.get(tag)?.text as string}
                  color={eventTagList.get(tag)?.color as string}
                  textColor={eventTagList.get(tag)?.textColor as string}
                />
              );
            })}
            {
              <Badge
                name={eventStateList.get(eventData?.state as string)?.text as string}
                color={eventStateList.get(eventData?.state as string)?.color as string}
                textColor={eventStateList.get(eventData?.state as string)?.textColor as string}
              />
            }
            {eventData?.isLongTimeEvent ? (
              <Badge name="장기행사" color="rgb(238, 224, 218)" textColor="rgb(68, 42, 30)" />
            ) : null}
            {eventData?.isOverNight ? (
              <Badge name="밤샘" color="rgb(238, 224, 218)" textColor="rgb(68, 42, 30)" />
            ) : null}
          </div>
          <div className="flex">
            <p className="w-40">장소</p>
            <p>{eventData?.location}</p>
          </div>
          <div className="flex">
            <p className="w-40">상세 주소</p>
            <p>{eventData?.detailLocation}</p>
          </div>
          <div className="flex">
            <p className="w-40">인근 교통수단</p>
            <p>{eventData?.transport}</p>
          </div>

          <div className="flex">
            <p className="w-40">장르 및 키워드</p>
            <p>{eventData?.genreAndKeyword.join(', ')}</p>
          </div>

          <div className="flex">
            <p className="w-40">가격</p>
            <div>
              {eventData?.detail.price.map(price => {
                return (
                  <div>
                    {price.price} ({price.option})
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex">
            <p className="w-40">링크</p>
            <a href={eventData?.detail.link}>{eventData?.detail.link}</a>
          </div>
          <div className="flex mt-10">
            <p>{eventData?.detail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
