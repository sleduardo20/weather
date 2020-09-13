import React, { useCallback, useState, useEffect } from 'react';

import { Form } from '@unform/web';

import Today from '../../components/Today';
import NextDays from '../../components/NextDays';
import Input from '../../components/Input';
import Icon from '../../components/Icon';

import { api } from '../../services/api';

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
} from '../../@types';

const Home: React.FC = () => {
  const [activeToday, setActiveToday] = useState(true);
  const [activeWeek, setActiveWeek] = useState(false);
  const [location, setLocation] = useState<LocationProps>();
  const [current, setCurrent] = useState<CurrentProps>();
  const [conditionLang, setConditionLang] = useState<ConditionProps>();
  const [condition, setCondition] = useState();
  const [forecast, setForecast] = useState<ForecastProps>();

  useEffect(() => {
    fetch('https://www.weatherapi.com/docs/conditions.json').then(
      async response => {
        const data = await response.json();
        setConditionLang(data);
      },
    );
  }, []);

  useEffect(() => {
    const filterCondition = conditionLang
      ?.filter((item: ConditionProps) => item.code === current?.condition.code)
      .map((item: ConditionProps) => item.languages[20].day_text);

    setCondition(filterCondition);
  }, [conditionLang, current]);

  const handleSubmit = useCallback(async data => {
    const { city } = data;

    try {
      const response = await api.get(`${city}=&days=10`);
      setLocation(response.data.location);
      setCurrent(response.data.current);
      setForecast(response.data.forecast);
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
        <Input name="city" placeholder="Informe a cidade" />
        <Button type="submit"> Buscar </Button>
      </Form>
      <Content>
        <TopLeft>
          <Header>
            <strong>{location?.name}</strong>
            <span>{location?.region}</span>
          </Header>

          <Temp>
            {current?.temp_c && <strong>{current.temp_c}°</strong>}

            {forecast && <Icon name={condition} />}
            <p>{condition}</p>
          </Temp>

          <Menu>
            <Options>
              <Option onClick={handleSelectedOpition} active={activeToday}>
                <strong>Hoje</strong>
              </Option>
              <Option onClick={handleSelectedOpition} active={activeWeek}>
                <strong>Próximos Dias</strong>
              </Option>
            </Options>
          </Menu>
          <ul>
            {activeToday && forecast && (
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
