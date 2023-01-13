import React from 'react';
import Loading from '../../../UI/Loading';

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
                <Loading />}
            </div>
        </Section>
    );
};

export default Shorts;