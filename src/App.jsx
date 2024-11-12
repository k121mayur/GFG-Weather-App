/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherDisplay from "./components/Weather/WeatherDisplay";
import {
  getWeatherByCity,
  getWeatherByCoordinates,
} from "./services/weatherServices";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  // Fetch weather by city name
  const fetchWeatherByCity = async (city) => {
    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
      setError(""); // Clear any previous error
    } catch (err) {
      setError("City not found or unable to fetch data.");
    }
  };

  // Fetch weather by coordinates (for current location)
  const fetchWeatherByLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const data = await getWeatherByCoordinates(latitude, longitude);
            setWeatherData(data);
            setError("");
          } catch (err) {
            setError("Unable to fetch data for your location.");
          }
        },
        () => {
          setError("Location access denied.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Load current location weather data on initial load
  useEffect(() => {
    fetchWeatherByLocation();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="text-center mb-3">Weather App</h1>
        <SearchBar onSearch={fetchWeatherByCity} />
        {error && <p className="text-danger">{error}</p>}
        {weatherData && <WeatherDisplay weather={weatherData} />}
  
    </div>
  );
};

export default App;
