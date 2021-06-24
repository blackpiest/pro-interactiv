import React from 'react';
import style from './OrderWindow.module.css';
import Button from './../Button/Button';

const OrderWindow = (props) => {
    return (
        <div className={style.window}>
            <div className={style.window__wrapper}>
                <div className={style.window__header}>
                    <h2>Ваша заявка</h2>
                    <Button onClick={props.onClick} className={style.btn_close} type="close"/>
                </div>
                <div className={style.window__body}>
                    <ul className={style.list}>
                        <li className={style.list__item}>
                            <div className={style.list__item__content}>
                                <p className={style.title}>{props.order.title}</p>
                                <p className={style.size}>Размер: <span>{props.order.size}</span></p>

                            </div>
                            <p className={style.list__item__price}>{props.order.price} ₽</p>
                        </li>
                    </ul>
                    <div className={style.window__price}>
                        <p className={style.window__price__title}>Итого: </p>
                        <p className={style.window__price__price}>{props.order.fullPrice} <span>₽</span></p>
                    </div>
                    <div className={style.input_tel}>
                        <input type="tel" placeholder="+7 (000) 000 00 00" />
                    </div>
                    <Button className={style.btn_order} title="Отправить заявку" />
                </div>
            </div>

        </div>
    );
};

export default OrderWindow;