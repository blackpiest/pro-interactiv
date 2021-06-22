import React from 'react';
import style from './PhotoPlaceCard.module.css';
import Button from '../Button/Button';
import ItemList from './ItemList.jsx';

const PhotoPlaceCard = (props) => {
    const timeList = [
        { id: 1, title: "1 час" },
        { id: 2, title: "2 часа" },
        { id: 3, title: "3 часа" },
        { id: 4, title: "5 часов" },
        { id: 5, title: "выставка 2 дня" },
        { id: 6, title: "выставка 3 дня" }
    ];

    const items = timeList.map(item => {
        return <ItemList key={item.id} id={item.id} title={item.title} idCard={props.id} />
    });

    return (
        <div className={`container ${style.card}`}>
            <div className={style.slider}></div>
            <div className={style.card__name}>
                <h3>{props.title}</h3>
                <p><strong>Размер: </strong>{props.size}</p>
            </div>
            <div className={style.options}></div>
            <div className={style.card__time}>
                <p className={style.card__time__title}>Укажите время аренды</p>
                <form className={style.card__time__form}>
                    {items}
                </form>
            </div>
            <div className={style.card__footer}>
                <p className={style.card__footer__price}>{props.price}<span> ₽</span></p>
                <Button title="Оставить заявку" />
            </div>
        </div>
    );
};

export default PhotoPlaceCard;