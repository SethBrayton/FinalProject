import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/categoriesSlice'
import productListSlice from './slices/productListSlice'
import singleProductSlice from './slices/singleProductSlice'
import cartSlice from './slices/cartSlice'


export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productListSlice,
        product: singleProductSlice,
        cart: cartSlice,
    }
})
export default store