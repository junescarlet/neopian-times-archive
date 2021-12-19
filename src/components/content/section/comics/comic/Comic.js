import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './Comic.scss';


const Comic = props => {
    //const [piece, setPiece] = useState("");
    let { timesData } = props;
    let params = useParams();

    //console.log(timesData);
    //console.log(params);

    // export function getInvoice(number) {
    //     return invoices.find(
    //       invoice => invoice.number === number
    //     );
    //   }
    // useEffect(() => {
    //     document.title = `You clicked ${count} times`;
    //   }, [count]);
      
   // useEffect(() => {
        // let getPiece = (id) => {
        //     return timesData.find(
        //         comic => comic.Filename === id
        //     );
        // }
        // let getPiece = (id) => {
        //     setPiece(timesData.find(
        //         comic => comic.Filename === id
        //     ));
        // }
        // setPiece(timesData.find(
        //     comic => comic.Filename === id
        // ));
    //}, []);

    let getPiece = (id, array) => {
        return array.find(
            piece => piece.Filename === id
        );
    }
   
    
    let piece = getPiece(params.pieceId, timesData);
    //setPiece(getPiece(params.pieceId));
    //getPiece(params.pieceId);
    //console.log(piece);
    return (
        <div className="comic">
    
            {timesData ?  
                <>
                    <h1> My Comic: {piece.Name}</h1>
                    <p>{params.pieceId}</p>
                </>
                :
                <p>Loading</p>
            }
        </div>
    );
};

export default Comic;