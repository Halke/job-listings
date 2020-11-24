import React from 'react'
import "./Header.css";


function Header() {
    return (
        <div className="header">
            <img className="header__image"
                src={`${process.env.PUBLIC_URL}/images/bg-header-desktop.svg`} 
                alt="Header banner" 
            />
        </div>
    )
}

export default Header
