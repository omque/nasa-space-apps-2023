import React, { useState } from 'react';
import axios from 'axios';

const ButtonComponent = () => {
    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState(null);
    const [showButton, setShowButton] = useState(true);
    const [averageData, setAverageData] = useState(null);

    const resetStates = () => {
        setLocationData(null);
        setError(null);
        setShowButton(true);
        setAverageData(null);
    };

    const fetchData = async () => {
        try {
            const ipApiResponse = await axios.get('http://ip-api.com/json/');
            if (ipApiResponse.status !== 200) {
                throw new Error('Network response was not ok');
            }
            const data = ipApiResponse.data;
            setLocationData(data);
            setShowButton(false);

            // Make a request to your Flask API to get the average data
            const flaskApiResponse = await axios.get(`http://127.0.0.1:5000/api/${data.lon}/${data.lat}`);
            if (flaskApiResponse.status !== 200) {
                throw new Error('Flask server response was not ok');
            }
            const flaskData = flaskApiResponse.data;
            setAverageData(flaskData.average);
        } catch (error) {
            setError(error.toString());
        }
    };

    return (
        <div>
            {showButton ? (
                <button className="btn btn-primary" onClick={fetchData}>
                    Check My Location
                </button>
            ) : (
                <button className="btn btn-secondary" onClick={resetStates}>
                    Reset
                </button>
            )}
            {locationData && (
                <div>
                    <h2>Location Data</h2>
                    <p>Latitude: {locationData.lat}</p>
                    <p>Longitude: {locationData.lon}</p>
                </div>
            )}
            {averageData !== null && (
                <div>
                    <h2>NDVI Value</h2>
                    <p>Average: {averageData}</p>
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
