import { useDispatch, useSelector } from "react-redux";
import s from './CartOrderForm.module.css'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import Button from "../UI/Button";



function CartOrderForm ({ totalPrice }) {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.cart)
    const { register, handleSubmit, formState:{ errors }, reset } = useForm();

    const onSubmit = (data) => {
        const orderDetails = {
          ...data,
          totalPrice
        };
        toast.success('Order sent!', {
            duration: 4000, 
            position: 'top-right', 
          });
        console.log(orderDetails);
        reset();
      };

    const changeClass = () => {
        return errors.phone?.type ? `${s.phone_number} ${s.reject}` : s.phone_number;
    };
 
    return (
        <>
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
        { !data.length ? 
            ''
            :
        <form onSubmit={handleSubmit(onSubmit)} className={s.cart_form}>
            <h3 className={s.title}>Order details</h3>
            <div className={s.total_price}>
                <p className={s.total_text}>Total</p>
                <p className={s.total_sum}>{totalPrice}$</p> 
            </div>
            <div className={s.input_fields}>
                <input 
                    className={changeClass()} 
                    type="tel" 
                    name="phone" 
                    {...register("phone", { required: true, pattern: /^([+]?\d{1,3}[-\s])?\d{2,4}[-\s]?\d{7,10}$/ })}
                    placeholder='+49 999 9999999'
                />
                
                <Button type="submit" value="Order" title={'Order'} styles={'order_button'}/>
            </div>
        </form>
       
    }
        </>
    );
};

export default CartOrderForm;