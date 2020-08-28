import React from 'react';

import { Content } from './styles';

interface Props {
  sunrise: string;
  sunset: string;
  maxtemp: string;
  mintemp: string;
}

const Today: React.FC<Props> = ({ sunrise, sunset, maxtemp, mintemp }) => {
  return (
    <li>
      <Content>{sunrise}</Content>
    </li>
  );
};

export default Today;
