import React from 'react';
import Loading from '../../../UI/Loading';

//import './Articles.scss';
import Thumbnails from '../../thumbnails/Thumbnails';
import Section from '../Section';


const Articles = props => {

    let { timesData } = props;
    //console.log(timesData);
    return (
        <Section timesData={timesData} >
            <div className="articles">
                <h1>Articles</h1>
                {timesData ? timesData.map(piece =>
                    <Thumbnails key={piece.Filename} sectionData={piece} />
                ) :
                <Loading />}
            </div>
        </Section>
    );
};

export default Articles;