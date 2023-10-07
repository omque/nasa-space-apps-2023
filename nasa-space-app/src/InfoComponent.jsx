import React from "react";

const InfoComponent = () => {
  return (
    <div>
        <h1>Vegetation & Wildfire Safety</h1>
        <p>Local vegetation plays a significant role in wildfire dynamics. Appropriate management and understanding of vegetation can help mitigate wildfire risks and safeguard communities. Here's how:</p>
        
        <div className="info-list">
            <h2>Understanding Vegetation’s Role in Wildfire</h2>
            <ul>
                <li><strong>Fuel for Fires:</strong> Dry, dense, or dead vegetation can easily ignite and provide fuel for wildfires.</li>
                <li><strong>Spread of Fires:</strong> Vegetation can facilitate the spread of wildfires, enabling them to reach buildings and other structures.</li>
                <li><strong>Intensity of Fires:</strong> Thick vegetation can intensify fires, making them harder to control and extinguish.</li>
            </ul>

            <h2>Preventative Measures: Managing Local Vegetation</h2>
            <ul>
                <li><strong>Defensible Space:</strong> Create and maintain a defensible space around your home by clearing dead plants, grass, and weeds.</li>
                <li><strong>Tree Management:</strong> Regularly prune trees and keep branches at least 10 feet away from other trees and structures.</li>
                <li><strong>Landscape Smartly:</strong> Opt for fire-resistant plants and use mulches that are less likely to ignite.</li>
                <li><strong>Lawn Maintenance:</strong> Regularly mow your lawn and water plants, trees, and mulch to keep them from becoming fire fuel.</li>
            </ul>

            <h2>Actionable Steps During Wildfire Season</h2>
            <ul>
                <li><strong>Emergency Kit:</strong> Prepare an emergency kit with essentials like food, water, and important documents.</li>
                <li><strong>Evacuation Plan:</strong> Create and practice an evacuation plan with all household members.</li>
                <li><strong>Stay Informed:</strong> Keep an eye on local news and weather forecasts for any wildfire alerts.</li>
                <li><strong>Emergency Contacts:</strong> Have a list of all essential emergency contacts and meeting points.</li>
            </ul>

            <h2>Post-Wildfire Safety</h2>
            <ul>
                <li><strong>Wait for Clearance:</strong> Do not return to the area until local authorities have declared it safe.</li>
                <li><strong>Inspect Surroundings:</strong> Assess your property for hazards like hot spots, damaged structures, and loose soil.</li>
                <li><strong>Document Damage:</strong> Photograph damage for insurance purposes and begin the claim process promptly.</li>
                <li><strong>Seek Support:</strong> Connect with local communities and organizations for support and resources during recovery.</li>
            </ul>
        </div>
    </div>
  );
};

export default InfoComponent;

