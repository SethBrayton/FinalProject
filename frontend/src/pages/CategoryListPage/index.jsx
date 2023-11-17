import s from './CategoryListPage.module.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryItem from '../../components/CategoryItem'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../../asyncActions/categories'



function CategoryListPage() {

    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch();

    const id = useParams()
   

    useEffect(() => {
        document.title = "All categories"
    },[])

    useEffect(() => {
        dispatch(fetchCategories());
      }, []);

    return (
        <div className={s.categories_page}>
            <h1 className={s.title}>Categories</h1>
            <div className={s.categories}>
                {
                    categories.map(elem => <Link to={`/category/${elem.id}`} key={elem.id}> <CategoryItem {...elem}/> </Link>)
                }
            </div>
        </div>
    );
};

export default CategoryListPage