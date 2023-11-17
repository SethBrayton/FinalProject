import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import s from './Header.module.css'
import logo from './logo-green-plant.png'
import cart from './icons8-shopping_bag.svg'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button';
import { selectCartItems } from '../../store/slices/cartSlice';
import BurgerMenu from '../BurgerMenu';
import burger from './burger_icon.svg'



function Header() {
  const [navBarActive, setNavBarActive] = useState(false)
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems);
  const totalItems = cartItems.reduce((total, elem) => total + elem.count, 0);


  const navHandler = () => {
    setNavBarActive(!navBarActive)
}


    return (
      <header className={s.container}>
      <nav className={s.header}>
        <div className={s.navbar__left}>
           <Link to={'/'} className={s.logo}><img src={logo} alt='logo'/></Link>
           <Link to={"/categories/all"}> <Button title={'Catalog'} styles={'cat_header_button'}/> </Link>
        </div>

        <div className={s.navbar__right}>
          <nav className={s.navbar_menu}>
            <NavLink to={"/"} > <p className={s.menu_item}>Main Page</p> </NavLink>
            <NavLink to={"/products/all"}> <p className={s.menu_item}>All products</p> </NavLink>
            <NavLink to={"/products/sale"}> <p className={s.menu_item}>All sales</p> </NavLink>
          </nav>

          <div className={s.cart_container}>
            <Link to={'/cart'} className={s.cart_icon}><img src={cart} alt='cart-icon'/>
              {totalItems > 0 && (
                 <span className={s.cart_badge}>{totalItems}</span>
              )}
            </Link>
            </div>
            <div className={s.burger_icon} onClick={navHandler}>
            <img src={burger} alt='menu-icon'/>
          
          </div>
        </div>
       <BurgerMenu navBarActive={navBarActive} setNavBarActive={setNavBarActive} navHandler={navHandler}/>
      </nav>
    </header>


    );
};

export default Header;