import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaHome, FaInfoCircle, FaRulerCombined, FaShareAlt, FaPhone, FaFileInvoice} from 'react-icons/fa';
import './css/Sidebar.css';

export default function Sidebar(){
    return(
        <>
        <div className="">
            <nav>
                <NavLink to="/" end className="nav-link">
                    <FaHome className="homeIcon"/>Home
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    <FaInfoCircle className="aboutIcon"/>About
                </NavLink>
                <NavLink to="/design" className="nav-link">
                    <FaRulerCombined className="designIcon"/>Design
                </NavLink>
                <NavLink to="/socials" className="nav-link">
                    <FaShareAlt className="socialsIcon"/>Social Platforms
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    <FaPhone className="contactIcon"/>Contact
                </NavLink>
                <NavLink to="/invoice" className="nav-link">
                    <FaFileInvoice className="invoiceIcon"/>Invoice
                </NavLink>
            </nav>
        </div>
        </>
    );
}