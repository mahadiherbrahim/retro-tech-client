import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../retro-tech.png'
import './Header.css'
const Header = () => {
    return (
        <header className="p-2">
            <nav className="navbar navbar-expand-lg navbar-light nav-right">
                <div className="container fuel-nav">
                    <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-navicon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact Us</Link>
                            </li>
                            <div className="registration">
                                <Link to="/admin"><button className="btn nav-sign-up" type="button">Admin</button></Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;