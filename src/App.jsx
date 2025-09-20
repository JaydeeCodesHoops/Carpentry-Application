import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Design from './pages/Design';
import Socials from './pages/Socials';
import Contact from './pages/Contact';
import Invoice from './pages/Invoice';
import Footer from '../src/components/Footer.jsx';
import Header from './components/Header.jsx';
import { teamMembers, differences } from './components/AboutArrays.jsx';
import { designs, process } from './components/AboutArrays.jsx';
import './css/App.css';

export default function App() {
    return (
        <>
            <div className="main">
                <Header />
                <div className="Page">
                    <div className='bodyContent'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About teamMembers={teamMembers} differences={differences} />} />
                            <Route path="/design" element={<Design designs={designs} process={process} />} />
                            <Route path="/socials" element={<Socials />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/invoice" element={<Invoice />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}