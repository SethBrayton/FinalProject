
import { useDispatch, useSelector } from 'react-redux';
import s from './SaleProductsListPage.module.css'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ProductsFilter from '../../components/ProductsFilter';
import ProductItem from '../../components/ProductItem';
import { fetchProductList } from '../../asyncActions/products';


function SaleProductsListPage() {

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch();

    const {id} = useParams()

    useEffect(() => {
        document.title = "Sale"
        dispatch(fetchProductList());
    },[dispatch])


    const productsOnSale = products.filter(product => product.isShow && product.discont_price != null);


    return (
        <div className={s.page}>
          <h1 className={s.title}>Products with sale</h1>
            <ProductsFilter type={'sale'}/>
            <div className={s.products_container}>
                {
                    productsOnSale.map(elem => <Link to={`/product/${elem.id}`}> <ProductItem key={elem.id} {...elem}/> </Link>)
                }
            </div>
        
        </div>
    )
}

export default SaleProductsListPage