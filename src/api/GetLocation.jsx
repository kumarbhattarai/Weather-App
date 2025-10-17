import { useEffect } from "react";
import { UseWeather } from "../context/Weather.jsx";

export default function GetLocation() {
  const { weather, setWeather } = UseWeather();

  useEffect(() => {
    const fetchWeather = (query) => {
      fetch(`https://api.weatherapi.com/v1/current.json?key=77ab82ed6c7640f3b7575820251710&q=${query}&aqi=yes`)
        .then((res) => res.json())
        .then((data) => {
            console.log("Fetched weather data:", data);
          setWeather({
            city: data.location.name,
            temperature: data.current.temp_c,
            condition: data.current.condition.text,
            wind: data.current.wind_kph,
            humidity: data.current.humidity,
            feelsLike: data.current.feelslike_c,
            airQuality: data.current.air_quality,
            icon: data.current.condition.icon,
          });
          console.log("Weather state updated:", weather.airQuality);
        })
        .catch((err) => console.error("Error fetching weather:", err));
    };

    if (weather.city) {
      fetchWeather(weather.city);
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchWeather(`${latitude},${longitude}`);
        },
        (err) => console.error("Error getting location:", err)
      );
    }
  }, [weather.city, setWeather]);

  return null;
}
