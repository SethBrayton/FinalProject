
import { useParams } from 'react-router-dom';
import s from './ProductPage.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotFoundPage from '../NotFoundPage';
import { fetchSingleProduct } from '../../asyncActions/products';
import { addProductToCart } from '../../store/slices/cartSlice';
import toast, { Toaster } from 'react-hot-toast';


function ProductPage() {

    const {id} = useParams();
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)

    const { title, description, discont_price, price, image } = product ? product : {};

    const discont_percent = (100 - (discont_price * 100 / price)).toFixed(1)

    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, []);

    useEffect(() => {
        document.title = `${title}`
    },[title])

    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch(addProductToCart(product));
        toast.success('Added to cart!', {
            duration: 4000, 
            position: 'top-right',
          });
    };

    return (
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
           {
                product ?
                    <div className={s.product_page}>
                        <h1 className={s.product_title}>{title}</h1>
                        <div className={s.product_card}>
                            <div className={s.image_container}>
                                <img className={s.img} src={`http://localhost:3333${image}`} alt={title} />
                            </div>
                            <div className={s.product_info}>
                                <div className={s.product_actions}>
                                    <div className={discont_price ? s.prices_box : ''} >
                                        {
                                            discont_price ?
                                                <>
                                                    <p className={s.discount_price}>{discont_price}
                                                        <span className={s.symbol}>$</span>
                                                    </p>
                                                    <p className={s.price}>{price}$ </p>
                                                    <p className={s.discount_percent}> -{discont_percent}%</p>
                                                </>
                                                : <p className={s.normal_price}>
                                                    {price}<span className={s.symbol}>$</span>
                                                </p>
                                        }
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className={s.add_btn}>
                                        To cart
                                    </button>
                                    
                                </div>
                                <div className={s.description}>
                                    <p className={s.subtitle}>Description</p>
                                    <p className={s.text}>{description}</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    : <NotFoundPage />
            }
        </div>
    )
}

export default ProductPage