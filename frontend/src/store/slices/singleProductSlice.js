import { createSlice } from '@reduxjs/toolkit'

const singleProductSlice = createSlice({
    name: 'SingleProduct',
    initialState: {},
    reducers: {
        loadSingleProduct(state, action) {
            return action.payload;
        }
    }
})

export default singleProductSlice.reducer
export const { loadSingleProduct } = singleProductSlice.actions