import React, { useState } from 'react';
import './App.css';
import LocalDataComponent from './LocalDataComponent';
import ButtonComponent from './ButtonComponent';

const HeroComponent = () => {
    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState(null);
    const [showButton, setShowButton] = useState(true);

    const resetStates = () => {
        setLocationData(null);
        setError(null);
        setShowButton(true);
    };

    return (
        <div>
            <ButtonComponent
                setLocationData={setLocationData}
                setShowButton={setShowButton}
                setError={setError}
                showButton={showButton}
                resetStates={resetStates}
                className="btn btn-primary btn-lg"
            />
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

export default HeroComponent;
