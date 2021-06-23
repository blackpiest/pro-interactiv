import React from 'react';
import style from './PhotoPlaceSection.module.css';
import PhotoPlaceCard from '../../components/PhotoPlaceCard/PhotoPlaceCard';

const PhotoPlaceSection = () => {

    const createCard = () => {
        const cardList = [];
        const count = 3;
        const cardSetting = {
            title: "Фотобудка с ширмой #",
            price: 17000,
            size: "2м x 1.5м x 2 м"
        };

        for (let i = 0; i < count; i++) {
            cardList.push(
                <PhotoPlaceCard
                    key={i}
                    id={i}
                    title={cardSetting.title + (i + 1)}
                    size={cardSetting.size}
                    price={cardSetting.price + (i * 100)}
                />
            );
        }
        return cardList;
    }

    return (
        <section id="photoplace" className={`container_wrapper ${style.section}`}>
            <div className={style.section__header}>
                <h2>Фотобудки</h2>
                <p className={style.section__header__sort}>
                    Сортировка:
                </p>
            </div>
            {createCard()}
        </section>
    );
};

export default PhotoPlaceSection;