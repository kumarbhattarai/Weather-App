import React from 'react';
import { UseWeather } from '../context/Weather.jsx';
export default function Card(){
    const { weather } = UseWeather();
    function getAQIColor(aqi) {
        switch (aqi) {
          case 1:
            return "bg-green-500";
          case 2:
            return "bg-yellow-500";
          case 3:
            return "bg-orange-500";
          case 4:
            return "bg-red-500";
          case 5:
            return "bg-purple-500";
          case 6:
            return "bg-gray-500";
          default:
            return "bg-gray-500";
        }
    }
    const aqi = weather.airQuality?weather.airQuality["us-epa-index"]:"N/A"

    return(
           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 w-72 sm:w-80 md:w-96 flex flex-col items-center text-center transition-colors">
      
      {/* Weather icon */}
      <img
        src={weather.icon}
        alt="Weather icon"
        className="w-24 h-24 sm:w-32 sm:h-32 mb-4"
      />

      {/* Temperature */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
        {weather.temperature ?? "--"}°C
      </h2>

      {/* City & condition */}
      <h5 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-1">
        {weather.city || "Unknown Location"}
      </h5>
      <h5 className="text-gray-500 dark:text-gray-400 mb-4 capitalize">
        {weather.condition || "No data"}
      </h5>

      {/* Extra weather details */}
      <div className="space-y-1 text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
        <p>💨 Wind: {weather.wind ?? "--"} kph</p>
        <p>💧 Humidity: {weather.humidity ?? "--"}%</p>
        <p>🌡️ Feels Like: {weather.feelsLike ?? "--"}°C</p>
      </div>
            
            <span
        className={`px-3 py-1 rounded-full text-sm sm:text-base font-semibold ${getAQIColor(aqi)}`}
      >
  Air Quality Index: {(() => {
    
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Moderate";
      case 3:
        return "Unhealthy for Sensitive Groups";
      case 4:
        return "Unhealthy";
      case 5:
        return "Very Unhealthy";
      case 6:
        return "Hazardous";
      default:
        return "N/A";
    }
  })()}
    </span>

        </div>
    )
}