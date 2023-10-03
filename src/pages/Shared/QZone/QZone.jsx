import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary text-center py-4 m-4'>
            <h4>QZone</h4>
            <div>
                <img src={QZone1} alt="qzone 1 picture" />
                <img src={QZone2} alt="qzone 2 picture" />
                <img src={QZone3} alt="qzone 3 picture" />
            </div>
        </div>
    );
};

export default QZone;