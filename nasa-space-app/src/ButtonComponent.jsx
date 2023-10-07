import React, { useState } from 'react';
import './App.css';
import { Button } from 'bootstrap';
import LocalDataComponent from './LocalDataComponent';

const ButtonComponent = () => {
    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState(null);
    const [fireRisk, setFireRisk] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch('http://ip-api.com/json/');

            if (!response.ok) {
                throw new Error('Network response was not ok' + response.statusText);
            }

            const data = await response.json();
            setLocationData(data);
        } catch (error) {
            setError(error.toString());
        }
    };

    return (
        <div>
            <button class="btn btn-primary" onClick={fetchData}  >Get Location</button>
            {locationData && (
                <div>
                    <h2>Location Data</h2>
                    <p>Latitude: {locationData.lat}</p>
                    <p>Longitude: {locationData.lon}</p>
                    <LocalDataComponent />
                </div>
            )}
            {error && (
                <div>
                    <h2>Error</h2>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default ButtonComponent;
