import React from 'react';
import Button from '../../components/Button/Button';
import style from './NewsSection.module.css';
import Slider from '../../components/Slider/Slider';

const CardNewsModal = (props) => {
    let slides = [
        { id: 0, url: "https://egor-redchenko.ru/test_pro_interactiv/photo_3.jpg", title: "" },
        { id: 1, url: "https://egor-redchenko.ru/test_pro_interactiv/photo_3.jpg", title: "" },
        { id: 2, url: "https://egor-redchenko.ru/test_pro_interactiv/photo_3.jpg", title: "" },
        { id: 3, url: "https://egor-redchenko.ru/test_pro_interactiv/photo_3.jpg", title: "" },
        { id: 4, url: "https://egor-redchenko.ru/test_pro_interactiv/photo_3.jpg", title: "" }
    ];

    return (
        <div className={style.modalNews}>
            <div className={style.modalNews__wrapper}>
                <Button className={style.btnModal} type="close" onClick={props.onClick} />
                <Slider className={style.slider} images={slides} />
                <div className={style.modalNews__header}>
                    <p className="title_middle">{props.category}</p>
                    <p className={style.date}>{props.date}</p>
                </div>
                <h3>{props.title}</h3>
                <div className={style.modalNews__body}>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
};

export default CardNewsModal;