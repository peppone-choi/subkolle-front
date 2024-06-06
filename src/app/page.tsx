'use client';

import EventTagComponent from '@/components/EventTagComponent';
import { eventTagList } from '@/config/eventTagList';
import { useEffect, useRef, useState } from 'react';
import useModal from './hooks/useModal';
import EventModal from '@/components/EventModal';
import React from 'react';
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('@/components/Carousel'), { ssr: true });

export default function Home() {
  const { isModalOpen, openModal, closeModal } = useModal(false);
  const [eventID, setEventId] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleEventIdChange = (eventID: string) => {
    setEventId(eventID);
    openModal();
    document.body.style.overflowY = 'hidden';
  };

  const handleModalClose = () => {
    closeModal();
    document.body.style.overflowY = 'auto';
    setEventId('');
  };

  const handleModalCloseOutside = (e: { target: any }) => {
    if (isModalOpen && !modalRef.current?.contains(e.target)) {
      closeModal();
      document.body.style.overflowY = 'auto';
      setEventId('');
    }
  };

  return (
    <main>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-40"
          onClick={handleModalCloseOutside}>
          <div className="w-11/12 md:w-7/12" ref={modalRef}>
            <EventModal handleModalClose={handleModalClose} id={eventID} />
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
                <EventTagComponent handleEventIdChange={handleEventIdChange} keyString={key} name={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
