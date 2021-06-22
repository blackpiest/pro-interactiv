import React from 'react';
import style from './NewsSection.module.css';
import Button from '../../components/Button/Button';
import CardNews from './CardNews';

const NewsSection = () => {
    return (
        <section id="news" className={style.section}>
            <div className={style.section__header}>
                <p className="title_big">Почему выбирают нас?</p>
                <h2>Новости</h2>
            </div>
            <div className={style.news}>
                <CardNews 
                    title="Фотобудки, GIF стойка"
                    text="У нас есть широчайший ассортимент фотобудок на все случаи жизни"
                    date="20 Марта 2021"
                    category="Услуги"
                    cover="https://egor-redchenko.ru/test_pro_interactiv/photo_2.jpg"
                />
                <CardNews 
                    title="Фотобудки, GIF стойка"
                    text="У нас есть широчайший ассортимент фотобудок на все случаи жизни"
                    date="20 Марта 2021"
                    category="Услуги"
                    cover="https://egor-redchenko.ru/test_pro_interactiv/photo_2.jpg"
                />
                <CardNews 
                    title="Фотобудки, GIF стойка"
                    text="У нас есть широчайший ассортимент фотобудок на все случаи жизни"
                    date="20 Марта 2021"
                    category="Услуги"
                    cover="https://egor-redchenko.ru/test_pro_interactiv/photo_2.jpg"
                />
            </div>
            <Button title="Показать еще" type="second" className={style.btn} />
        </section>
    );
};

export default NewsSection;