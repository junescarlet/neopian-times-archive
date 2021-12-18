import React, { useState,  useEffect } from 'react';

import './Comics.scss';

const Comics = props => {
    let { timesData } = props;
    //console.log(props);
    console.log(timesData);

    useEffect(() => {     
          
    }, []);
    
    return (
        <div className="comics">
            <h1>Comics</h1>
            {}
            {timesData ? timesData.map(piece =>
                <div key={piece.Filename} >
                    <h2>{piece.Name}</h2>
                    <p>{piece.Desc}</p>
                </div>
            ) :
            <p>Loading</p>}
        </div>
    );
};

export default Comics;