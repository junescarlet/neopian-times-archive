import React from 'react';

//import './Series.scss';
import Thumbnails from '../../thumbnails/Thumbnails';
import Section from '../Section';


const Series = props => {

    let { timesData } = props;
    return (
        <Section>
            <div className="series">
                <h1>New Series</h1>
                {timesData ? timesData.map(piece =>
                    <Thumbnails key={piece.Filename} sectionData={piece} />
                ) :
                <p>Loading</p>}
            </div>
        </Section>
    );
};

export default Series;