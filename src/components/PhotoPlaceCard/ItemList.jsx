import React from 'react';
import style from './PhotoPlaceCard.module.css';

const ItemList = (props) => {
    return (
        <p className={style.card__time__form__item}>
            <input type="radio" name="time" defaultChecked={props.id === 1 && true} id={`time_${props.idCard}_${props.id}`} />
            <label htmlFor={`time_${props.idCard}_${props.id }`}>{props.title}</label>
        </p>
    );
};

export default ItemList;