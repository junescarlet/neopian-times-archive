import React from 'react';

import './Comics.scss';
import Thumbnails from '../../thumbnails/Thumbnails';
import Section from '../Section';


const Comics = props => {
    let { timesData } = props;
    return (
        <Section>
            <div className="comics">
                <h1>Comics</h1>
                {timesData ? timesData.map(piece =>
                    <Thumbnails key={piece.Filename} sectionData={piece} />
                ) :
                <p>Loading</p>}
            </div>
        </Section>
    );
};

export default Comics;