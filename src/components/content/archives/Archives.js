import React from 'react';
import Loading from '../../UI/Loading';

import { NavLink } from "react-router-dom";

import './Archives.scss';



const Archives = props => {  

    let { issueArray } = props;

    let activeStyle = {
        color: "#214D7B",
        textDecoration: "none",
        cursor: "default",
        backgroundColor: "#DFECF7",
      };
    
      //let activeClassName = "underline"
    return (
            <div className="archives">
                <h1>Archives</h1>
                <ul>
                {issueArray ? issueArray.map(piece =>
                    <li key={piece.Edition}>
                        <NavLink to={`/${piece.Edition}`} style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        } >
                            Issue #{piece.Edition} | {piece.Neopiandate} | {piece.Date}
                        </NavLink>
                    </li>
                ) :
                <Loading />}
                </ul>
            </div>
    );
};

export default Archives;