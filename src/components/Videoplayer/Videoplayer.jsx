import React from 'react';
import style from './Videoplayer.module.css';

const Videoplayer = (props) => {
    return (
        <div className={style.videoplayer}>
            <div className={style.videoplayer__video}>
                <div className={style.videoplayer__cover}>
                    <button onClick={props.playVideo} className={style.videoplayer__play}></button>
                </div>
            </div>
        </div>
    );
};

export default Videoplayer;