import React from 'react';
import '../css/About.css';

export default function About() {
    const teamMembers = [
        {
            image: '/images/myself.jpg',
            name: 'Jaden',
            jobTitle: 'Founder & CEO',
        },
        {
            image: '/images/myself.jpg',
            name: 'Jaden',
            jobTitle: 'Founder & CEO',
        },
        {
            image: '/images/myself.jpg',
            name: 'Jaden',
            jobTitle: 'Founder & CEO',
        }
    ];
    return (
        <>
            <div className="homeAboutContent">
                <div className="aboutHeaderSection">
                    <div className="aboutHeading">
                        <h1>About Our Company</h1>
                    </div>
                    <div className="aboutText">
                        <p>A bit about this company, how it started and where it is heading.</p>
                    </div>
                </div>
                <div className="aboutBody">
                    <p>Established in 2025, Jay's Woodworks has been serving Cape Town/Western Cape with premium carpentry solutions with its carpenters being highly educated and trained to provide the best quality products and services.</p>
                </div>
                <div className="missionAndValues">
                    <div className="mission">
                        <div className="missionBody">
                            <h1>Mission</h1>
                            <h4>Our mission is to be a top quality carpentry company, recognised internationally by the great quality work that we deliver on time. Having all it takes to offer the best products and services will result in continuous growth of the company, expanding to provide more services to satisfy our clients needs.</h4>
                        </div>
                    </div>
                    <div className="values">
                        <div className="valuesBody">
                            <h1>Values</h1>
                            <h4>While we acknowledge the mission, we see that it may be achieved through the implementation of the values of the company which is <span id="value">Teamwork</span>, <span id="value">Honesty</span> and <span id="value">Integrity</span>. By following the values, the work environment builds each employee positively allowing them to bring forth the quality work that is required to deliver to a client.</h4>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="teamHeading">
                        <h1>TEAM</h1>
                    </div>
                    <div className="cards">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="individualCard">
                                <img id="image" src={member.image} alt="member images"></img>
                                <h3>{member.name}</h3>
                                <p>{member.jobTitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
