import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="the drago news logo" />
                <p className='text-secondary'><small>Journalism Without Fear of Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;