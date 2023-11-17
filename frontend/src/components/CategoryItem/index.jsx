import React from 'react';
import s from './CategoryItem.module.css'
import { Link } from 'react-router-dom';

const CategoryItem = ({ id, title, image }) => {


    return (
        <Link className={s.category} to={`/category/${id}`} >
            <img src={`http://localhost:3333${image}`} alt={title} />
            <p>{title}</p>
        </Link>
    );
};

export default CategoryItem;