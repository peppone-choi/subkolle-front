import React from 'react';
import Badge from './Badge';
import { eventTagList } from '@/config/eventTagList';

type EventComponentProps = {
  headerImagePath: string;
  title: string;
  tags: string[];
  startDate: string;
  endDate: string | null;
  location: string;
  keywords: string[];
};

const EventComponent = ({
  headerImagePath,
  title,
  tags,
  startDate,
  endDate,
  location,
  keywords,
}: EventComponentProps) => {
  return (
    <div className="block w-40 h-40 lg:w-72 lg:h-80 bg-white shadow-2xl rounded-lg">
      <div
        className="h-14 lg:h-1/2 w-full rounded-t-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headerImagePath})` }}></div>
      <div className="p-2">
        <h1 className="font-bold text-lg mb-2 overflow-hidden whitespace-nowrap text-ellipsis break-all">{title}</h1>
        <p className="text-sm space-x-1 mb-2">
          {tags.map(tag => {
            return (
              <Badge
                name={eventTagList.get(tag)?.text as string}
                color={eventTagList.get(tag)?.color as string}
                textColor={eventTagList.get(tag)?.textColor as string}
              />
            );
          })}
        </p>
        <p className="text-xs mb-1">
          {startDate} {endDate ? `-> ${endDate}` : null}
        </p>
        <p className="text-xs mb-1 hidden lg:block">{location}</p>
        <p className="text-xs space-x-1 hidden lg:block">
          {keywords.map((keyword, idx) => (
            <span>
              {keyword}
              {idx < keyword.length ? ',' : ''}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default EventComponent;
