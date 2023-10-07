import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const InfoComponent = () => {
    return (
        <div className="accordion" id="accordionExample">
            {Array.from({ length: 3 }).map((_, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                            className={`accordion-button${index === 0 ? '' : ' collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded={index === 0}
                            aria-controls={`collapse${index}`}
                        >
                            Collapsible Group Item #{index + 1}
                        </button>
                    </h2>
                    <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse${index === 0 ? ' show' : ''}`}
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfoComponent;

