import React, { useState, useEffect } from "react";

const LocalDataComponent = () => {
  // Dummy Data
  const [localData, setLocalData] = useState({
    vegetationType: "Dense Forest",
    fireRisk: -1,
  });

  // Actionable steps based on fire risk
  const getActionableSteps = (riskLevel) => {
    if (riskLevel < 0) {
      return (
        <ul>
          <li>Evacuate the area as soon as possible.</li>
          <li>Ensure your emergency kit is packed and ready.</li>
          <li>Use N95 masks to protect against inhaling smoke.</li>
        </ul>
      );
    } else if (riskLevel >= 0 && riskLevel <= 0.34) { // Inclusive boundaries
      return (
        <ul>
          <li>Stay alert for potential evacuation notices.</li>
          <li>Keep emergency supplies prepared.</li>
          <li>Limit outdoor activities to prevent smoke inhalation.</li>
        </ul>
      );
    } else if (riskLevel > 0.34 && riskLevel <= 0.66) { // Adjusted boundary
      return (
        <ul>
          <li>Stay informed with the latest local news.</li>
          <li>Ensure you have an emergency plan in place.</li>
          <li>Continue regular property and vegetation maintenance.</li>
        </ul>
      );
    } else if (riskLevel > 0.66) {
      return (
        <ul>
          <li>Stay informed with the latest local news.</li>
          <li>Ensure you have an emergency plan in place.</li>
          <li>Continue regular property and vegetation maintenance.</li>
        </ul>
      );
    } else {
      return <p>Stay informed and prepared.</p>;
    }
  };
  

  //Function for getting fire risk data

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("YOUR_API_ENDPOINT");
      
  //     if (!response.ok) {
  //       throw new Error("Server responded with a non-ok status");
  //     }
      
  //     const data = await response.json();
  
  //     // Ensure fireRisk is between -1 and 1
  //     if (
  //       typeof data.fireRisk !== 'number' ||
  //       data.fireRisk < -1 ||
  //       data.fireRisk > 1
  //     ) {
  //       throw new Error("Invalid fireRisk value received");
  //     }
      
  //     setLocalData(data);
  //   } catch (error) {
  //     setError(error.toString());
  //   }
  // };

  return (
    <div className="hero-background">
      <h1>Local Wildfire Safety Guide</h1>
      <p>Your local vegetation type: <strong>{localData.vegetationType}</strong></p>
      <p>Current fire risk level: <strong>{localData.fireRisk}</strong></p>

      <h2>Actionable Steps for You</h2>
      {getActionableSteps(localData.fireRisk)}
    </div>
  );
};








export default LocalDataComponent;
