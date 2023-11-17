import { loadProductList } from "../store/slices/productListSlice";
import { loadSingleProduct } from "../store/slices/singleProductSlice";


export const fetchProductList = (categoryId) => {
    return function(dispatch){
      fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(products => {
          let finalData = products.map(elem => ({
            ...elem,
            finalPrice: elem.discont_price ?? elem.price,
            isShow: true,
          }));
          if (categoryId) {
            finalData = finalData.filter(elem => elem.categoryId === categoryId);
          }
  
          dispatch(loadProductList(finalData));
        });
    };
  };

  export const fetchSingleProduct = (id) => {
    return function(dispatch) {
        fetch(`http://localhost:3333/products/${id}`)
        .then (res => res.json())
        .then (data => dispatch(loadSingleProduct(data[0])));
    } 
  };