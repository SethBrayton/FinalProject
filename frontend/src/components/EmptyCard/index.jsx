import Button from '../../components/UI/Button';
import s from './EmptyCard.module.css'
import { Link } from "react-router-dom";

function EmptyCard() {
    return(
        <div className={s.container}>
            <div className={s.empty_card_box}>
            <p className={s.empty_cart_txt}>Your cart is empty...</p>
            <Link to={'/products/all'}> <Button title={'Shop now!'} styles={'cart_btn'}/> </Link>
            </div>
        </div>
    )
}

export default EmptyCard