import { NavLink } from 'react-router-dom';
import s from './BurgerMenu.module.css'
import cross from './burger_cross_icon.png'

const BurgerMenu = ({ navBarActive, setNavBarActive, navHandler }) => {

    const navLinks = [
        {id:1, title: 'Main Page', link:'/'},
        {id:2, title: 'Catalog', link:'/categories/all'},
        {id:3, title: 'All products', link:'/products/all'},
        {id:4, title: 'All sales', link:'/products/sale'},
    ]

    return (
        <div className={navBarActive ? `${s.burger_menu} ${s.active}` : s.burger_menu}>
            <div className={s.icon_container} onClick={navHandler}>
                <img src={cross} alt='cross-icon'/>
            </div>
      <nav className={s.burger_menu_content}>
        {navLinks.map(({ id, title, link }) => (
          <NavLink className={s.links} key={id} to={link} onClick={() => setNavBarActive(false)}>
            {title}
          </NavLink>
        ))}
      </nav>
    </div>
    );
};

export default BurgerMenu;