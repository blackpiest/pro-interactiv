import React from 'react';
import style from './PhotoPlaceCard.module.css';
import Button from '../Button/Button';
import ItemList from './ItemList.jsx';
import PhotoPlaceOption from './PhotoPlaceOption';
import Slider from '../Slider/Slider';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './ScrollBar.css';

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

    const createOptions = () => {
        const optionList = [];
        const count = 20;

        const optionSetting = {
            title: "Разработка макета рамки #",
            price: 17500,
            cover: "https://egor-redchenko.ru/test_pro_interactiv/photo.jpg",
        };

        for (let i = 0; i < count; i++) {
            optionList.push(
                <PhotoPlaceOption
                    key={i}
                    id={`${props.id}_${i}`}
                    title={optionSetting.title + (i + 1)}
                    cover={optionSetting.cover}
                    price={optionSetting.price + (i * 100)}
                />
            );
        }

        return optionList;
    }

    const slides = [
        { id: 0, url: "https://egor-redchenko.ru/test_pro_interactiv/photo.jpg", title: "" },
        { id: 1, url: "https://egor-redchenko.ru/test_pro_interactiv/photo.jpg", title: "" },
        { id: 2, url: "https://egor-redchenko.ru/test_pro_interactiv/photo.jpg", title: "" },
        { id: 3, url: "https://egor-redchenko.ru/test_pro_interactiv/photo.jpg", title: "" },
        { id: 4, url: "https://egor-redchenko.ru/test_pro_interactiv/photo.jpg", title: "" }
    ]

    return (
        <div className={`container ${style.card}`}>
            <Slider images={slides} />
            <div className={style.card__name}>
                <h3>{props.title}</h3>
                <p><strong>Размер: </strong>{props.size}</p>
            </div>
            <div className={style.options}>
                <p className={style.options__title}>Доп. опции</p>
                <SimpleBar scrollbarMinSize="25" forceVisible="y" autoHide={false} style={{ maxHeight: 148 }}>
                    {createOptions()}
                </SimpleBar>
            </div>

            <div className={style.card__time}>
                <p className={style.card__time__title}>Укажите время аренды</p>
                <form className={style.card__time__form}>
                    {items}
                </form>
            </div>
            <div className={style.card__footer}>
                <p className={style.card__footer__price}>{props.price}<span> ₽</span></p>
                <Button onClick={props.onClick} title="Оставить заявку" />
            </div>
        </div>
    );
};

export default PhotoPlaceCard;