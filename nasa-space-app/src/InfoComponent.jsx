import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './InfoComponent.css'

const InfoComponent = () => {
    return (
        <>
        <div className='info-title'>
            <h2>General Wildfire Safety</h2>
        </div>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                    >
                        Vegetation’s Role in Wildfire
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <ul>
                            <li class="list-group-item"><strong>Fuel for Fires:</strong> Dry, dense, or dead vegetation can easily ignite and provide fuel for wildfires.</li>
                            <li class="list-group-item"><strong>Spread of Fires:</strong> Vegetation can facilitate the spread of wildfires, enabling them to reach buildings and other structures.</li>
                            <li class="list-group-item"><strong>Intensity of Fires:</strong> Thick vegetation can intensify fires, making them harder to control and extinguish.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        Preventative Measures
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <ul>
                <li><strong>Defensible Space:</strong> Create and maintain a defensible space around your home by clearing dead plants, grass, and weeds.</li>
                            <li><strong>Tree Management:</strong> Regularly prune trees and keep branches at least 10 feet away from other trees and structures.</li>
                            <li><strong>Landscape Smartly:</strong> Opt for fire-resistant plants and use mulches that are less likely to ignite.</li>
                            <li><strong>Lawn Maintenance:</strong> Regularly mow your lawn and water plants, trees, and mulch to keep them from becoming fire fuel.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        Steps During Wildfire Season
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <ul>
                            <li><strong>Emergency Kit:</strong> Prepare an emergency kit with essentials like food, water, and important documents.</li>
                            <li><strong>Evacuation Plan:</strong> Create and practice an evacuation plan with all household members.</li>
                            <li><strong>Stay Informed:</strong> Keep an eye on local news and weather forecasts for any wildfire alerts.</li>
                            <li><strong>Emergency Contacts:</strong> Have a list of all essential emergency contacts and meeting points.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                    >
                        Post-Wildfire Safety
                    </button>
                </h2>
                <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <ul>
                            <li><strong>Wait for Clearance:</strong> Do not return to the area until local authorities have declared it safe.</li>
                            <li><strong>Inspect Surroundings:</strong> Assess your property for hazards like hot spots, damaged structures, and loose soil.</li>
                            <li><strong>Document Damage:</strong> Photograph damage for insurance purposes and begin the claim process promptly.</li>
                            <li><strong>Seek Support:</strong> Connect with local communities and organizations for support and resources during recovery.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default InfoComponent;
