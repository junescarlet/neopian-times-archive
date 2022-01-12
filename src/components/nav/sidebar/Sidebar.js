import React from 'react';
import { Link, useLocation  } from "react-router-dom";

import './Sidebar.scss'

const Sidebar = (props) => {
    let {timesData} = props;
    const location = useLocation();
    let locationArray = location.pathname.split("/");
    let issue = locationArray[1];

    return (
        <nav className="sidebar">
            <ul>
               <li><Link to={`/${issue}`}>Home</Link></li>
               <li><Link to="archives">Archives</Link></li>
               <li><Link to="editorial">Editorial</Link></li>
               <li><Link to="articles">Articles</Link></li>
               <li><Link to="comics">Comics</Link></li>
               <li><Link to="shorts">Short Stories</Link></li>
               <li><Link to="series">New Series</Link></li>
               <li><Link to="cont">Continued Series</Link></li>
               {/* <li><s>Classic Mode</s></li> */}
               {!timesData ? <li>Loading</li> : <li><a href={timesData.Link} >Original</a></li>}
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
            <br /><br /><br /><br />
        </nav>
    );
};

export default Sidebar;