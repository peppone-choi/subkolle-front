'use client';

import Carousel from '@/components/Carousel';
import EventTagComponent from '@/components/EventTagComponent';
import { eventTagList } from '@/config/eventTagList';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import useModal from './hooks/useModal';
import EventModal from '@/components/EventModal';

export default function Home() {
  const { isModalOpen, openModal, closeModal } = useModal(false);
  const [eventID, setEventId] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleEventIdChange = (eventID: string) => {
    setEventId(eventID);
    openModal();
  };

  const handleModalClose = () => {
    closeModal();
    setEventId('');
  };

  const handleModalCloseOutside = (e: { target: any }) => {
    if (isModalOpen && !modalRef.current?.contains(e.target)) {
      closeModal();
      setEventId('');
    }
  };

  return (
    <>
      {isModalOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-40"
            onClick={handleModalCloseOutside}>
            <div style={{}} className="w-11/12 md:w-7/12" ref={modalRef}>
              <EventModal handleModalClose={handleModalClose} id={eventID} />
            </div>
          </div>
        </>
      )}
      <main className="w-screen justify-center">
        <div className="h-44 lg:h-[30rem]">
          <Carousel />
        </div>
        <div className="flex justify-center">
          <div className="w-11/12 xl:w-9/12 p-2 xl:p-8 flex justify-center">
            <div className="w-full">
              {Array.from(eventTagList).map(([key, value]) => (
                <EventTagComponent handleEventIdChange={handleEventIdChange} keyString={key} name={value} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
