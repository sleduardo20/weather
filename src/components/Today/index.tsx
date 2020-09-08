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
          <span>Nascer do Sol</span> {sunrise}
        </strong>
        <strong>
          <span>Pôr do Sol</span> {sunset}
        </strong>
        <strong>
          <span>Mínima</span> {mintemp && `${mintemp}°`}
        </strong>
        <strong>
          <span>Máxima</span> {maxtemp && `${maxtemp}°`}
        </strong>
      </Content>
    </li>
  );
};

export default Today;
