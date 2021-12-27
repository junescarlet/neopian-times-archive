import React from 'react';

//import './Shorts.scss';
import Thumbnails from '../../thumbnails/Thumbnails';
import Section from '../Section';


const Shorts = props => {

    let { timesData } = props;
    return (
        <Section>
            <div className="shorts">
                <h1>Short Stories</h1>
                {timesData ? timesData.map(piece =>
                    <Thumbnails key={piece.Filename} sectionData={piece} />
                ) :
                <p>Loading</p>}
            </div>
        </Section>
    );
};

export default Shorts;