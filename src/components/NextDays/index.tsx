import React from 'react';
import { getDay, getDate } from 'date-fns';

import { Content } from './styles';

interface Props {
  day: string;
  maxtemp: string;
  mintemp: string;
}

const NextDays: React.FC<Props> = ({ day, maxtemp, mintemp }) => {
  const date = new Date(day);
  const weekDay = getDay(date) + 1;

  let nameDay = '';

  switch (weekDay) {
    case 1:
      nameDay = 'Monday';
      break;
    case 2:
      nameDay = 'Tuesday';
      break;
    case 3:
      nameDay = 'Wednesday';
      break;
    case 4:
      nameDay = 'Thursday';
      break;
    case 5:
      nameDay = 'Friday';
      break;
    case 6:
      nameDay = 'Saturday';
      break;
    case 7:
      nameDay = 'Sunday';
      break;

    default:
      break;
  }

  return (
    <Content>
      <strong>
        <span>{nameDay}</span>Max. <strong>{`${maxtemp}°`} </strong> Min.{' '}
        <strong>{`${mintemp}°`}</strong>
      </strong>
    </Content>
  );
};

export default NextDays;
