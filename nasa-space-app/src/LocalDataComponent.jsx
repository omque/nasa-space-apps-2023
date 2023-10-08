import React, { useState, useEffect } from "react";
import './InfoComponent.css'

const LocalDataComponent = () => {
  // Dummy Data
  const [localData, setLocalData] = useState({
    fireRisk: 0.38,
  });

  // Actionable steps based on fire risk
  const getActionableSteps = (riskLevel) => {
    if (riskLevel < 0) {
      return (
        <ul className="action-list">
          <li >An NDVI score between -1 and 0 suggests that the area being 
            assessed has little to no healthy or dense vegetation.</li>
          <li> In some cases, areas with 
            negative NDVI values may indicate land that could benefit from reforestation, 
            soil conservation, or other environmental restoration efforts.</li>
          <li>Negative NDVI values can change seasonally, 
            such as when vegetation goes dormant during winter or when there's temporary flooding. 
            Tracking these changes can provide insights into ecosystem dynamics.</li>
        </ul>
      );
    } else if (riskLevel >= 0 && riskLevel <= 0.34) { // Inclusive boundaries
      return (
        <ul>
          <li>An NDVI score between 0 and 0.33 suggests that the area 
            being assessed has sparse or low-density vegetation.</li>
          <li>While there is some vegetation present, 
            it may not be very healthy or dense.</li>
          <li>Consider examining other data sources or ground 
            observations to understand the factors affecting vegetation health, 
            such as water availability, soil quality, or potential stressors.</li>
            <li> Areas with low NDVI scores may benefit from environmental restoration efforts, 
              such as reforestation, afforestation, or the introduction of native vegetation. </li>
        </ul>
      );
    } else if (riskLevel > 0.34 && riskLevel <= 0.66) { // Adjusted boundary
      return (
        <ul>
          <li>An NDVI score between 0.33 and 0.66 suggests moderate to healthy vegetation cover</li>
          <li>May benefit from reforestation or afforestation</li>
          <li>Introduce more native vegetation</li>
          <li>Erosion-prone area: 
            Implement soil conservation practices in these areas to prevent further degradation 
          </li>
        </ul>
      );
    } else if (riskLevel > 0.66) {
      return (
        <ul>
          <li>Areas with NDVI values in this range often represent healthy ecosystems. </li>
          <li>Investigate areas with high NDVI values as potential biodiversity hotspots.</li>
          <li> These areas are crucial for stabilizing banks, preventing erosion, and maintaining water quality.</li>
             <li> Monitor areas with high NDVI values for signs of drought resilience, 
              and understanding these areas can improve current data on water resource management.</li> 
        </ul>
      );
    } else {
      return <p>Stay informed and prepared.</p>;
    }
  };
  

  return (
    <div className="hero-background">
      <h1>Local Wildfire Safety Guide</h1>
      {/* <p>Your local vegetation type: <strong>{localData.vegetationType}</strong></p> */}
      <p>Current NDVI fire risk level: <strong>{localData.fireRisk}</strong></p>

      <h2>Actionable Steps for You</h2>
      {getActionableSteps(localData.fireRisk)}
    </div>
  );
};








export default LocalDataComponent;
