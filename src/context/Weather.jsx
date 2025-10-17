import { createContext, useContext, useState } from "react";
import Image from "../images/image.png";
const WeatherContext = createContext();

export function WeatherProvider(props) {
  const [weather, setWeather] = useState({
    city: "",
    temperature: 0,
    condition: "clear",
    icon: Image,
    wind: 0.0,
    humidity: 0.0,
    feelsLike: 0.0,
    airQuality: 0.0,
  });
  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export function UseWeather() {
  return useContext(WeatherContext);
}
