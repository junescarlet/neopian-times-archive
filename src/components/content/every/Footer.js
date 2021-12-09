import React from 'react';

import './Footer.scss';

const Footer = props => {
    var currentYear = new Date().getFullYear()
    
    return (
        <div className="footer">
            <hr />
            <p>
                &copy; 1999-{currentYear} Neopets, Inc. All rights reserved.
            </p>
            
        </div>
    );
};

export default Footer;