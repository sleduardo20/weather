import React from 'react';

import { Content } from './styles';

interface Props {
  day: string;
  graus: string;
  icon: string;
}

const Week: React.FC<Props> = ({ day, graus, icon }) => {
  return (
    <li>
      <Content>
        {day} hs
        <div>
          <img src={icon} alt="" />
          {graus}°
        </div>
      </Content>
    </li>
  );
};

export default Week;
