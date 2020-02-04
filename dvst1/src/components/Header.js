import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header className="Header">
            <div className="mainNav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="resources">Resources</Link></li>
                    <li><Link to="about">About Us</Link></li>
                    <li><Link to="register">Register</Link></li>
                    <li><Link to="login">login</Link></li>
                </ul>
            </div>
        </header>
    )
};