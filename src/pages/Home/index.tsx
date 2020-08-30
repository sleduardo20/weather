import React, { useCallback, useState, useEffect } from 'react';

import { Form } from '@unform/web';

import Today from '../../components/Today';
import NextDays from '../../components/NextDays';
import Input from '../../components/Input';

import { api } from '../../services/api';

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

import {
  CurrentProps,
  ForecastProps,
  LocationProps,
  ConditionProps,
} from '../../models';

const Home: React.FC = () => {
  const [activeToday, setActiveToday] = useState(true);
  const [activeWeek, setActiveWeek] = useState(false);
  const [location, setLocation] = useState<LocationProps>();
  const [current, setCurrent] = useState<CurrentProps>();
  const [conditionLang, setConditionLang] = useState<ConditionProps>();
  const [condition, setCondition] = useState<ConditionProps>();
  const [forecast, setForecast] = useState<ForecastProps>();

  useEffect(() => {
    fetch('https://www.weatherapi.com/docs/conditions.json').then(
      async response => {
        const data = await response.json();
        setConditionLang(data);
      },
    );
  }, []);

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

  useEffect(() => {
    const filterCondition = conditionLang
      ?.filter((item: ConditionProps) => item.code === current?.condition.code)
      .map((item: ConditionProps) => {
        return {
          day: item.languages[20].day_text,
          night: item.languages[20].night_text,
        };
      });

    setCondition(filterCondition);
  }, [conditionLang, current]);
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

            <img src={sun} alt="Icon" />
            <p>Sol</p>
          </Temp>

          <Menu>
            <Options>
              <Option onClick={handleSelectedOpition} active={activeToday}>
                <strong>Today</strong>
              </Option>
              <Option onClick={handleSelectedOpition} active={activeWeek}>
                <strong>NextDays</strong>
              </Option>
            </Options>
          </Menu>
          <ul>
            {activeToday && (
              <Today
                sunrise={forecast?.forecastday[0].astro.sunrise}
                sunset={forecast?.forecastday[0].astro.sunset}
                maxtemp={forecast?.forecastday[0].day.maxtemp_c}
                mintemp={forecast?.forecastday[0].day.mintemp_c}
              />
            )}

            {activeWeek &&
              forecast?.forecastday
                .map(item => (
                  <NextDays
                    key={item.date}
                    day={item.date}
                    mintemp={item.day.mintemp_c}
                    maxtemp={item.day.maxtemp_c}
                  />
                ))
                .slice(1, 4)}
          </ul>
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
