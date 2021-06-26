import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../../images/logo.png';
import './AdminNav.css'
const AdminNav = () => {
    return (
        <div className="p-4 adminPanel">
        {/* <img src={logo} alt=""/> */}
            <ul>
                <li className="sidebar-menu">
                    <Link to="/"  className="sidebar-menu-link">Home</Link>
                </li>
                <li className="sidebar-menu">
                    <Link to="/manageBlog"  className="sidebar-menu-link">Manage Posts</Link>
                </li>
                <li className="sidebar-menu">
                    <Link to="/addPost" className="sidebar-menu-link">Add Post</Link>
                </li>
            </ul>
            
        </div>
    );
};

export default AdminNav;