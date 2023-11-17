import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage'
import CartPage from './pages/CartPage'
import CategoryListPage from './pages/CategoryListPage'
import ProductListPage from './pages/ProductListPage'
import ProductPage from './pages/ProductPage'
import CategoryPage from './pages/CategoryPage'
import SaleProductsListPage from './pages/SaleProductsListPage'
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import ScrollToTop from './components/UI/ScrollToTop';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop/>
      <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/categories/all' element={<CategoryListPage/>}/>
          <Route path='/products/all' element={<ProductListPage/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
          <Route path='/category/:id' element={<CategoryPage/>}/>
          <Route path='/products/sale' element={<SaleProductsListPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
