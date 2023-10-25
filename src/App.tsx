import { useState } from 'react';
import Search from './components/Search';
import Weather from './components/Weather';
import Title from './components/Title';

function App() {
  const [city, setCity] = useState<string>('Veja o clima da sua cidade 🌤️😯');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (searchedCity: string) => {
    try {
      const response = await fetch(`https://goweather.herokuapp.com/weather/${searchedCity}`);

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      const data = await response.json();

      setWeatherData(data);
      setCity(searchedCity);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  }

  return (
    <div>
      <Title />
      <Search onSearch={handleSearch} />
      <Weather city={city} weatherData={weatherData} />
    </div>
  );
}

export default App;