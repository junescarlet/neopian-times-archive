import React from 'react';
import { useParams } from "react-router-dom";
//import { existsSync } from 'fs';

import './Comic.scss';


const Comic = props => {
    let { timesData } = props;
    let params = useParams();
    // const fs = require("fs");

    
    let getPiece = (id, array) => {
        if (array) {
            return array.find(
                piece => piece.Filename === id
            );
        }
    }
    
    // function getFileExtension(filename) {
    //     //return filename.split('.').pop()
    //     if (fs.existsSync(`{filename}.jpg`)) {
    //         return "jpg";
    //     } else {
    //         return "gif";
    //     }
    // }

    
    
    let piece = getPiece(params.pieceId, timesData);
    // timesData && console.log(getFileExtension(`archive/NT_archive_946/946/comics/${piece.Filename}`));
    return (
        <div className="comic">
    
            {timesData ?  
                <>
                    <h1>{piece.Name}</h1>
                    <p>by {piece.UN[0]} {piece.UN[1]} {piece.UN[2]}</p>
                    <p>{params.pieceId}</p>
                    {/* <img alt="{piece.Name}" src={`archive/NT_archive_946/946/comics/${piece.Filename}.jpg`} /> */}
                    <img alt="{piece.Name}" src={piece.Piece} 
                    onError={(e)=>{e.target.onerror = null; 
                    e.target.src=`archive/NT_archive_946/946/comics/${piece.Filename}.gif`}} /> 
                    {/* Uses gif if there's no jpg. Temporary solution */}
                </>
                :
                <p>Loading</p>
            }
        </div>
    );
};

export default Comic;