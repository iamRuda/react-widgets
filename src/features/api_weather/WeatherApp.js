import React, { useState } from 'react';

const cardStyle = {
  border: '1px solid black',
  margin: '0.5em',
  margin: '0.5em',
  width: '16em',
  height: '16em',
  wordWrap: 'break-word',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'eb8c704da7beac6f1f8591c8ffbed070';

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data: ', error);
    }
  };

  return (
    <div style={cardStyle}>
      <h3>Weather, huh? API</h3>
      <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city name" />
      <button onClick={fetchWeatherData}>Get Weather</button>
      {weatherData && weatherData.sys && (
        <div>
        <b>{weatherData.name}, {weatherData.sys.country}</b><br /><br />
        <span>Temperature: {weatherData.main.temp}°C</span><br />
        <span>Weather: {weatherData.weather[0].main}</span><br />
        <span>Description: {weatherData.weather[0].description}</span>
      </div>
    )}
    </div>
  );
};

export default WeatherApp;
