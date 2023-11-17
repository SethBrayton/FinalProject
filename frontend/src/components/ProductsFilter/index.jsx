import React, { useState, useEffect } from 'react';
import s from './ProductsFilter.module.css'
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { dropFilters, filterByPrice, loadDiscountProducts, sortProducts } from '../../store/slices/productListSlice';


function ProductsFilter(props) {

    const {type, categoryId} = props

    const initialFilters = {from: -Infinity, to: +Infinity}
    const [price, setPrice] = useState(initialFilters)
    const [discount, setDiscount] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()
   
    useEffect(()=>{
        dispatch(filterByPrice(price))
    },[price, dispatch])

    
    useEffect(() => {
        dispatch(dropFilters())
        dispatch(loadDiscountProducts(false))
        setDiscount(false)
        setPrice(initialFilters)
    },[location, dispatch])
    

    const onChangeFilter = (by, data) => {
        setPrice({
            ...price,
            [by]:data
        })
    }
    
    const onChangeSort = (e) => {
        dispatch(sortProducts(+e.target.value))
    }

    const filterDiscountHandler = (e) => {
        setDiscount(e.target.checked);
          dispatch(loadDiscountProducts(e.target.checked)); 
      };


    return (
        <form className={s.form}>
            <div className={s.from_to_prices}>
                <span className={s.label}>Price</span>
                <input 
                    type="number" 
                    name="from" 
                    placeholder='from'
                    value={price.from !== -Infinity ? price.from : ''}
                    onChange={(e) => onChangeFilter('from', +e.target.value)} 
                />
                <input 
                    type="number" 
                    name="to" 
                    placeholder='to' 
                    value={price.to !== +Infinity ? price.to : ''}
                    onChange={(e) => onChangeFilter('to', e.target.value === '' ? +Infinity : +e.target.value )}
                    />
            </div>

            {type !== 'sale' && 
            <div className={s.checkbox}>
                        <span className={s.label}>Discounted items</span>
                        <input 
                            type="checkbox" 
                            name="discount" 
                            checked={discount} 
                            onChange={filterDiscountHandler}
                        />
                    </div>
            }
           
            <div className={s.filter_by}>
                <span className={s.label}>Sorted</span>
                <select onChange={ onChangeSort } defaultValue='0'>
                    <option value="0" disabled hidden>by default</option>
                    <option value="1">Price low to high</option>
                    <option value="-1">Price high to low</option>
                </select>
            </div>  
        </form>
    );
};

export default ProductsFilter;