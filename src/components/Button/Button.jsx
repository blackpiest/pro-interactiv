import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
    let btnClass = '';
    switch (props.type) {
        case 'close':
            btnClass = style.btnClose;
            break;
        case 'left':
            btnClass = style.btnLeft;
            break;
        case 'right':
            btnClass = style.btnRight;
            break;
        case 'second':
            btnClass = style.btnSecond;
            break;
        default: 
            btnClass = style.btnPrimary;
    }

    return (
        <button onClick={props.onClick} className={`${style.btn} ${btnClass} ${props.className} `}>
            {props.title && props.title}
        </button>
    );
};

export default Button;