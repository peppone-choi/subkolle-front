import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchEventData = async (id: string) => {
  const res = await fetch(`/api/event/${id}`);
  const data = await res.json();
  return data;
};

const EventInfoPage = (context: { params: { id: string } }) => {
  const { id } = context.params;
  const {
    isPending,
    isError,
    data: eventData,
    error,
  } = useQuery({ queryKey: ['event', id], queryFn: () => fetchEventData(id), staleTime: 1000 * 60 * 60 });

  if (isError) {
    return (
      <main className="w-screen justify-center">
        <div className="flex justify-center">
          <div className="w-11/12 xl:w-9/12 p-2 xl:p-8 flex justify-center">
            <div className="w-full">이벤트 데이터를 불러오는데 문제가 있습니다. Error: {error.message}</div>
          </div>
        </div>
      </main>
    );
  }
  if (isPending) {
    return (
      <main className="w-screen justify-center">
        <div className="flex justify-center">
          <div className="w-11/12 xl:w-9/12 p-2 xl:p-8 flex justify-center">
            <div className="w-full">이벤트 데이터를 불러오는 중입니다.</div>
          </div>
        </div>
      </main>
    );
  }
  console.log(eventData);
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
