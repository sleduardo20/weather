export interface LocationProps {
  name: string;
  region: string;
}

export interface CurrentProps {
  temp_c: string;
  humidity: number;
  last_updated: string;
  condition: {
    text: string;
  };
}
export interface ForecastProps {
  forecastday: [
    {
      date: string;
      day: {
        maxtemp_c: string;
        mintemp_c: string;
        avgtemp_c: string;
        condition: {
          text: string;
        };
      };
      astro: {
        sunrise: string;
        sunset: string;
      };
    },
  ];
}
