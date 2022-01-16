import React from 'react';
import { Link, useLocation, useParams } from "react-router-dom";

import Loading from './Loading';

const PrevButton = props => {
    let { timesData } = props;
    let params = useParams();      
    
    let getCurrentPiece = (id, array) => {
        if (array) {
            let result = array.find(
                piece => piece.Filename === id
            );
            return result ? result : null;
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
    
    let piece = getCurrentPiece(params.pieceId, timesData);
    let prevPiece = getPrevPiece(params.pieceId, timesData);

    const location = useLocation();
    let locationArray = location.pathname.split("/");
    let issue = locationArray[1]
    let section = locationArray[2];

    return (
        <div className="text">
    
            {!timesData ?  
                <Loading /> :
                piece !== null ?
                    <Link to={`/${issue}/${section}/${prevPiece.Filename}`}>
                        {/* Prev: {prevPiece.Name} */}
                         Prev
                    </Link>
                : <p>No piece!</p>
            }
        </div>
    );
};

export default PrevButton;