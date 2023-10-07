import React, { useState, useEffect } from "react";

const LocalDataComponent = () => {
  // Dummy Data
  const [localData, setLocalData] = useState({
    vegetationType: "Dense Forest",
    fireRisk: "High",
  });

  // Actionable steps based on fire risk
  const getActionableSteps = (riskLevel) => {
    switch (riskLevel) {
      case "High":
        return (
          <ul>
            <li>Evacuate the area as soon as possible.</li>
            <li>Ensure your emergency kit is packed and ready.</li>
            <li>Use N95 masks to protect against inhaling smoke.</li>
          </ul>
        );
      case "Medium":
        return (
          <ul>
            <li>Stay alert for potential evacuation notices.</li>
            <li>Keep emergency supplies prepared.</li>
            <li>Limit outdoor activities to prevent smoke inhalation.</li>
          </ul>
        );
      case "Low":
        return (
          <ul>
            <li>Stay informed with the latest local news.</li>
            <li>Ensure you have an emergency plan in place.</li>
            <li>Continue regular property and vegetation maintenance.</li>
          </ul>
        );
      default:
        return <p>Stay informed and prepared.</p>;
    }
  };

  useEffect(() => {
    // When integrated with API or database,
    // fetch real data here and update localData using setLocalData.
  }, []);

  return (
    <div>
      <h1>Local Wildfire Safety Guide</h1>
      <p>Your local vegetation type: <strong>{localData.vegetationType}</strong></p>
      <p>Current fire risk level: <strong>{localData.fireRisk}</strong></p>

      <h2>Actionable Steps for You</h2>
      {getActionableSteps(localData.fireRisk)}
    </div>
  );
};

export default LocalDataComponent;
