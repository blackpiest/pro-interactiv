import React from 'react';
import style from './PhotoPlaceCard.module.css';

const PhotoPlaceOption = (props) => {
    return (
        <div className={style.option}>
            <div className={style.option__cover}>
                <img src={props.cover} alt={props.title} />
            </div>
            <div className={style.option__body}>
                <p className={style.option__body__title}>{props.title}</p>
                <p className={style.option__body__price}>от {props.price} <span> ₽</span></p>
            </div>
            <p className={style.checkbox}>
                <input className={style.checkbox__native} type="checkbox" name="option" id={`chb_${props.id}`} />
                <label htmlFor={`chb_${props.id}`} className={style.checkbox__custom}></label>
            </p>
            
        </div>
    );
};

export default PhotoPlaceOption;