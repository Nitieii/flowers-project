import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide_image_1 from "../assets/SliderImgs/flower1.jpg";
import slide_image_2 from "../assets/SliderImgs/flower2.jpg";
import slide_image_3 from "../assets/SliderImgs/flower3.jpg";
import slide_image_4 from "../assets/SliderImgs/flower4.jpg";
import slide_image_5 from "../assets/SliderImgs/flower5.jpg";

import PrevIcon from "../assets/LandingPageIcons/prevNav.svg";
import NextIcon from "../assets/LandingPageIcons/nextNav.svg";

import videoBg from "../assets/video/homepage.mp4";
import "./landing.css";

import { VscUnmute, VscMute } from "react-icons/vsc";
import { useState } from "react";

const LandingPage = () => {
  const [isMute, setIsMute] = useState(true);

  const slideImages = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
  ];

  return (
    <div className="relative">
      <video
        src={videoBg}
        autoPlay
        loop
        muted={isMute}
        className="-z-10 w-screen object-cover"
      />

      <div className="mt-14">
        <h2 className="font-medium text-[32px] text-center">STORIES</h2>

        <div className="">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 40,
              depth: 60,
              modifier: 10,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, EffectFade]}
            className="swiper_container"
          >
            {slideImages.map((image) => (
              <SwiperSlide key={image}>
                <div className="flex flex-col gap-6 items-center duration-300">
                  <img
                    src={image}
                    alt="slide_image"
                    className="w-[800px] h-[400px] object-cover rounded-lg blur-sm"
                  />

                  <h3 className="font-medium text-[32px] opacity-0">
                    THE ART OF FLOWERS
                  </h3>

                  <p className="opacity-0">
                    rure eiusmod sit cillum laborum occaecat ex fugiat elit non
                    fugiat i irure eu veniam id qui. Velit amet ut ipsum irure
                    incididunt. Velit Lorem do irure ut eu voluptate irure Lorem
                    commodo fugiat.
                  </p>
                  <button className="btn min-h-[39px] h-[39px] w-[120px] bg-[#546641] hover:bg-[#546641c9] text-white font-medium opacity-0">
                    Xem thêm
                  </button>
                </div>
              </SwiperSlide>
            ))}

            <div className="slider-controller">
              <div className="swiper-button-prev slider-arrow">
                <img src={PrevIcon} alt="" />
              </div>
              <div className="swiper-button-next slider-arrow">
                <img src={NextIcon} alt="" />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>

      <div className="absolute top-10 z-10 right-0">
        <button
          className="btn relative text-xl border-none bg-black bg-opacity-40 text-white hover:bg-opacity-60 hover:bg-black rounded-none"
          onClick={() => setIsMute(!isMute)}
        >
          {isMute ? <VscMute /> : <VscUnmute />}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
