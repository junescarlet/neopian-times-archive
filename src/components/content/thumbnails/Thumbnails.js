import React from 'react';

import './Thumbnails.scss';

const Thumbnails = props => {
    let { sectionData } = props;
    //console.log(props);
    //console.log(sectionData);

    
    return (
        <div className="thumbnails">
            <div key={sectionData.Filename}>
                <h2>{sectionData.Name}</h2>
                <img src={sectionData.Image} />
                <p>{sectionData.Desc}</p>
                <p>by {sectionData.UN[0]} {sectionData.UN[1]} {sectionData.UN[2]}</p>
                <hr />
            </div>
            
        </div>
    );
};

export default Thumbnails;