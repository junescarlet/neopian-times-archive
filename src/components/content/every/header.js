import React from 'react';

import './Header.scss';

const Header = props => {
    let {timesData} = props;
    return (
        <>
            {timesData ? 
            <p>
                {timesData.Neopiandate}
            </p>
            :
                <p>Neopian Date</p>
            }
            <hr />
        </>
    );
};

export default Header;