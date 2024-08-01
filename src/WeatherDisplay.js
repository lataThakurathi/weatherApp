import React from "react";

function WeatherDisplay({ weather }) {
    return (
        <div>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Description: {weather.description}</p>
        </div>
    );
}

export default WeatherDisplay;
