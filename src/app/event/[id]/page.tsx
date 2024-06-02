import { EventDataTypes } from '@/types/types';
import React from 'react';

const fetchEventData = async (id: string) => {
  try {
    const res = await fetch(`/api/event/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch event data');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch event data', error);
  }
};

const EventInfoPage = async (context: { params: { id: string } }) => {
  const { id } = context.params;
  const eventData = (await fetchEventData(id)) as EventDataTypes;
  if (!eventData) {
    return (
      <main className="w-screen justify-center">
        <div className="flex justify-center">
          <div className="w-11/12 xl:w-9/12 p-2 xl:p-8 flex justify-center">
            <div className="w-full">이벤트 데이터가 존재하지 않습니다.</div>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="w-screen justify-center">
      <div className="flex justify-center">
        <div className="w-11/12 xl:w-9/12 p-2 xl:p-8 flex justify-center">
          <div className="w-full">{eventData.title}</div>
        </div>
      </div>
    </main>
  );
};

export default EventInfoPage;
