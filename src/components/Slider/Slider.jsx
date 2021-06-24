import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import './Slider.css';

SwiperCore.use([Pagination, Navigation]);

const Slider = (props) => {
    let slides = props.images.map(slide => {
        return <SwiperSlide key={slide.id}>
            <img src={slide.url} alt={slide.title} />
        </SwiperSlide>
    })
    return (
        <Swiper
            className={props.className}
            spaceBetween={10}
            navigation={true}
            pagination={{ "dynamicBullets": true }}>
            {slides}
        </Swiper>
    );
};

export default Slider;