import React from "react";
import Jays from '../../public/images/JaysWoodworksLogo.png';
import '../css/Header.css';

export default function Header() {
    return (
        <>
            <div className="headerDiv">
                <div className="img-Name">
                    <img className="image" src={Jays} />
                    <h2 className="companyName">Jay's Woodworks</h2>
                    {/* <hr style={{ height: "1px", width: "80vw", border: "none", backgroundColor: "gray" }} /> */}
                </div>
                <div className="navBtns">
                    <p>Home</p>
                    <p>Designs</p>
                    <p>Socials</p>
                    <p>Contact Us</p>
                    <p>Invoice</p>
                </div>
            </div>
        </>
    );
}