import React from 'react';
import { Link } from "react-router-dom";

import './Sidebar.scss'

const Sidebar = (props) => {
    

    return (
        <nav className="sidebar">
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><s>Archives</s></li>
               <li><Link to="editorial">Editorial</Link></li>
               <li><s>Articles</s></li>
               <li><s>Comics</s></li>
               <li><s>Short Stories</s></li>
               <li><s>New Series</s></li>
               <li><s>Continued Series</s></li>
               <li><s>Classic Mode</s></li>
               <li><s>About</s></li>
               <li><s>Contact</s></li>
            </ul>
            <br /><br /><br /><br />
        </nav>
    );
};

export default Sidebar;