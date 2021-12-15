import React from 'react';
import { useParams } from "react-router-dom";

import './Section.scss';
import Thumbnails from '../thumbnails/Thumbnails';

// export function getInvoice(number) {
//     return invoices.find(
//       invoice => invoice.number === number
//     );
//   }
  


const Section = props => {
    let {timesData} = props;
    let params = useParams();
    
    function getSection(id) {
        return timesData.find(
            section => timesData.Object === id
        );
    }
    return (
        <div className="section">
            <h1>{params.sectionId}</h1>
            
            {Object.keys(timesData).map((keyName, i) => (
                <div key={keyName}>
                    <h1>{keyName}</h1>
                    {timesData[keyName].map((piece) => 
                    <>
                    <Thumbnails key={piece.Filename} sectionData={piece} />
                    {/* {piece.Name} */}
               </>
                    )}
                    
{/*               
                    {timesData[keyName].map((piece) => 
                    <div key={piece.Filename}>
                        <h2>{piece.Name}</h2>
                        <p>{piece.Desc}</p>
                        <hr />
                    </div>
                    )} */}
                </div>
            ))}
            
            <p>
            </p>
            
        </div>
    );
};

export default Section;