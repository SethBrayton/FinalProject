import { loadAllCategories, loadProductsForCategory } from "../store/slices/categoriesSlice";

export const fetchCategories = () => {
    return function(dispatch) {
      fetch('http://localhost:3333/categories/all')
        .then(res => res.json())
        .then(data => dispatch(loadAllCategories(data)))     
    }
};

export const fetchSingleCategory = (id) => {
  return function(dispatch) {
      fetch(`http://localhost:3333/categories/${id}`)
      .then (res => res.json())
      .then (categoryData => {
          const { category } = categoryData;
          dispatch(loadAllCategories([category])); 
      });
  } 
};