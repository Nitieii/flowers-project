import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollContext from "../context/ScrollContext";
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

import storiesData from "../data/stories.json";

import slide_image_1 from "../assets/SliderImgs/flower1.jpg";
import slide_image_2 from "../assets/SliderImgs/flower2.jpg";
import slide_image_3 from "../assets/SliderImgs/flower3.jpg";

import PrevIcon from "../assets/LandingPageIcons/prevNav.svg";
import NextIcon from "../assets/LandingPageIcons/nextNav.svg";

import videoBg from "../assets/video/homepage.mp4";
import "./landing.css";

import { VscUnmute, VscMute } from "react-icons/vsc";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isMute, setIsMute] = useState(true);
  const slideImages = [slide_image_1, slide_image_2, slide_image_3];

  const stories = storiesData.map((_, index) => ({
    ...storiesData[index],
    image: slideImages[index],
  }));

  const targetRef = useContext(ScrollContext);

  return (
    <div className="relative">
      <div className="relative">
        <video
          src={videoBg}
          autoPlay
          loop
          muted={isMute}
          className="-z-10 w-screen object-cover"
        />

        <div className="absolute top-0 z-10 h-full w-full bg-black bg-opacity-0 text-white opacity-0 duration-300 hover:bg-opacity-20 hover:opacity-100">
          <div className="absolute bottom-[14%] left-[16%] w-[546px]">
            <div className="relative ms-8 h-[168px] w-[300px]">
              <h1 className="absolute top-0 font-tanMonCheri text-[40px]">
                Nghĩ khác
              </h1>
              <h1 className="absolute right-[55%] top-[20%] font-vivaldi text-[40px]">
                về
              </h1>
              <h1 className="absolute bottom-0 right-0 font-vivaldi text-[160px] font-medium leading-none">
                hoa
              </h1>
            </div>

            <p className="-mt-4">
              Nhiều người chỉ đơn giản nhìn hoa như một vật trang trí vô thường.
              Nhưng với nhóm 8, hoa còn hơn thế. Hoa là sứ giả của niềm vui và
              hạnh phúc, là lời xin lỗi chân thành, là biểu tượng của lòng biết
              ơn, là lời chúc tốt đẹp và là biểu tượng vĩnh cửu của tình yêu.
              Hoa chính là cầu nối giúp con người kết nối với nhau qua những
              cung bậc cảm xúc đa chiều...
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14" ref={targetRef}>
        <h2 className="text-center text-[32px] font-semibold">CÂU CHUYỆN</h2>

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
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="flex flex-col items-center gap-6 duration-300">
                  <img
                    src={story.image}
                    alt="slide_image"
                    className="h-[400px] w-[800px] rounded-lg object-cover blur-sm"
                  />

                  <h3 className="text-[32px] font-medium opacity-0 ">
                    {story.title}
                  </h3>

                  <p className="font-medium opacity-0">
                    rure eiusmod sit cillum laborum occaecat ex fugiat elit non
                    fugiat i irure eu veniam id qui. Velit amet ut ipsum irure
                    incididunt. Velit Lorem do irure ut eu voluptate irure Lorem
                    commodo fugiat.Velit Lorem do irure ut eu voluptate irure
                    Lorem commodo fugiat.
                  </p>
                  <button
                    className="btn h-[39px] min-h-[39px] w-[120px] bg-[#546641] font-medium text-white opacity-0 hover:bg-[#546641c9]"
                    onClick={() => navigate(`/story/${story.id}`)}
                  >
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

      <div className="absolute right-0 top-20 z-10">
        <button
          className="btn relative rounded-none border-none bg-black bg-opacity-40 text-xl text-white hover:bg-black hover:bg-opacity-60"
          onClick={() => setIsMute(!isMute)}
        >
          {isMute ? <VscMute /> : <VscUnmute />}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
