import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/login">Post a blog</Link> </li>
            </ul>
        </div>
    );
};

export default Header;