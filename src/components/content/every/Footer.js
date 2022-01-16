import React from 'react';
import { Link } from "react-router-dom";

import './Footer.scss';

const Footer = props => {
    var currentYear = new Date().getFullYear()
    
    return (
        <div className="footer">
            <p>
                &copy; 1999-{currentYear} Neopets, Inc. All rights reserved.
                <br />
                <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
            </p>
            
        </div>
    );
};

export default Footer;