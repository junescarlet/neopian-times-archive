import React from 'react';
import { useParams } from "react-router-dom";

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
                    <h1>{piece.Name}</h1>
                    <p>by {piece.UN[0]} {piece.UN[1]} {piece.UN[2]}</p>
                    <p>{params.pieceId}</p>
                    <img alt={piece.Name} src={piece.Image} />
                    <div dangerouslySetInnerHTML={{__html: piece.Piece}} />
                    {}
                </>
                :
                <p>Loading</p>
            }
        </div>
    );
};

export default Comic;