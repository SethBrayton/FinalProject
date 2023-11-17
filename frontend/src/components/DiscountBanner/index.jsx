import React from 'react';
import s from './DiscountBanner.module.css'
import gnome from './gnome.png'
import Button from '../UI/Button';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';



function DiscountBanner() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        toast.success('Discount request sent!', {
            duration: 4000, 
            position: 'top-right', 
          });
          console.log("Discount request received:", data);
          reset();
    }

    
    return (
        <div className={s.container}>
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
            <div className={s.discount_form}>
                <div className={s.gnome_container}>
                    <img className={s.gnome} src={gnome} alt="gnome"/>
                </div>
                <div className={s.discount_text_container}>
                    <div className={s.form_container}>
                        <div className={s.text_container}>
                        <p className={s.discount_text}>
                            <span > 5% off </span> <br />
                            on the first order
                        </p>
                        </div>
                        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className={s.input_tel}
                            type='tel'
                            {...register("phone",
                                { required: true, pattern: /^([+]?\d{1,3}[-\s])\d{2,4}[-\s]\d{7,10}$/ }
                            )}
                            placeholder='+49 999 9999999'
                        />
                         {
                            errors.phone &&
                            <p className={s.required_text}>
                                Please enter a valid number!
                            </p>
                         }
                            
                            <Button styles={'submit_button'} type="submit" title={"Get a discount"} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;