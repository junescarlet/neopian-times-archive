import React from 'react';
import Loading from '../../UI/Loading';

//import './Archives.scss';



const Archives = props => {

    let { timesData } = props;
    return (
            <div className="archives">
                <h1>Archives</h1>
                {timesData ? 
                    <>
                        
                    </> 
                    :
                <Loading />}
            </div>
    );
};

export default Archives;