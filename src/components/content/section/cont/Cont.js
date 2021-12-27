import React from 'react';

//import './Cont.scss';
import Thumbnails from '../../thumbnails/Thumbnails';
import Section from '../Section';


const Cont = props => {

    let { timesData } = props;
    return (
        <Section>
            <div className="cont">
                <h1>Continued Series</h1>
                {timesData ? timesData.map(piece =>
                    <Thumbnails key={piece.Filename} sectionData={piece} />
                ) :
                <p>Loading</p>}
            </div>
        </Section>
    );
};

export default Cont;