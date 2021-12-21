import React from 'react';

//import './Articles.scss';
import Thumbnails from '../../thumbnails/Thumbnails';
import Section from '../Section';


const Articles = props => {
    let { timesData } = props;
    return (
        <Section>
            <div className="articles">
                <h1>Comics</h1>
                {timesData ? timesData.map(piece =>
                    <Thumbnails key={piece.Filename} sectionData={piece} />
                ) :
                <p>Loading</p>}
            </div>
        </Section>
    );
};

export default Articles;