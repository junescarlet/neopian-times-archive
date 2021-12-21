import React from 'react';
import { Link } from "react-router-dom";

import './Home.scss';

const Home = props => {
    //let {timesData} = props;
    
    return (
        <>
            <h1>Home</h1>
            <ul>
               <li><Link to="editorial">Editorial</Link></li>
               <li><Link to="articles">Articles</Link></li>
               <li><Link to="comics">Comics</Link></li>
               <li><s>Short Stories</s></li>
               <li><s>New Series</s></li>
               <li><s>Continued Series</s></li>
            </ul>
             {/* {Object.keys(timesData).map((keyName, i) => (
                 <li key={keyName}>
                 <Link to={`/section/${keyName}`}>
                       {keyName}
                    </Link>
                </li>
             ))} */}
        </>
    );
};

export default Home;