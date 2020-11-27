import React from 'react'
import "./Header.css";
import BannerDesktop from "../../images/bg-header-desktop.svg";
import BannerMobile from "../../images/bg-header-mobile.svg";
import {isMobile} from "react-device-detect";


function Header() {
    return (
        <div className="header">
            
            <img className="header__image"
                src={isMobile ? BannerMobile : BannerDesktop} 
                alt="Header banner" 
            /> 
            
        </div>
    )
}

export default Header
