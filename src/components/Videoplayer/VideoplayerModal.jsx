import React from 'react';
import style from './Videoplayer.module.css';
import Button from '../Button/Button';

const VideoplayerModal = (props) => {
    return (
        <div className={style.videoplayerModal + " " + props.class}>
            <div className={style.videoplayerModal__wrapper}>
                <Button className={style.btn} onClick={props.closeVideo} type="close"/>
                <div className={style.videoplayerModal__video}>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${props.uri}?autoplay=1`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoplayerModal;