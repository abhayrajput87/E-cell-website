import React from "react";
import "./Gallery.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'
import { FreeMode } from "swiper/modules";

export default () => {
  return (
    <div>
      <h1 className="flex text-6xl justify-center mx-auto text-white mt-10">Gallery</h1>

      <Swiper
        // install Swiper modules
        className="flex md:max-w-5xl sm:max-w-xl sm:h-96"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}

      >
        <SwiperSlide key={1}>
          <img src="https://images.unsplash.com/photo-1506057213367-028a17ec52e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide key={3}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide key={4}>
          <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide key={5}>
          <img src="https://images.unsplash.com/photo-1476970980147-71209edbfa4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide key={6}>
          <img src="https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide key={7}>
          <img src="https://images.unsplash.com/photo-1525115450806-c4b70fd049bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide key={8}>
          <img src="https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide key={9}>
          <img src="https://images.unsplash.com/photo-1500518928030-5e56ea44798a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide key={10}>
          <img src="https://images.unsplash.com/photo-1539678786826-79e8b51b457a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </SwiperSlide>

        ...
      </Swiper>
    </div>
  );
}