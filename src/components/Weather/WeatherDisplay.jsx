import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const WeatherDisplay = ({ weather }) => {
    const { name, main, weather: weatherInfo, wind } = weather;
    console.log(weatherInfo[0].icon)
    return (
        <Card className="mt-1 p-3 shadow-lg col-lg-2 col-sm-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '15px' }}>
            <Card.Body className="text-center">
                <Card.Title>{name}</Card.Title>
                <h2>{Math.round(main.temp)}°C</h2>
                <p>{weatherInfo[0].description}</p>
                <img
                    src={`https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`}
                    alt="Weather Icon"
                />
                <div className="d-flex justify-content-around mt-3">
                    <div>
                        <h6>Wind</h6>
                        <p>{wind.speed} m/s</p>
                    </div>
                    <div>
                        <h6>Humidity</h6>
                        <p>{main.humidity}%</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

WeatherDisplay.propTypes = {
    name: PropTypes.string.isRequired,
    main: PropTypes.object.isRequired,
    wind: PropTypes.object.isRequired,
    weather: PropTypes.object.isRequired,
};

export default WeatherDisplay;
