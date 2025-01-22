import React, { useState } from "react";
import { Link } from "react-router-dom";
import avtar2 from "../imgs/avtar2.png";
import "../css/navbar.css";
import resume from "../modules/Dilip Kushwaha Resume-2.pdf";

function Navbar() {
    const [isResponsive, setIsResponsive] = useState(false);

    const toggleNavbar = () => {
        setIsResponsive((prevState) => !prevState);
    };

    return (
        <div className="nav_main">
            {/* Logo Section */}
            <div className="_nav_logo">
                <img className="nav_img_logo" src={avtar2} alt="Logo" />
            </div>

            {/* Navigation Section */}
            <div className={`desktop ${isResponsive ? "show" : ""}`}>
                <ul className={`topnav ${isResponsive ? "responsive" : ""}`} id="myTopnav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#Service">Service</a>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <a href={resume} download="Dilip Kushwaha Resume.pdf" rel="noopener noreferrer">
                            Download Resume
                        </a>
                    </li>
                </ul>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="navicon" onClick={toggleNavbar}>
                <i className="fa fa-bars"></i>
            </div>
        </div>
    );
}

export default Navbar;
