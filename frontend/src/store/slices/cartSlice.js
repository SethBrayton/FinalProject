import { createSlice } from "@reduxjs/toolkit";

const defaultState = JSON.parse(localStorage.getItem("cart")) ?? [];

const addDataToLocalStorage = (cart) =>
  localStorage.setItem("cart", JSON.stringify(cart));

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    data: defaultState,
  },
  reducers: {
    addProductToCart: (state, action) => {
      const product = state.data.find((item) => item.id === action.payload.id);
      if (product) {
        product.count++;
      } else {
        state.data.push({ ...action.payload, count: 1 });
      }
      addDataToLocalStorage(state.data);
    },
    incrAmount: (state, action) => {
      state.data.find(({ id }) => id === action.payload).count++;
      addDataToLocalStorage(state.data);
    },
    decrAmount: (state, action) => {
      const target = state.data.find(({ id }) => id === action.payload);
      target.count--;
      if (target.count === 0) {
        state.data = state.data.filter((el) => el !== target);
      }
      addDataToLocalStorage(state.data);
    },
    removeProduct: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
      addDataToLocalStorage(state.data);
    },
  },
});


export const selectCartItems = (state) => {
  const cartItems = state.cart.data;
  const products = state.products.products;

  return cartItems
    .map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      if (product) {
        return {
          ...product,
          count: cartItem.count,
        };
      }
      return undefined;
    })
    .filter((item) => item !== undefined);
};

export const { addProductToCart, incrAmount, decrAmount, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
