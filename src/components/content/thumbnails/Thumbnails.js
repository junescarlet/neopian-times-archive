import React from 'react';
import { Link } from "react-router-dom";

import './Thumbnails.scss';

const Thumbnails = props => {
    let { sectionData } = props;

    let authorList = array => {
        let list = "";
        for (let i = 0; i < array.length; i++) {
            list += array[i] + " ";
        }
        return list;

        // piece.UN.forEach((x) => text += x + " ")
    };

    
    return (
        <div className="thumbnails">
            <hr />
            <div key={sectionData.Filename}>
                <Link to={`${sectionData.Filename}`}>
                    <img alt={sectionData.Name} src={sectionData.Image} />
                    <h2>{sectionData.Name}</h2>
                </Link>
                <br />
                
                <p>{sectionData.Desc}</p>
                <p>by {authorList(sectionData.UN)}</p>
                {/* <p>by {sectionData.UN[0]} {sectionData.UN[1]} {sectionData.UN[2]}</p> */}
                
            </div>
            
        </div>
    );
};

export default Thumbnails;