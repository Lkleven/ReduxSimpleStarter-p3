import axios from "axios";

const API_KEY ="92c143a96924660624436212db695cb1"; //openweathermap.org api key

//template string ES6 syntax
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER_DATA ="FETCH_WATHER_DATA";

//action creators ALWAYS needs to return and action and an action is an object which ALWAYS has to have a type
export function fetchWeatherData(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return{
    type: FETCH_WATHER_DATA
    payload: request
  };
}
