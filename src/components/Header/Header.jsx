import React from 'react';
import s from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = () => {
    return (
        <div className={s.header}>
            <div className="container mx-auto">
                <div className={s.options}>
                    <h1>Geo-system</h1>
                    <div className={s.search}>
                        <input placeholder="Search"/>
                        <SearchIcon fontSize="medium" className={s.search_icon}/>
                    </div>
                    <div className={s.account}>
                        <AccountCircleOutlinedIcon fontSize="large" className={s.user_icon}/>
                        <ShoppingCartOutlinedIcon fontSize="large" className={s.cart_icon}/>
                    </div>
                </div>
            </div>
            <nav>
                <span><NavLink to="/">HOME</NavLink></span>
                <span><NavLink to="/catalog">CATALOG</NavLink></span>
                <span><NavLink to="/blog">BLOG</NavLink></span>
                <span><NavLink to="/contact">CONTACT</NavLink></span>
            </nav>
        </div>
    )
}

export default Header;