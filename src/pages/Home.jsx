import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHammer } from 'react-icons/fa';
import Jays from '../../public/images/JaysWoodworksLogo.png';
import '../css/Home.css';

export default function Home() {
    const images = [
        { id: 1, src: '/images/pexels1.jpg' },
        { id: 2, src: '/images/pexels-2.jpg' },
        { id: 3, src: '/images/pexels-3.jpg' },
        { id: 4, src: '/images/pexels-4.jpg' },
        { id: 5, src: '/images/pexels-5.jpg' },
        { id: 6, src: '/images/pexels-6.jpg' },
    ];

    const [currentPositions, setCurrentPositions] = useState([
        { position: 'left', index: 0 },
        { position: 'center', index: 1 },
        { position: 'right', index: 2 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPositions((current) => {
                return current.map((pos) => {
                    if (pos.position === 'left') return { ...pos, position: 'center' };
                    if (pos.position === 'center') return { ...pos, position: 'right' };
                    if (pos.position === 'right') {
                        const nextIndex = (pos.index + 3) % images.length;
                        return { position: 'left', index: nextIndex };
                    }
                    return pos;
                }); 
            });
        }, 4500);
    
        return () => clearInterval(interval);
    }, [images]);

    const getPositionStyles = (position) => {
        switch (position){
            case 'left':
                return{ x: '-170%', scale: 1, opacity: 1};
            case 'center':
                return { x: '0%', scale: 1.5, opacity: 1};
            case 'right':
                return { x: '170%', scale: 1, opacity: 1};
            default:
                return{};
        }
    }; 

    const navigate = useNavigate();
    const handleAbout = () => {
        navigate('/about');
    };
    const handleDesign = () => {
        navigate('/design');
    };
    const handleSocials = () => {
        navigate('/socials');
    };
    const handleInvoice = () => {
        navigate('/invoice');
    };

    const highlightServices = [
        {
            title: 'General Carpentry Services',
            description: 'We specialise in making cabnets along with counter tops together as a whole unit.',
            services: ['Framing and structural work – walls, floors, ceilings, roofs', 'Finish carpentry – baseboards, window and door casings', 'Rough carpentry – formwork, decking, framing for walls and roofs'],
            background: '/images/generalCarpentry.jpg',
        },
        {
            title: 'Repairs and Maintenance',
            description: 'We offer maintenance on fragile or loose items with excellent work giving the product an amazing finish.',
            services: ['Wood rot repair', 'Reinforcement of aging wooden structures'],
            background: '/images/repairsAndMaintenance.jpg',
        },
        {
            title: 'Interior Carpentry',
            description: 'We specialise in making cabnets along with counter tops together as a whole unit.',
            services: ['Built-in furniture – bookcases, entertainment centers, wardrobes', 'Staircase construction and repair', 'Furniture manufacturing and installation', 'Kitchen cupboards and counter tops'],
            background: '/images/interiorCarpentry.jpg',
        },
        {
            title: 'Custom Projects',
            description: 'We specialise in making cabnets along with counter tops together as a whole unit.',
            services: ['Custom cabinetry – kitchen, bathroom, and storage units', 'Furniture building and restoration', 'Handcrafted doors, gates and frames'],
            background: '/images/customCarpentry.jpg',
        }
    ];

    return (
        <>
        <div className="homeContent">
            <div className="logoImage">
                <img className="image" src={Jays}/>
                <h2 className="companyName">Jay's Woodworks</h2>
                <hr style={{height: "1px", width: "80vw", border: "none", backgroundColor: "gray"}}/>
            </div>
            <div className="carouselOutsideDiv">
                <div className="carousel">
                    {currentPositions.map(({ position, index}) => (
                        <motion.div
                            key={images[index].id}
                            className="individualImage"
                            initial={getPositionStyles(position)}
                            animate={getPositionStyles(position)}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={images[index].src} alt="carousel-img" style={{ width: '100%', height: '100%' }} />
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="craftingCaption">
                <h2 style={{color: 'black',textShadow: '10px 5px 10px rgba(0, 0, 0, 0.493)', fontStyle: 'italic'}}>"Crafting Your Vision in Wood"</h2>
                <div className="companyIntro">
                    <h3> Welcome to <span style={{color: "orange"}}>Jay's Woodworks,</span> your trusted partner in custom carpentry and woodworking solutions. Building the best fitted furniture for your space, bringing your ideas to life.</h3>
                </div>
            </div>
            <div className="browseUs">
                <h2>Browse More About Us</h2>
                <div className="browseBtns">
                    <button id="button1" onClick={handleAbout}>About Us</button>
                    <button id="button2" onClick={handleDesign}>Our Designs</button>
                    <button id="button3" onClick={handleSocials}>Socials</button>
                </div>
            </div>
            <div className="offeredServices">
                <div className="offeredServicesHeading">
                    <h1>Our Offered Services</h1>
                </div>
            <div className="highlightServices">
                {highlightServices.map((service, index) => (
                    <div key={index} className="serviceItem" style={{backgroundImage: `url(${service.background})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '25px'}}>
                        <div className="serviceItemTitleDes">
                            <h1>{service.title}</h1>
                            <h4>{service.description}</h4>
                        </div>
                        {service.services?.length > 0 && (
                            <div className="serviceItemList">
                                {service.services.map((item, i) => (
                                    <div key={i} className="singleService">
                                        <FaHammer style={{ marginRight: '10px', color: 'orange'}}/>
                                        <p style={{display: 'inline'}}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            </div>
            <div className="qouteSection">
                <h1>Get A Free Quote!</h1>
                <button id="button4" onClick={handleInvoice}>Click here</button>
            </div>
        </div>
        </>
    );
  }