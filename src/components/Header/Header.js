import s from './Header.module.css'
import { Link } from "react-router-dom"

function Header() {
    return ( 
        <div className={s.header}>
            <a href="you">
                <img className={s.imageOne} src="images/logo.svg" alt=""/>
            </a>
            <div className={s.links}>
                <Link className={s.link} to="/">Main Page</Link>
                <Link className={s.link} to="/category">Categories</Link>
                <Link className={s.link} to="allitems">All Products</Link>
                <Link className={s.link} to="/discount">All Sales</Link>
            </div>
            <a href="you">
                <img className={s.imageTwo} src="images/shop.svg" alt=""/>
            </a>
        </div>
     );
}

export default Header