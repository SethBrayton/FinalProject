
import { Link, useParams } from 'react-router-dom';
import s from './CategoryPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductsFilter from '../../components/ProductsFilter';
import ProductItem from '../../components/ProductItem';
import { fetchSingleCategory } from '../../asyncActions/categories';
import { fetchProductList } from '../../asyncActions/products';

//в слайсе продуктов добавить загрузку товаров именно из категории по ее айди, подружать на этой странице. далее фильтр должен работать нормально!


function CategoryPage() {

    const { id: categoryId } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products)

    const title = useSelector(state => 
        state.categories.categories.find(category => category.id === Number(categoryId))?.title
    );

    

    useEffect(() => {
        if (title) {
            document.title = `Category: ${title}`;
        }
    }, [title]);

    useEffect(() => {
        if (categoryId) {
            dispatch(fetchProductList(Number(categoryId)));
            dispatch(fetchSingleCategory(categoryId))
        }
    }, [dispatch, categoryId]);

    const visibleProducts = products.filter(product => product.isShow);


    return (
        <div className={s.page}>
            <h1 className={s.title}>{title}</h1>
            <ProductsFilter categoryId={categoryId}/>
            <div className={s.products_container}>
                {visibleProducts.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <ProductItem {...product} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryPage