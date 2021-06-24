import React from 'react';
import style from './ContactsSection.module.css';
import ContactItem from './ContactItem';

const ContactsSection = () => {
    const contactsData = [
        { id: 0, type: 'phone', title: 'Телефон', text: '+7 495 123 45 67' },
        { id: 1, type: 'position', title: 'Адрес', text: '109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине только с улицы Люблинская' },
        { id: 2, type: 'mail', title: 'Почта', text: 'Info@test.ru' }
    ];

    let contacts = contactsData.map(contact => {
        return <ContactItem
            key={contact.id}
            type={contact.type}
            title={contact.title}
            text={contact.text}
        />
    });

    return (
        <section id="contacts" className={style.section}>
            <div className={style.section__headeer}>
                <p className="title_big">Мы всегда доступну для вас</p>
                <h2>Контакты</h2>
            </div>
            <div className={style.list}>
                {contacts}
            </div>
            <div className={style.map}>
            <iframe title="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa2b7c527075f2080f0a9e88925d0cd5392967ea074959b17582187527208c610&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
            </div>
        </section>
    );
};

export default ContactsSection;