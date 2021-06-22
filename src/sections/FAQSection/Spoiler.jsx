import React from 'react';
import style from './FAQSection.module.css';



class Spoiler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            activeClass: ''
        }
    }

    openSpoiler = () => {
        if (this.state.isOpen) {
            this.setState({activeClass: '', isOpen: false});
        } else {
            this.setState({activeClass: style.active, isOpen: true});
        }
    }

    render = () => {
        return (
            <div className={`${style.spoiler} ${this.state.activeClass}`}>
                <div onClick={this.openSpoiler} className={`${style.spoiler__header} ${this.state.activeClass}`}>
                    <p>{this.props.title}</p>
                    <button className={`${style.btn} ${this.state.activeClass}`}></button>
                </div>
                <div className={`${style.spoiler__body} ${this.state.activeClass}`}>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Spoiler;