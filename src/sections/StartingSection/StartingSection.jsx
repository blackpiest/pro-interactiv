import React from 'react';
import style from './StartingSection.module.css';
import Logo from '../../components/Logo/Logo';
import VideoplayerContainer from '../../components/Videoplayer/VideoplayerContainer';

const StartingSection = (props) => {
    return (
        <section id="start" className={`container_wrapper ${style.section}`}>
            <Logo className={style.logo} />
            <VideoplayerContainer uri="Kl2v9ydanrI"/>
            <h1><span className={style.accent}>Фото на</span> праздник</h1>
            <p className={style.text}>
                Lorem ipsum dolor sit amet,  consectetur <a href="#link">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className={style.starsList}>
                <li className={style.starsList__item}>
                    <div className={style.icon_1}></div>
                    <p>Безлимитная <br /> печать фото</p>
                </li>
                <li className={style.starsList__item}>
                    <div className={style.icon_2}></div>
                    <p>Фотореквизит <br /> в наличии</p>
                </li>
                <li className={style.starsList__item}>
                    <div className={style.icon_3}></div>
                    <p>Фотоотчет в <br /> электронном виде</p>
                </li>
                <li className={style.starsList__item}>
                    <div className={style.icon_4}></div>
                    <p>Цены <br /> ниже рынка</p>
                </li>
            </ul>
        </section>
    );
};

export default StartingSection;