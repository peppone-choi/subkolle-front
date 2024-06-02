import React from 'react';
import Badge from './Badge';
import { eventStateList, eventTagList } from '@/config/eventTagList';
import { EventComponentProps } from '@/types/types';

const EventComponent = ({
  id,
  headerImagePath,
  title,
  tags,
  startDate,
  endDate,
  location,
  keywords,
  isLongTimeEvent,
  state,
  isOverNight,
  handleEventIdChange,
}: EventComponentProps) => {
  return (
    <div
      onClick={() => {
        handleEventIdChange(id);
      }}
      className="block w-40 h-40 lg:w-72 lg:h-80 bg-white shadow-2xl rounded-lg">
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
          {isLongTimeEvent ? <Badge name="장기행사" color="rgb(238, 224, 218)" textColor="rgb(68, 42, 30)" /> : null}
          {
            <Badge
              name={eventStateList.get(state as string)?.text as string}
              color={eventStateList.get(state as string)?.color as string}
              textColor={eventStateList.get(state as string)?.textColor as string}
            />
          }
          {isOverNight ? <Badge name="밤샘" color="rgb(238, 224, 218)" textColor="rgb(68, 42, 30)" /> : null}
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
