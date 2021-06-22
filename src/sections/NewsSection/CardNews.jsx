import React from 'react';
import style from './NewsSection.module.css';

const CardNews = (props) => {
    return (
        <div className={style.cardNews}>
            <div className={style.cardNews__cover}>
                <img src={props.cover} alt={props.title} />
            </div>
            <div className={style.cardNews__body}>
                <p className="title_middle">{props.category}</p>
                <h3>{props.title}</h3>
                <p className={style.cardNews__body__text}>
                    {props.text}
                </p>
                <p className={style.cardNews__body__date}>{props.date}</p>
            </div>
        </div>
    );
};

export default CardNews;