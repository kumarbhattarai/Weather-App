import React from 'react';
import { UseWeather } from '../context/Weather.jsx';
import GetLocation from '../api/GetLocation.jsx';

export default function Input() {
  const { weather, setWeather } = UseWeather();

  function HandleChange(formData) {
    const city = formData.get("city");
    setWeather({ ...weather, city });
    console.log("city is " + city);
  }

  return (
    <div className="w-full flex justify-center my-4">
      <form
        action={HandleChange}
        className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
      >
        <input
          type="text"
          name="city"
          placeholder={weather.city || "Enter city"}
          className="w-full sm:w-72 md:w-80 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
        />

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold shadow-md shadow-blue-600/50 transition-all duration-200"
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}
