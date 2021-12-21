import { React }from 'react';
//import { useParams } from "react-router-dom";

import './Section.scss';
//import Thumbnails from '../thumbnails/Thumbnails';

  


const Section = props => {
    // let {timesData} = props;
    // let params = useParams();
    
    
    // let getSection = (id) => {
    //     for (let item in timesData) {
    //         if (item === id) {
    //             return timesData[item];
    //         }
    //     }
    // }

    // let section = getSection(params.sectionId);
    return (
        // <div key={section} className="section">
        //     <h1>{params.sectionId}</h1>
        //     {section ? section.map((piece, i) => 
        //         <div key={[piece].Filename} >
        //             <Thumbnails key={piece.Filename} sectionData={piece} />
        //         </div>
        //     ): <p>Loading</p>}
        // </div>

        <div className='section'>
            {props.children}
        </div>
    );
};

export default Section;