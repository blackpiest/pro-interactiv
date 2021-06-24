import React from 'react';
import style from './NewsSection.module.css';
import Button from '../../components/Button/Button';
import CardNews from './CardNews';
import CardNewsModal from './CardNewsModal';

class NewsSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            maxPage: Math.ceil(this.newsCreateLength / this.countNews),
            isDisplayModal: false,
            infoCard: null
        };
    };
    componentDidMount() {

        let news = this.newsData.slice(0, this.countNews);
        this.setState({
            displayNews: [...this.state.displayNews, ...news]
        });
    };

    showModal = (i) => {
        this.setState({infoCard: {
            id: this.newsData[i].props.id,
            title: this.newsData[i].props.title,
            cover: this.newsData[i].props.cover,
            text: this.newsData[i].props.text,
            category: this.newsData[i].props.category,
            date: this.newsData[i].props.date
        }, isDisplayModal: !this.state.isDisplayModal});
    };

    closeModal = () => {
        this.setState({infoCard: null, isDisplayModal: !this.state.isDisplayModal});
    };

    showNews = () => {
        if (this.state.currentPage < this.state.maxPage) {
            let news = this.newsData.slice(this.state.currentPage * this.countNews, (this.state.currentPage * this.countNews) + (this.countNews));
            this.setState({
                currentPage: this.state.currentPage + 1,
                displayNews: [...this.state.displayNews, ...news]
            });
        }
    };

    render = () => {
        return (
            <section id="news" className={style.section}>
                {this.state.isDisplayModal && <CardNewsModal onClick={this.closeModal} title={this.state.infoCard.title} cover={this.state.infoCard.cover} text={this.state.infoCard.text} category={this.state.infoCard.category} date={this.state.infoCard.date}/>}
                <div className={style.section__header}>
                    <p className="title_big">Почему выбирают нас?</p>
                    <h2>Новости</h2>
                </div>
                <div className={style.news}>
                    {this.state.displayNews}
                </div>
                {this.state.currentPage !== this.state.maxPage
                    && <Button onClick={this.showNews} title="Показать еще" type="second" className={style.btn} />
                }
            </section>
        );
    };
};

export default NewsSection;