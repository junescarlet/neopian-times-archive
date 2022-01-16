import React from 'react';

import './Header.scss';

const Header = props => {
    let {timesData} = props;
    return (
        <div className="header">
            {timesData ? 
            <p>
            {timesData.Neopiandate} | {timesData.Date}
            </p>
            :
                <p>Date Published</p>
            }
            <hr />
        </div>
    );
};

export default Header;