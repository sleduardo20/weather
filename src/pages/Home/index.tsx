import React, { useCallback, useState, useEffect } from 'react';

import { Form } from '@unform/web';

import Today from '../../components/Today';
import Week from '../../components/Week';
import Input from '../../components/Input';

import api from '../../services/api';

import { cold, rain, rays, search, sun } from '../../styles/Icons';

import {
  Container,
  Button,
  Content,
  TopLeft,
  Header,
  Temp,
  Menu,
  Options,
  Option,
  TopRigth,
} from './styles';

import { CurrentProps, ForecastProps, LocationProps } from '../../models';

const Home: React.FC = () => {
  const [activeToday, setActiveToday] = useState(true);
  const [activeWeek, setActiveWeek] = useState(false);
  const [location, setLocation] = useState<LocationProps>();
  const [current, setCurrent] = useState<CurrentProps>();
  const [forecast, setForecast] = useState<ForecastProps>();
  const [icon, setIcon] = useState();

  const handleSubmit = useCallback(async data => {
    const { city } = data;

    try {
      const response = await api.get(`${city}=&days=10`);
      setLocation(response.data.location);
      setCurrent(response.data.current);
      setForecast(response.data.forecast);

      console.log(response.data);
    } catch (error) {
      alert('City not found!!!');
    }
  }, []);

  const handleSelectedOpition = useCallback(() => {
    if (!activeToday) {
      setActiveToday(true);
      setActiveWeek(false);
    } else {
      setActiveWeek(true);
      setActiveToday(false);
    }
  }, [activeToday]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="city" placeholder="Write your city" />
        <Button type="submit"> Search </Button>
      </Form>
      <Content>
        <TopLeft>
          <Header>
            <strong>{location?.name}</strong>
            <span>{location?.region}</span>
          </Header>

          <Temp>
            {current?.temp_c && <strong>{current.temp_c}°</strong>}

            <img src={cold} alt="Icon" />
            <p>{current?.condition.text}</p>
          </Temp>

          <Menu>
            <Options>
              <Option onClick={handleSelectedOpition} active={activeToday}>
                <strong>Today</strong>
              </Option>
              <Option onClick={handleSelectedOpition} active={activeWeek}>
                <strong>Week</strong>
              </Option>
            </Options>
          </Menu>
          <ul>{/* <Today hour="12:00" icon={sun} graus="22" /> */}</ul>
        </TopLeft>

        <TopRigth>
          {current?.temp_c && <strong>{current?.temp_c}°</strong>}

          <h1>
            {location?.name}
            <h2>{location?.region}</h2>
          </h1>
        </TopRigth>
      </Content>
    </Container>
  );
};

export default Home;
