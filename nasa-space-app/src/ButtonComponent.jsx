import React, { useState } from 'react';

const GeoComponent = () => {
    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=6e9d6acd2927431687c411e8c19e03ba&fields=latitude,longitude');

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
            <button onClick={fetchData}>Get Location</button>
            {locationData && (
                <div>
                    <h2>Location Data</h2>
                    <p>Latitude: {locationData.latitude}</p>
                    <p>Longitude: {locationData.longitude}</p>
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

export default GeoComponent;
