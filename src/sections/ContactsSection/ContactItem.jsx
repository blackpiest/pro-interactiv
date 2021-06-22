import React from 'react';
import style from './ContactsSection.module.css';
import icon_phone from './../../assets/icons/icon_phone.svg';
import icon_geo from './../../assets/icons/icon_geo.svg';

const ContactItem = (props) => {
    let icon = '';
    let link = '';
    switch (props.type) {
        case 'phone':
            icon = icon_phone;
            break;
        case 'position':
            icon = icon_geo;
            break;
        case 'mail':
            icon = '';
            link = <a href={`mailto: ${props.text}`}>{props.text}</a>;
            break;
        default:
            icon = '';
    }

    return (
        <div className={style.list__item}>
            <div className={style.list__item__icon}>
                {icon !== '' ? <img src={icon} alt={props.title} /> : ''}
            </div>
            <div className={style.list__item__body}>
                <p className={style.list__item__body__title}>{props.title}</p>
                <p className={style.list__item__body__text}>
                    {link === '' ? props.text : link}
                    </p>
            </div>
        </div>
    );
};

export default ContactItem;