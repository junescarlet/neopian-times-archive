import React from 'react';
import { useParams } from "react-router-dom";

import './Comic.scss';


const Comic = props => {
    
    let { timesData } = props;
    let params = useParams();

    
    let getPiece = (id, array) => {
        if (array) {
            return array.find(
                piece => piece.Filename === id
            );
        }
    }
   
    
    let piece = getPiece(params.pieceId, timesData);
    return (
        <div className="comic">
    
            {timesData ?  
                <>
                    <h1> My Comic: {piece.Name}</h1>
                    <p>by {piece.UN[0]} {piece.UN[1]} {piece.UN[2]}</p>
                    <p>{params.pieceId}</p>
                </>
                :
                <p>Loading</p>
            }
        </div>
    );
};

export default Comic;