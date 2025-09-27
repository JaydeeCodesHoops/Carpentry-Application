import React from "react";
import Jays from '../../public/images/JaysWoodworksLogo.png';
import { useNavigate } from "react-router-dom";
import '../css/Header.css';

export default function Header() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }
    const handleDesigns = () => {
        navigate('/design');
    }
    const handleSocials = () => {
        navigate('/socials');
    }
    const handleContact = () => {
        navigate('/contact');
    }
    const handleInvoice = () => {
        navigate('/invoice');
    }

    return (
        <>
            <div className="headerDiv">
                <div className="img-Name">
                    <img onClick={handleHome} className="image" src={Jays} />
                    <h2 className="companyName">Jay's Woodworks</h2>
                </div>
                <div className="navBtns">
                    <p onClick={handleHome}>Home</p>
                    <p onClick={handleDesigns}>Designs</p>
                    <p onClick={handleSocials}>Socials</p>
                    <p onClick={handleContact}>Contact Us</p>
                    <p onClick={handleInvoice}>Invoice</p>
                </div>
            </div>
            {/* <hr style={{ height: "1px", width: "80vw", border: "none", backgroundColor: "gray" }} /> */}
        </>
    );
}