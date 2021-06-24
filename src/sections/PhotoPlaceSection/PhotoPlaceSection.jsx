import React from 'react';
import style from './PhotoPlaceSection.module.css';
import PhotoPlaceCard from '../../components/PhotoPlaceCard/PhotoPlaceCard';
import OrderWindow from '../../components/OrderWindow/OrderWindow';

class PhotoPlaceSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowModal: false
        }
    }
    showModal = (id) => {
        this.setState({isShowModal: !this.state.isShowModal})
    }

    createCard = () => {
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
                    onClick={()=> this.showModal(i)}
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

    render = () => {
        return (
            <section id="photoplace" className={`container_wrapper ${style.section}`}>
                {this.state.isShowModal && <OrderWindow onClick={this.showModal} />}
                <div className={style.section__header}>
                    <h2>Фотобудки</h2>
                    <p className={style.section__header__sort}>
                        Сортировка:
                    </p>
                </div>
                {this.createCard()}
            </section>
        );
    }
};

export default PhotoPlaceSection;