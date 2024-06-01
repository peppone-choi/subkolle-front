'use client';

import Carousel from '@/components/Carousel';
import EventTagComponent from '@/components/EventTagComponent';
import { eventTagList } from '@/config/eventTagList';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import useModal from './hooks/useModal';
import EventModal from '@/components/EventModal';

const fetchCarousels = async () => {
  return (await fetch('http://localhost:3000/api/carousel', { cache: 'no-cache' })).json();
};

export default function Home() {
  let carouselData = null;
  const { isModalOpen, openModal, closeModal } = useModal(false);
  const [eventID, setEventId] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        carouselData = await fetchCarousels();
        if (!carouselData) {
          throw new Error('Failed to fetch carousel data');
        }
      } catch (error) {
        console.error('Failed to fetch carousel data', error);
      }
    }
    fetchData();
  }, []);

  const handleEventIdChange = (eventID: string) => {
    setEventId(eventID);
    openModal();
  };

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-40"
          onClick={() => {
            closeModal();
            setEventId('');
          }}>
          <EventModal id={eventID} />
        </div>
      )}
      <main className="w-screen justify-center">
        <Carousel data={carouselData} />
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
