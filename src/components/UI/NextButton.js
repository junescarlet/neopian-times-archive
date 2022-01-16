import React from 'react';
import { Link, useLocation, useParams } from "react-router-dom";

import Loading from './Loading';

const NextButton = props => {
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
    let nextPiece = getNextPiece(params.pieceId, timesData);

    const location = useLocation();
    let locationArray = location.pathname.split("/");
    let issue = locationArray[1]
    let section = locationArray[2];

    return (
        <div className="text">
    
            {!timesData ?  
                <Loading /> :
                piece !== null ?
                    <Link to={`/${issue}/${section}/${nextPiece.Filename}`}>
                        {/* Next: {nextPiece.Name} */}
                        Next 
                    </Link>
                : <p>No piece!</p>
            }
        </div>
    );
};

export default NextButton;