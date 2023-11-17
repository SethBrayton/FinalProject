import { createSlice } from '@reduxjs/toolkit'



const productListSlice = createSlice({
    name: 'ProductList',
    initialState: {
       products: [],
       filters: {
        from: -Infinity,
        to: +Infinity,
      }
    },
    reducers: {
      loadProductList(state, action) {
        state.products = action.payload
    },
      sortProducts: (state, { payload }) => {
        state.products.sort((a, b) => {
            const sortOrder = payload === 1 ? 1 : -1;
            return sortOrder * (a.finalPrice - b.finalPrice);
        })
    },
      filterByPrice: (state, { payload }) => {
        const { from, to } = payload
        state.filters.from = from;
        state.filters.to = to;
        state.products.forEach(product => {
            product.isShow = product.finalPrice >= from && product.finalPrice <= to;
        });
    },
    loadDiscountProducts: (state, { payload }) => {
        state.products.forEach(product => {
            if (payload) {
                product.isShow = product.discont_price != null && product.finalPrice >= state.filters.from && product.finalPrice <= state.filters.to;
            } else {
                product.isShow = product.finalPrice >= state.filters.from && product.finalPrice <= state.filters.to;
            }
        });
    },
    
    dropFilters: (state) => {
        state.products.forEach(product => {
          product.isShow = true;
        });
        state.filters.from = -Infinity;
        state.filters.to = +Infinity;
      },
    }
    
})


export default productListSlice.reducer
export const { loadProductList, sortProducts, loadDiscountProducts, filterByPrice, dropFilters } = productListSlice.actions

