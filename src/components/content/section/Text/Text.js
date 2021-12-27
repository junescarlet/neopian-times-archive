import React from 'react';
import { useParams } from "react-router-dom";
//import Page from './test.html'

//import html from "./file.html";

//var __html = require(`archive/NT_archive_946/946/articles/585474.html`);


//import './Text.scss';


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
    
    function createMarkup(Filename) {
        if(timesData) {
            return {__html: `archive/NT_archive_946/946/articles/${Filename}.html`};
        }
        
      }

      

    return (
        <div className="comic">
    
            {timesData ?  
                <>
                    <h1>{piece.Name}</h1>
                    <p>by {piece.UN[0]} {piece.UN[1]} {piece.UN[2]}</p>
                    <p>{params.pieceId}</p>
                    <img alt={piece.Name} src={piece.Image} />
                    {/* <img alt="{piece.Name}" src={`archive/NT_archive_946/946/comics/${piece.Filename}.jpg`} /> */}
                    {/* {`archive/NT_archive_946/946/articles/${piece.Filename}.html`} */}
                    <div dangerouslySetInnerHTML={createMarkup(piece.Filename)} />
                </>
                :
                <p>Loading</p>
            }
        </div>
    );
};

export default Comic;