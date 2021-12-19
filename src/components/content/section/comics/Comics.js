import React from 'react';
import { Outlet } from 'react-router-dom';

import './Comics.scss';
import Thumbnails from '../../thumbnails/Thumbnails';


const Comics = props => {
    let { timesData } = props;
    
    return (
        <div className="comics">
            <h1>Comics</h1>
            <Outlet />
            {timesData ? timesData.map(piece =>
                <Thumbnails key={piece.Filename} sectionData={piece} />
            ) :
            <p>Loading</p>}
        </div>
    );
};

export default Comics;