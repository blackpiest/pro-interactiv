import React from 'react';
import style from './FAQSection.module.css';
import Spoiler from './Spoiler';

const FAQSection = () => {
    const spoilerData = [
        {id: 0, title: "Какой реквизит идет в комплекте?", text: "Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго"},
        {id: 1, title: "Какой реквизит идет в комплекте?", text: "Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго"},
        {id: 2, title: "Какой реквизит идет в комплекте?", text: "Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго"},
        {id: 3, title: "Какой реквизит идет в комплекте?", text: "Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго"},
        {id: 4, title: "Какой реквизит идет в комплекте?", text: "Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго"},
    ];

    let spoilers = spoilerData.map(spoiler => {
        return <Spoiler key={spoiler.id} title={spoiler.title} text={spoiler.text} />
    });

    return(
        <section id="faq" className={`container_wrapper ${style.section}`}>
            <div className={style.section__header}>
                <p className="title_big">Почему выбирают нас?</p>
                <h2>FAQ</h2>
                <div className={style.faq}>
                    {spoilers}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
