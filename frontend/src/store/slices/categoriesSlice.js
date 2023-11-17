import { createSlice } from '@reduxjs/toolkit'



const categoriesSlice = createSlice({
    name: 'Categories',
    initialState: {
        categories: []
      },
    reducers: {
        loadAllCategories(state, { payload }) {
            state.categories = payload
        }
        
    }
})

export const { loadAllCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

