
import { useDispatch, useSelector } from 'react-redux';
import s from './ProductListPage.module.css'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ProductItem from '../../components/ProductItem';
import ProductsFilter from '../../components/ProductsFilter';
import { fetchProductList } from '../../asyncActions/products';


function ProductListPage() {

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch();

    const {id} = useParams()

    useEffect(() => {
        document.title = "Catalog"
    },[])

    useEffect(() => {
        dispatch(fetchProductList());
      }, [dispatch]);

    const visibleProducts = products.filter(product => product.isShow);
    

    return (
        <div className={s.page}>
            <h1 className={s.title}>All products </h1>
            <ProductsFilter/>
            <div className={s.products_container}>
                {
                    visibleProducts.map(elem => <Link to={`/product/${elem.id}`} key={elem.id}> <ProductItem {...elem}/> </Link>)
                }
            </div>
        
        </div>
    )
}

export default ProductListPage