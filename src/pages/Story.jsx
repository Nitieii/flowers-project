import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slice_image_1 from "../assets/SliderImgs/flower1.jpg";
import slice_image_2 from "../assets/SliderImgs/flower2.jpg";
import slice_image_3 from "../assets/SliderImgs/flower3.jpg";
import slice_image_4 from "../assets/SliderImgs/flower4.jpg";
import slice_image_5 from "../assets/SliderImgs/flower5.jpg";

function Story() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        slicesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 50,
        }}
        pagination={{ el: ".swiper-pagination", clickable: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slice_image_1} alt="slice_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slice_image_2} alt="slice_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slice_image_3} alt="slice_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slice_image_4} alt="slice_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slice_image_5} alt="slice_image" />
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <span>left</span>
          </div>

          <div className="swiper-button-next slider-arrow">
            <span>right</span>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Story;
