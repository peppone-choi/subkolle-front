'use client';

import EventTagComponent from '@/components/EventTagComponent';
import { eventTagList } from '@/config/eventTagList';
import { useRef } from 'react';
import EventModal from '@/components/EventModal';
import React from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { modalClose, resetEventModalItem } from '@/store/eventModalItem';

const Carousel = dynamic(() => import('@/components/Carousel'), { ssr: true });

export default function Home() {
  const modalRef = useRef<HTMLDivElement>(null);
  const eventId = useSelector((state: any) => state.eventModalItem.id);
  const isModalOpen = useSelector((state: any) => state.eventModalItem.modalOpen);
  const dispatch = useDispatch();

  const handleModalCloseOutside = (e: { target: any }) => {
    if (isModalOpen && !modalRef.current?.contains(e.target)) {
      dispatch(modalClose());
      dispatch(resetEventModalItem());
    }
  };

  return (
    <main>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-40"
          onClick={handleModalCloseOutside}>
          <div className="w-11/12 md:w-7/12" ref={modalRef}>
            <EventModal id={eventId} />
          </div>
        </div>
      )}
      <div className={`w-screen justify-center`}>
        <div className="h-44 lg:h-[30rem]">
          <Carousel />
        </div>
        <div className="flex justify-center">
          <div className="w-full xl:p-8 flex justify-center">
            <div className="w-full">
              {Array.from(eventTagList).map(([key, value]) => (
                <EventTagComponent keyString={key} name={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
