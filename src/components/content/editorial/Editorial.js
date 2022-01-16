import React from 'react';
import Loading from '../../UI/Loading';

import './Editorial.scss'

const Editorial = props => {
    let { timesData } = props;
    
    return (
        <>
            <h1>Editorial</h1>
            {timesData ? 
            <p>
            <div className="editorial" dangerouslySetInnerHTML={{__html: timesData.Editorial}} />
            </p>
            :
                <Loading />
            }
        </>
    );
};

export default Editorial;