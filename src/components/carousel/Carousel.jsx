"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./Carousel.module.sass";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel({ img1, img2, img3, img4, img5, img6 }) {
  return (
    <>
      <div className={style.main}>
        <Swiper
          loop={true}
          slidesPerView={1}
          width={600}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image className={style.img} src={img1} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={style.img} src={img2} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={style.img} src={img3} alt="img" />
          </SwiperSlide>

          <SwiperSlide>
            <Image className={style.img} src={img4} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={style.img} src={img5} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={style.img} src={img6} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
