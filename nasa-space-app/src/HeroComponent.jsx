import React, { useState } from 'react';
import './App.css';
import './HeroComponent.css'
import LocalDataComponent from './LocalDataComponent';
import ButtonComponent from './ButtonComponent';

const HeroComponent = () => {
    const [averageData, setAverageData] = useState(null);
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
            

            <div className="hero-background">
                <p>Using open science information from satellites, we can 
                    see what kind of vegetation is near you and what risks come
                    with it.
                </p>
                <ButtonComponent
                    setLocationData={setLocationData}
                    setShowButton={setShowButton}
                    setError={setError}
                    showButton={showButton}
                    resetStates={resetStates}
                    onAverageDataChange={setAverageData}
                    className="btn btn-primary btn-lg"
                />
                {locationData && (
                <div>
                    <h2>Location Data</h2>
                    <p>Latitude: {locationData.lat}</p>
                    <p>Longitude: {locationData.lon}</p>
                    <LocalDataComponent averageData={averageData}s/>
                </div>
            )}
            {error && (
                <div>
                    <h2>Error</h2>
                    <p>{error}</p>
                </div>
            )}
            </div>
        </div>
    );
};

export default HeroComponent;
