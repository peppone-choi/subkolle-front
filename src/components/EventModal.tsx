'use client';

import React, { useEffect, useState } from 'react';
import Badge from './Badge';
import { eventStateList, eventTagList } from '@/config/eventTagList';
import { EventDataTypes, EventModalProps } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

const fetchEventData = async (id: string) => {
  const res = await fetch(`/api/event/${id}`);
  const data = await res.json();
  return data;
};

const EventModal = ({ id, handleModalClose }: EventModalProps) => {
  const {
    isPending,
    isError,
    data: eventData,
    error,
  } = useQuery({
    queryKey: ['event', id],
    queryFn: () => fetchEventData(id),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <div className="h-[32rem] w-full rounded-lg bg-white">
      {isPending ? (
        <></>
      ) : isError ? (
        <></>
      ) : (
        <>
          <div
            style={{
              backgroundImage: `url(${eventData?.headerImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className="h-44 w-full rounded-t-lg">
            <div className="w-full flex justify-end">
              <button
                onClick={handleModalClose}
                className="relative right-2 top-2 rounded-full text-white text-2xl font-light bg-black size-8 bg-opacity-30">
                X
              </button>
            </div>
            <div className="w-full flex items-end h-36">
              <h1 className="text-2xl md:text-4xl text-white md:m-4 font-bold">{eventData?.title}</h1>
            </div>
          </div>
          <div className="text-sm break-all ml-2 mt-2 lg:m-4">
            <div className="overflow-x-hidden overflow-y-scroll h-full ">
              <div className="flex">
                <p className="w-28 md:w-40">날짜</p>
                <p>
                  {eventData?.startTime.split('T')[0].split('-')[0]}년{' '}
                  {eventData?.startTime.split('T')[0].split('-')[1]}월{' '}
                  {eventData?.startTime.split('T')[0].split('-')[2]}일
                  {eventData?.startTime.split('T')[0] === eventData?.endTime.split('T')[0]
                    ? null
                    : ` -> ${eventData?.endTime.split('T')[0].split('-')[0]}년 ${eventData?.endTime.split('T')[0].split('-')[1]}월 ${eventData?.endTime.split('T')[0].split('-')[2]}일`}
                </p>
              </div>
              <div className="flex">
                <p className="w-28 md:w-40">유형/상태</p>
                {eventData?.tag.map((tag: string) => {
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
                <p className="w-28 md:w-40">장소</p>
                <p>{eventData?.location}</p>
              </div>
              <div className="flex">
                <p className="w-28 md:w-40">상세 주소</p>
                <p>{eventData?.detailLocation}</p>
              </div>
              <div className="flex">
                <p className="w-28 md:w-40">인근 교통수단</p>
                <p>{eventData?.transport}</p>
              </div>

              <div className="flex">
                <p className="w-28 md:w-40">장르 및 키워드</p>
                <p>{eventData?.genreAndKeyword.join(', ')}</p>
              </div>

              <div className="flex">
                <p className="w-28 md:w-40">가격</p>
                <div>
                  {eventData?.detail.price.map((price: { price: number; option: string }) => {
                    return (
                      <div>
                        {price.price} ({price.option})
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex">
                <p className="w-28 md:w-40">링크</p>
                <a href={eventData?.detail.link}>{eventData?.detail.link}</a>
              </div>
              <div className="flex mt-2 md:mt-10">
                <p>{eventData?.detail.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EventModal;
