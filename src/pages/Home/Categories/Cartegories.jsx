import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Cartegories = () => {
  return (
    <div className=" mb-32">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="slider" />
          <h3 className="text-3xl uppercase text-center -mt-20 text-blue-700 shadow-xl">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slider" />
          <h3 className="text-3xl uppercase text-center -mt-20 text-blue-700 shadow-xl">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slider" />
          <h3 className="text-3xl uppercase text-center -mt-20 text-blue-700 shadow-xl">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slider" />
          <h3 className="text-3xl uppercase text-center -mt-20 text-blue-700 shadow-xl">
            Cake
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slider" />
          <h3 className="text-3xl uppercase text-center -mt-20 text-blue-700 shadow-xl">
            Vegetable
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cartegories;
