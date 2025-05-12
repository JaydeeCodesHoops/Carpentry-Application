import React, { useState } from 'react';
import something from '../../public/images/pexels-4.jpg'
import '../css/Design.css';

export default function Design() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div className="homeDesignContent">
                <div className="overlay">
                    <div className="designHeaderSection">
                        <div className="designHeading">
                            <h1>Our Designs</h1>
                        </div>
                        <div className="designText">
                            <p>These are our Designs that our team has creatively built.</p>
                        </div>
                    </div>
                    <div className="designBody">
                        <p>The designs stems down from the creativeness of each skilled carpenter and the collaboration thereof as well. </p>
                    </div>
                    <div
                        className={`design-item ${isExpanded ? 'expanded' : ''}`}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <div className={`individual-design-item ${isExpanded ? 'show' : ''}`}>
                            <img id="img" src={something} alt="sdfsdfsfsfvff"></img>
                        </div>
                        <div className="expand-indicator">
                            {isExpanded ? 'Close Details' : 'View Details'}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}