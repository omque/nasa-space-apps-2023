import React, { useState } from 'react';

const ButtonComponent = ({ setLocationData, setShowButton, setError, showButton, resetStates  }) => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://ip-api.com/json/');
            if (!response.ok) {
                throw new Error('Network response was not ok' + response.statusText);
            }
            const data = await response.json();
            setLocationData(data);
            setShowButton(false);
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
        </div>
    );
};

export default ButtonComponent;
