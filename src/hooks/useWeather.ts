import {useState, useEffect} from 'react';
import { DayForecast } from '../types';

const fetchWeather = (woeid: number) => {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://www.metaweather.com/api/location/${woeid}`;
  const response = fetch(`${proxyUrl + url}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }        
  })
  .then(response => response.json())
  .then(r => r.consolidated_weather)
  .catch(e => console.log(e))

  return response
}

const useWeather = (woeid: number) => {
  const [forecast, setForecast] = useState<DayForecast[] | null>();
  async function reload() {
    try {
      setForecast(null);
      setForecast(await fetchWeather(woeid));
    } catch (e) {
      alert('Please be sure you switched cors-anywhere.herokuapp.com')
      console.error(e);
    }
  }

  useEffect(() => {
    reload();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [forecast];
}

export default useWeather;