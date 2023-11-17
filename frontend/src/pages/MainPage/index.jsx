import React, { useEffect } from 'react';
import s from './MainPage.module.css'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import flowers from './flowers.png'
import CategoryItem from '../../components/CategoryItem';
import DiscountBanner from '../../components/DiscountBanner';
import { Link as ScrollLink, Element } from 'react-scroll';
import ProductItem from '../../components/ProductItem';
import Button from '../../components/UI/Button';
import { fetchCategories } from '../../asyncActions/categories';
import { fetchProductList } from '../../asyncActions/products';




function MainPage() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories)
    const products = useSelector(state => state.products.products)
    const {id} = useParams()
    
    useEffect(() => {
        document.title = "Home Page"
    },[])

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProductList());
    }, [dispatch]);
    
    return (
        <div className={s.main_page}>
            <div className={s.container}>
                <div className={s.sale_banner}>
                    <div className={s.banner_info}>
                        <h1 className={s.banner_title}>Sale </h1>
                        <h3 className={s.banner_text} >New season</h3>
                            <ScrollLink 
                                    activeClass="active"
                                    to="salesBanner" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-70} 
                                    duration={700} >
                               <Button title={'Sale'} styles={'sale_btn'}/>         
                            </ScrollLink>
                        
                    </div>
                    <div className={s.img_container}>
                        <img className={s.img} src={flowers} alt="flowers"/>
                    </div>
                </div>
            </div>
            <div className={s.categories_section}>
                <div className={s.categories_section_header}>
                    <h2>Catalog</h2>
                    <Link to={"/categories/all"}> <Button title={'All categories'} styles={'cat_btn'}/> </Link>
                </div>
                <div className={s.categories_item}>
                    {   
                        categories
                            .filter((elem, index) => index <= 3)
                            .map(elem => <Link to={`/category/${elem.id}`} key={elem.id}><CategoryItem  {...elem}/></Link>)
                    }
                </div>
            </div>
            <Element name="salesBanner">
                <DiscountBanner />
            </Element>
            <div>
            <div className={s.sale_section}>
                <h2 className={s.sale_section_title}>Sale</h2>
                <div className={s.sale_items}>
                    {
                        products
                        .filter((elem) => elem.discont_price != null)
                        .filter((elem, index)=> index <= 2)
                        .map(elem => <ProductItem key={elem.id} {...elem} />)
                    }
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage