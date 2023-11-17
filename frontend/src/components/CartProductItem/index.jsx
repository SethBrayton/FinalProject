import s from './CartProductItem.module.css'
import { useDispatch } from 'react-redux';
import {HiXMark} from 'react-icons/hi2'
import { decrAmount, emptyCart, incrAmount, removeProduct } from '../../store/slices/cartSlice';

function CartProductItem({ id, title, price, discont_price, image, count }) {

    const dispatch = useDispatch()

    const totalPrice = discont_price ? discont_price * count : price * count;

    return(
        <div className={s.product_item}>
            <img className={s.product_img} src={`http://localhost:3333${image}`} alt={title} />
            <div className={s.grid_item}>
                <p className={s.product_name}>{title}</p>
                <div className={s.buttons}>
                    <button onClick={() => dispatch(decrAmount(id))} className={s.btn}> - </button>
                    <span className={s.count}>{count}</span>
                    <button onClick={() => dispatch(incrAmount(id))} className={s.btn}> + </button>
                </div>
            </div>
            <div className={s.prices}>
                {
                    discont_price ?
                        <>
                            <p className={s.final_price}>
                            {totalPrice.toFixed(2)}<span className={s.small_text}>$</span>
                                
                            </p>
                            <p className={s.price}>{price}$ </p>
                        </>
                        : <p className={s.final_price}>
                            {totalPrice.toFixed(2)} 
                            <span className={s.small_text}>$</span>
                        </p>
                }
            </div>
            
                <HiXMark style={{fontSize: '25px', color: 'black', cursor: 'pointer'}} onClick={() => dispatch(removeProduct(id))}/>
            
        </div>
    )
}

export default CartProductItem