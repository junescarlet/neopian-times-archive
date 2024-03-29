import React from 'react';
import { useParams } from "react-router-dom";

import Loading from '../../../UI/Loading';
import PrevButton from '../../../UI/PrevButton';
import NextButton from '../../../UI/NextButton';

import './Text.scss';

const Text = props => {
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
    
    // let getPrevPiece = (id, array) => {
    //     if (array) {
    //         let currentIndex = array.findIndex(
    //             piece => piece.Filename === id
    //         );
    //         if (currentIndex === 0) {
    //             return array[array.length - 1];
    //         } else {
    //             return array[currentIndex - 1];
    //         }
            
    //     }
    // }
    // let getNextPiece = (id, array) => {
    //     if (array) {
    //         let currentIndex = array.findIndex(
    //             piece => piece.Filename === id
    //         );
    //         if (currentIndex === array.length - 1) {
    //             return array[0];
    //         } else {
    //             return array[currentIndex + 1];
    //         }
            
    //     }
    // }
    
    let piece = getCurrentPiece(params.pieceId, timesData);
    // let prevPiece = getPrevPiece(params.pieceId, timesData);
    // let nextPiece = getNextPiece(params.pieceId, timesData);

    // const location = useLocation();
    // let locationArray = location.pathname.split("/");
    // let issue = locationArray[1]
    // let section = locationArray[2];

    return (
        <div className="text">
    
            {!timesData ?  
                <Loading /> :
                piece !== null ?
                    <>
                    <PrevButton timesData={timesData} /> | <NextButton timesData={timesData} />
                        <h1>{piece.Name}</h1>
                        <p>by {piece.UN[0]} {piece.UN[1]} {piece.UN[2]}</p>
                        <img width="150px" height="150px" alt={piece.Name} src={piece.Image} />
                        <div className="story" dangerouslySetInnerHTML={{__html: piece.Piece}} />
                        <PrevButton timesData={timesData} /> | <NextButton timesData={timesData} />
                    </>
                : <p>No piece!</p>
            }
        </div>
    );
};

export default Text;