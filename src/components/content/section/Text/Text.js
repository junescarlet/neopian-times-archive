import React from 'react';
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

import Loading from '../../../UI/Loading';

const Comic = props => {
    let { timesData } = props;
    let params = useParams();      
    
    let getCurrentPiece = (id, array) => {
        if (array) {
            return array.find(
                piece => piece.Filename === id
            );
        }
    }
    
    let getPrevPiece = (id, array) => {
        if (array) {
            let currentIndex = array.findIndex(
                piece => piece.Filename === id
            );
            if (currentIndex === 0) {
                return array[array.length - 1];
            } else {
                return array[currentIndex - 1];
            }
            
        }
    }
    let getNextPiece = (id, array) => {
        if (array) {
            let currentIndex = array.findIndex(
                piece => piece.Filename === id
            );
            if (currentIndex === array.length - 1) {
                return array[0];
            } else {
                return array[currentIndex + 1];
            }
            
        }
    }
    
    let piece = getCurrentPiece(params.pieceId, timesData);
    let prevPiece = getPrevPiece(params.pieceId, timesData);
    let nextPiece = getNextPiece(params.pieceId, timesData);

    const location = useLocation();
    let locationArray = location.pathname.split("/");
    let issue = locationArray[1]
    let section = locationArray[2];

    return (
        <div className="comic">
    
            {timesData ?  
                <>
                <Link to={`/${issue}/${section}/${prevPiece.Filename}`}>
                       Prev: {prevPiece.Filename}
                </Link>
                 | 
                <Link to={`/${issue}/${section}/${nextPiece.Filename}`}>
                       Next: {nextPiece.Filename}
                </Link>
                    <h1>{piece.Name}</h1>
                    <p>by {piece.UN[0]} {piece.UN[1]} {piece.UN[2]}</p>
                    <p>{params.pieceId}</p>
                    <img width="150px" height="150px" alt={piece.Name} src={piece.Image} />
                    <div dangerouslySetInnerHTML={{__html: piece.Piece}} />
                    {}
                </>
                :
                <Loading />
            }
        </div>
    );
};

export default Comic;