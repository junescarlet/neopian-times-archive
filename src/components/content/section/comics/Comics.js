import React from 'react';

import './Comics.scss';
import Thumbnails from '../../thumbnails/Thumbnails';
import Section from '../Section';
import Loading from '../../../UI/Loading';


const Comics = props => {
    let { timesData } = props;
    return (
        <Section>
            <div className="comics">
                <h1>Comics</h1>
                {timesData ? timesData.map(piece =>
                    <Thumbnails key={piece.Filename} sectionData={piece} />
                ) :
                <Loading />}
            </div>
        </Section>
    );
};

export default Comics;