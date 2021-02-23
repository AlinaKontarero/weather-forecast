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

function useWeather(woeid: number){
  const [forecast, setForecast] = useState<DayForecast[] | null>();
  async function reload() {
    try {
      setForecast(null);
      setForecast(await fetchWeather(woeid));
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    reload();
  }, []);
  return [forecast, reload];
}

export default useWeather;
// https://medium.com/@deepak13245/using-react-hooks-to-handle-api-calls-d6bb4ae91188