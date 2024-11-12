import axios from 'axios';

const API_KEY = 'f89579de05cb5006db2732f74981bbc7'; // 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


export const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric' // To get temperature in Celsius
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data by city:", error);
        throw error;
    }
};


export const getWeatherByCoordinates = async (lat, lon) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: 'metric'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data by coordinates:", error);
        throw error;
    }
};
