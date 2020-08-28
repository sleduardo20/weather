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

  const weekDay = getDay(date);

  let nameDay = '';

  switch (weekDay) {
    case 0:
      nameDay = 'Sunday';
      break;
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

    default:
      break;
  }

  return (
    <li>
      <Content>
        <strong>
          <span>{nameDay}</span>Max. {maxtemp} {'  '} Min. {mintemp}{' '}
        </strong>
      </Content>
    </li>
  );
};

export default NextDays;