import React, { useState } from 'react';
import axios from 'axios';
import LocalDataComponent from './LocalDataComponent';

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

    const onAverageDataChange = (newAverageData) => {
        setAverageData(newAverageData);
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

            //inform parent component about new average
            if(typeof onAverageDataChange === 'function') {
                onAverageDataChange(flaskData.average)
            }
        } catch (error) {
            setError(error.toString());
        }
    };

    return (
        <div>
            {averageData !== null && (
                <div>
                    <LocalDataComponent averageData={averageData} />

                </div>
            )}
            {showButton ? (
                <button className="btn btn-primary" onClick={fetchData}>
                    Get Location
                </button>
            ) : (
                <button className="btn btn-secondary" onClick={resetStates}>
                    Reset
                </button>
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
