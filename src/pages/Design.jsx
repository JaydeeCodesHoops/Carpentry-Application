import React, { useState } from 'react';
import something from '../../public/images/pexels-4.jpg';
import { FaArrowDown } from 'react-icons/fa';
import '../css/Design.css';

export default function Design({ designs, process }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);


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
                        <div className="design-items">
                            {designs.map((design, index) => (
                                <div key={index} className={`individual-design-item ${isExpanded ? 'show' : ''}`}>
                                    <img id="img" src={design.image} alt="design"></img>
                                    <h2>{design.title}</h2>
                                    <p>{design.description}</p>
                                    <p id="material">{design.material}</p>
                                </div>
                            ))}
                        </div>

                        <div className="expand-indicator">
                            {isExpanded ? 'Close Details' : 'View Details'}
                        </div>
                    </div>
                    <div className="processSection">
                        <div className="processSectionHeading">
                            <h1>Design Process</h1>
                        </div>
                        <div className="processItems">
                            {process.map((item, index) => {
                                const isReversed = (index + 1) % 2 === 0; // 2nd, 4th, 6th items

                                return (
                                    <div key={index} className="individualProcessItem">
                                        {isReversed ? (
                                            // Reversed order
                                            <>
                                                <div className="itemImage">
                                                    <img id="img" src={item.image} alt="process item image" />
                                                    {index !== 5 && <FaArrowDown id="arrowDown" />}
                                                </div>
                                                <div className="itemDesc">
                                                    <p>{item.desc}</p>
                                                </div>
                                                <div className="itemHeading">
                                                    <h2>{item.title}</h2>
                                                </div>
                                            </>
                                        ) : (
                                            // Default order
                                            <>
                                                <div className="itemHeading">
                                                    <h2>{item.title}</h2>
                                                </div>
                                                <div className="itemDesc">
                                                    <p>{item.desc}</p>

                                                </div>
                                                <div className="itemImage">
                                                    <img id="img" src={item.image} alt="process item image" />
                                                    {index !== 5 && <FaArrowDown id="arrowDown" />}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="toolsETC">
                        <div className="tools">
                            <h1>Tools & Materials Used</h1>
                        </div>
                        <div className="toolsBody">
                            <h4 className={`powerTool ${isExpanded1 ? 'expanded' : ''}`}
                                onClick={() => setIsExpanded1(!isExpanded1)}
                            >
                                Power Tools

                                <div className={`powerToolExpanded ${isExpanded1 ? 'show' : ''}`}>
                                    <p>Hi, this is all the power tools that i used within my company.</p>
                                </div>

                                <div className="expand-indicator">
                                    {isExpanded1 ? '▲' : '▼'}
                                </div>
                            </h4>
                            <h4 className={`handTool ${isExpanded2 ? 'expanded' : ''}`}
                                onClick={() => setIsExpanded2(!isExpanded2)}
                            >
                                Hand Tools

                                <div className={`handToolExpanded ${isExpanded2 ? 'show' : ''}`}>
                                    <p>Hi, these are all the hand tools used within this company.</p>
                                </div>

                                <div className="expand-indicator">
                                    {isExpanded2 ? '▲' : '▼'}
                                </div>
                            </h4>
                            <h4 className={`materialsUsed ${isExpanded3 ? 'expanded' : ''}`}
                                onClick={() => setIsExpanded3(!isExpanded3)}
                            >
                                Materials Used

                                <div className={`materialsUsedExpanded ${isExpanded3 ? 'show' : ''}`}>
                                    <p>Hi, these are all the hand tools used within this company.</p>
                                </div>

                                <div className="expand-indicator">
                                    {isExpanded3 ? '▲' : '▼'}
                                </div>
                            </h4>
                        </div>
                    </div>
                    <div className="moreInfo">
                        <h3>For more designs visit our social platforms to discover them.</h3>
                    </div>
                </div>
            </div>
        </>
    );
}