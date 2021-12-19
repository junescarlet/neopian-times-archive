import React from 'react';
import { Link, Outlet } from "react-router-dom";

import './Home.scss';

const Home = props => {
    let {timesData} = props;
    
    return (
        <>
            <h1>Home</h1>
             {Object.keys(timesData).map((keyName, i) => (
                 <li key={keyName}>
                 <Link to={`/section/${keyName}`}>
                       {keyName}
                    </Link>
                </li>
             ))}
        </>
    );
};

export default Home;