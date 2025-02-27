import React from 'react';
import '../../assets/style/global.css'
import '../../assets/style/header.css'
import { ReactComponent as LogoIcon } from '../../assets/icon/Background.svg';
import { ReactComponent as CartIcon } from '../../assets/icon/cart.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icon/logout.svg';
import HeaderButton from "./headerButton";
import SearchBar from "./searchBar";
import {Link, useLocation} from "react-router-dom";
import HeaderDropdown from "./headerDropdown";

function AppHeader() {

    const location = useLocation();

    return(
        <div className='header'>
            <Link to="/">
                <LogoIcon className="main-logo"/>
            </Link>
            <div className="header-button_box">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <HeaderButton name="Home" isSelected={ location.pathname === "/" }/>
                </Link>
                <HeaderDropdown name="Category" isSelected={ location.pathname.startsWith("/categories") }/>
            </div>
            <SearchBar/>
            <div className="full header-container">
                <button className="button-nav button-nav-selected full" type="button" style={{width:"140px"}}>
                    <div className="container" style={{alignItems:"start", marginRight:"20px"}}>
                        <p className="p-header">Hello,</p>
                        <p className="p-header">Sarthak Raut</p>
                    </div>
                </button>
                <div className="divider-vertical-small"></div>
                <button className="button-nav button-nav-selected full" type="button" style={{width:"140px"}}>
                    <div className="header-row" style={{marginLeft:"30px"}}>
                        <LogoutIcon width={30} height={30}/>
                        <p className="p-header">Logout</p>
                    </div>
                </button>
            </div>
            <div className="cart-icon-container">
                <CartIcon className="cart-icon"/>
                <div className="circle">99</div>
            </div>
        </div>
    );
}

export default AppHeader