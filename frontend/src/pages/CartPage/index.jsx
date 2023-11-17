
import { useEffect } from 'react'
import s from './CartPage.module.css'
import { useDispatch, useSelector } from 'react-redux'

import CartProductItem from '../../components/CartProductItem'
import { Link, useNavigate } from 'react-router-dom'
import CartOrderForm from '../../components/CartOrderForm'
import { selectCartItems } from '../../store/slices/cartSlice'
import { fetchProductList } from '../../asyncActions/products'
import EmptyCard from '../../components/EmptyCard'


function CartPage() {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems);
    const productsLoaded = useSelector(state => state.products.products.length > 0);
    const navigate = useNavigate()

    const totalPrice = cartItems.reduce((total, item) => {
        return total + (item.discont_price || item.price) * item.count;
    }, 0).toFixed(2);



    useEffect(() => {
        document.title = "Shopping cart"
    }, [])

    useEffect(() => {
        if (!productsLoaded) {
            dispatch(fetchProductList()); 
        }
    }, [dispatch, productsLoaded]);


    return (
        <div className={s.cart_page}>
            <h1 className={s.cart_title}>Shopping cart</h1>
            
                {
                    cartItems.length ? (
                        <div className={s.container}>
                        <div className={s.cart_items}>
                            <p className={s.link_step_back} onClick={() => navigate(-1)}>
                                Back to the store &rsaquo;
                            </p>
                            <div className={s.cart_items_container}>
                                {
                                    cartItems.map(item => (
                                        <CartProductItem key={item.id} {...item} />
                                    ))
                                }
                            </div>
                        </div> 
                        <CartOrderForm totalPrice={totalPrice}/>
                        </div>
                        
                        
                    ) : <EmptyCard/>
                }
                
            
        </div>
    );
}

export default CartPage