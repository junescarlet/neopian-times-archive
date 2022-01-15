import React from 'react';
import Loading from '../../UI/Loading';

import { NavLink } from "react-router-dom";

//import './Archives.scss';



const Archives = props => {  

    let { issueArray } = props;

    let activeStyle = {
        color: "green",
        textDecoration: "none",
        cursor: "default",
      };
    
      let activeClassName = "underline"

    //console.log(issueArray)
    return (
            <div className="archives">
                <h1>Archives</h1>
                {issueArray ? issueArray.map(piece =>
                    <div key={piece.Edition}>
                        <li><NavLink to={`/${piece.Edition}`} style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        } >
                            Issue {piece.Edition}
                        </NavLink></li>
                    </div>
                ) :
                <Loading />}
            </div>
    );
};

export default Archives;