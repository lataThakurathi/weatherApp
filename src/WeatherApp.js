import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

function WeatherApp() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
                    city
                )}&appid=9f379b5fa963578ea61780af440f10aa&units=metric`
            );
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            setWeather({
                temperature: data.main.temp,
                humidity: data.main.humidity,
                description: data.weather[0].description,
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {weather && <WeatherDisplay weather={weather} />}
        </div>
    );
}

export default WeatherApp;
