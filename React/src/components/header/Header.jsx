import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-container navbar-light fixed-top">
            <a className="navbar-brand logo text-info" href="/">
                <img src={logo} alt="logo" />
            </a>
            <div className="navbar-toggler" onClick={handleMenuToggle}>
                <HamburgerMenu
                    isOpen={isMenuOpen}
                    menuClicked={handleMenuToggle}
                    width={20}
                    height={15}
                    strokeWidth={2}
                    rotate={0}
                    color="#000"
                    borderRadius={0}
                    animationDuration={0.4}
                    className='hamburger-menu'
                />
            </div>
            <div className={`collapse navbar-collapse navlist ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav mx-auto gap-3">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/property">
                            Property
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/agents">
                            Agents
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/testimonials">
                            Testimonials
                        </a>
                    </li>
                </ul>
                <a className="btn get-info-btn ms-md-3 ms-auto" href="/contact">
                    Get in Touch
                </a>
            </div>
        </nav>
    );
};

export default Header;
