import React from 'react';
import style from './Logo.module.css';
import logo from './../../assets/logo.svg';

const Logo = () => {
    return (
        <div className={style.logo}> <img src={logo} alt="Logotype" /></div>
    );
};

export default Logo;