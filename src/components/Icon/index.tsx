import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import { cold, cloud, rain, rays, sun } from '../../styles/Icons';

interface Props {
  name?: string;
}

const Icon: React.FC<Props> = ({ name }) => {
  const [img, setImg] = useState('');

  useEffect(() => {
    const cond = name?.toString();
    switch (cond) {
      case 'Sol':
        setImg(sun);
        break;
      case 'Parcialmente nublado':
        setImg(cloud);
        break;
      case 'Nublado':
        setImg(cloud);
        break;
      case 'Encoberto':
        setImg(cloud);
        break;
      case 'Neblina':
        setImg(sun);
        break;
      case 'Possibilidade de chuva irregular':
        setImg(rain);
        break;
      case 'Possibilidade de neve irregular':
        setImg(sun);
        break;
      case 'Possibilidade de neve molhada irregular':
        setImg(sun);
        break;
      case 'Possibilidade de chuvisco gelado irregular':
        setImg(cold);
        break;
      case 'Possibilidade de trovoada':
        setImg(rays);
        break;
      case 'Rajadas de vento com neve':
        setImg(cold);
        break;
      case 'Nevasca':
        setImg(cold);
        break;
      case 'Nevoeiro':
        setImg(sun);
        break;
      case 'Nevoeiro gelado':
        setImg(sun);
        break;
      case 'Chuvisco irregular':
        setImg(rain);
        break;
      case 'Chuvisco':
        setImg(rain);
        break;
      case 'Chuvisco gelado':
        setImg(rain);
        break;
      case 'Chuvisco forte gelado':
        setImg(rain);
        break;
      case 'Chuva fraca irregular ':
        setImg(rain);
        break;
      case 'Chuva fraca':
        setImg(rain);
        break;
      case 'Períodos de chuva moderada':
        setImg(rain);
        break;
      case 'Chuva moderada':
        setImg(rain);
        break;
      case 'Períodos de chuva forte':
        setImg(rain);
        break;

      default:
        break;
    }
  }, [name]);

  return (
    <Container>
      <img src={img} alt="Icon" />
    </Container>
  );
};

export default Icon;
