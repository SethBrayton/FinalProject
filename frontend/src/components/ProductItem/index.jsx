import s from './ProductItem.module.css'
import React, { useEffect } from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../store/slices/cartSlice';
import toast, { Toaster } from 'react-hot-toast';



function ProductItem({id,title, price, discont_price, image}) {

    const dispatch = useDispatch()
    const discont_percent = (100 - (discont_price*100/price)).toFixed(1)

    

    const onClickAdd = (e) => {
        e.preventDefault();
        dispatch(addProductToCart({ id, title, price, discont_price, image }));
        toast.success('Added to cart!', {
            duration: 4000,
            position: 'top-right', 
          });
        
    }


    return(
        <div>
            <Toaster 
                toastOptions={{
                style: {
                  padding: '16px',
                  color: '#713200',
                  boxShadow: 'none',
                  border: '1px solid #713200'
                },
                success: {
                    iconTheme: {
                      primary: '#339933',
                      secondary: 'white',
                    },
                  },
              }}/>
            <Link to={`/product/${id}`} className={s.product_item}>
                <div className={s.image_container}>
                     <div className={s.product_picture}>
                        <img src={`http://localhost:3333${image}`} alt={title} />
                        
                        <button  className={s.cart_web_button} onClick={onClickAdd}>
                            Add to cart
                        </button>
                        
                    
                     </div>
                 </div>
            
            <div className={discont_price ? s.price_container : ''} >
                {
                    discont_price ?
                    <>
                        <p className={s.discount_price}>
                                {discont_price}
                            <span className={s.dollar}>$</span> 
                        </p>
                        <p className={s.price}>{price}$ </p>
                        <p className={s.percent}> -{discont_percent}%</p>
                    </>
                    :  <p className={s.normal_price}>
                            {price}
                            <span className={s.dollar}>$</span> 
                        </p>
                }
            </div> 
            
            <p className={s.product_name}>{title}</p>
            <button className={s.cart_mobile_button} onClick={onClickAdd}>
                Add to cart
            </button>
            </Link>
        </div>
    )
}

export default ProductItem