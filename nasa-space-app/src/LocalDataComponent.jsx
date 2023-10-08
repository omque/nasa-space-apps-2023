import React, { useState, useEffect } from "react";

const LocalDataComponent = ({averageData}) => {
  // Dummy Data
  const [localData, setLocalData] = useState({
    fireRisk: {averageData}
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
  


  

  return (
    <div className="hero-background">
      <h1>Local Wildfire Safety Guide</h1>
      <p>Current fire risk level: <strong>{averageData}</strong></p>

      <h2>Actionable Steps for You</h2>
      {getActionableSteps(averageData)}
    </div>
  );
};








export default LocalDataComponent;
