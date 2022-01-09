import React from 'react';
import { useParams } from "react-router-dom";

import Loading from '../../../../UI/Loading';
import PrevButton from '../../../../UI/PrevButton';
import NextButton from '../../../../UI/NextButton';

import './Comic.scss';


const Comic = props => {
    let { timesData } = props;
    let params = useParams();

    
    let getPiece = (id, array) => {
        if (array) {
            let result = array.find(
                piece => piece.Filename === id
            );
            return result ? result : null;
        }
    }
    
    let piece = getPiece(params.pieceId, timesData);
 
    return (
        <div className="comic">
    
            {!timesData ? 
                <Loading /> :
                piece !== null ? 
                    <>
                    <PrevButton timesData={timesData} />
                    | 
                    <NextButton timesData={timesData} />
                        <h1>{piece.Name}</h1>
                        <p>by {piece.UN[0]} {piece.UN[1]} {piece.UN[2]}</p>
                        <p>{params.pieceId}</p>
                        {/* <img alt="{piece.Name}" src={`archive/NT_archive_946/946/comics/${piece.Filename}.jpg`} /> */}
                        <img alt="{piece.Name}" src={piece.Piece} 
                        onError={(e)=>{e.target.onerror = null; 
                        e.target.src=`archive/NT_archive_946/946/comics/${piece.Filename}.gif`}} /> 
                        {/* Uses gif if there's no jpg. Temporary solution */}
                    </>
                    : <p>No piece!</p>  
            }
        </div>
    );
};

export default Comic;