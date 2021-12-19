import React, { useState,  useEffect } from 'react';

import './Comics.scss';
import Thumbnails from '../../thumbnails/Thumbnails';

const Comics = props => {
    let { timesData } = props;
    //console.log(props);
    //console.log(timesData);

    useEffect(() => {     
          
    }, []);
    
    return (
        <div className="comics">
            <h1>Comics</h1>
            {}
            {timesData ? timesData.map(piece =>
                <Thumbnails key={piece.Filename} sectionData={piece} />
            ) :
            <p>Loading</p>}
        </div>
    );
};

export default Comics;