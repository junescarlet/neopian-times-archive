import React from 'react';

const Editorial = props => {
    let { timesData } = props;
    
    return (
        <>
            <h1>Editorial</h1>
            {timesData ? 
            <p>
            <div dangerouslySetInnerHTML={{__html: timesData.Editorial}} />
            </p>
            :
                <p>Loading</p>
            }
        </>
    );
};

export default Editorial;