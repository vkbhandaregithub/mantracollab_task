import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
const Header = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-container navbar-light bg-light fixed-top">
            <a className="navbar-brand logo text-info" href="/">
                MyBroker
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  mx-auto gap-3">

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
                <a className="btn btn-outline-info ms-md-3 ms-auto" href="/contact">
                    Get in Touch
                </a>
            </div>
        </nav>
    )
}

export default Header