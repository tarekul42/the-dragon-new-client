import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla incidunt vitae quidem libero atque, corporis amet laborum nihil ipsum voluptates laboriosam illo, aliquam quibusdam expedita officia perferendis voluptatum totam quos.</p>
            <p>Go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;