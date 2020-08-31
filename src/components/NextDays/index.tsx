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
      nameDay = 'Segunda';
      break;
    case 2:
      nameDay = 'Terça';
      break;
    case 3:
      nameDay = 'Quarta';
      break;
    case 4:
      nameDay = 'Quinta';
      break;
    case 5:
      nameDay = 'Sexta';
      break;
    case 6:
      nameDay = 'Sábado';
      break;
    case 7:
      nameDay = 'Domingo';
      break;

    default:
      break;
  }

  return (
    <Content>
      <strong>
        <span>{nameDay}</span>Máx. <strong>{`${maxtemp}°`} </strong> Mín.{' '}
        <strong>{`${mintemp}°`}</strong>
      </strong>
    </Content>
  );
};

export default NextDays;
