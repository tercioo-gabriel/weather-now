import React from 'react';
import { PiThermometerThin, PiWindThin } from 'react-icons/pi';

export interface WeatherProps {
  city: string;
  weatherData: WeatherData | null;
}

export interface WeatherData {
  temperature: string;
  wind: string;
  description: string;
  forecast: Forecast[];
}

export interface Forecast {
  day: string;
  temperature: string;
  wind: string;
}

const translateWeather: { [key: string]: string } = {
  "Partly cloudy": "Parcialmente nublado",
  "Clear": "Tempo limpo",
  "Light snow": "Neve leve",
  "Sunny": "Ensolarado",
  "Rain with thunderstorm": "Chuva com tempestade",
  "Patchy rain possible": "Chuva leve",
}

const Weather: React.FC<WeatherProps> = ({ city, weatherData }) => {
  return (
    <div className='maxWidth h-0 rounded-md flex flex-col md:mx-auto'>
      <div className='flex flex-col justify-between items-center text-center gap-16 backdrop-blur-md bg-cyan-200/50 rounded-t-md p-2 sm:py-12'>
        <h1 className='text-4xl'>{city}</h1>
        {weatherData && (
        
          <div className='flex flex-col justify-between'>
            <h1 className='text-7xl sm:text-9xl mb-4 font-semibold'>{weatherData.temperature}</h1>
            <p className='text-lg sm:text-2xl px-20'>{translateWeather[weatherData.description] || weatherData.description} <span className='hidden sm:block'>{weatherData.wind}</span></p>
          </div>
      )}
      </div>
          {weatherData && (
          <ul className='backdrop-blur-md bg-cyan-200/20 rounded-b-md flex flex-col sm:flex-row gap-2 justify-between items-center text-center'>
            {weatherData.forecast.map((dayForecast, index) => (
              <li key={dayForecast.day} className=' w-36 bg-transparent drop-shadow-md p-1.5 sm:p-3 rounded-md'>
                <h3 className='capitalize mb-4 sm:mb-14 text-lg sm:text-xl'>
                  {index === 0 ? 'Amanhã' : new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(
                    new Date().setDate(new Date().getDate() + index + 1)
                  )}
                </h3>
                <div>
                  <p className='flex flex-row justify-center gap-2 text-lg sm:text-x'>
                    <PiThermometerThin className='mt-1' />{dayForecast.temperature}
                  </p>
                  <p className='flex flex-row justify-center gap-2 text-lg sm:text-x'>
                    <PiWindThin className='mt-1' /> {dayForecast.wind}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        
      )}
    </div>
  );
}

export default Weather;