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
                        <p>{sectionData.Desc}</p>
                        <hr />
                    </div>
         
            <p>
            </p>
            
        </div>
    );
};

export default Thumbnails;