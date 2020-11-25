import React from 'react'
import "./Header.css";
import Banner from "../../images/bg-header-desktop.svg";


function Header() {
    return (
        <div className="header">
            <img className="header__image"
                src={Banner} 
                alt="Header banner" 
            />
        </div>
    )
}

export default Header
