import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNav.css'

const LeftNav = () => {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setcategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <NavLink
                        to={`/category/${category.id}`}
                        className='text-decoration-none text-secondary'
                        >
                            {category.name}
                        </NavLink>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;