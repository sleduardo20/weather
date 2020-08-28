import React from 'react';

import { Content } from './styles';

interface Props {
  sunrise: string | undefined;
  sunset: string | undefined;
  maxtemp: string | undefined;
  mintemp: string | undefined;
}

const Today: React.FC<Props> = ({ sunrise, sunset, maxtemp, mintemp }) => {
  return (
    <li>
      <Content>
        <strong>
          <span>Sunrise</span> {sunrise}
        </strong>
        <strong>
          <span>Sunset</span> {sunset}
        </strong>
        <strong>
          <span>Max.</span> {`${maxtemp}°`}
        </strong>
        <strong>
          <span>Min.</span> {`${mintemp}°`}
        </strong>
      </Content>
    </li>
  );
};

export default Today;
