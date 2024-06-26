import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ScrollContext from "../context/ScrollContext";
import useWindowWidth from "../context/useWindowWidth";

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

import slide_image_1 from "../assets/thumbnail/Có một loài hoa không tàn.png";
import slide_image_2 from "../assets/thumbnail/Em có thể tự mua hoa cho chính mình.png";
import slide_image_3 from "../assets/thumbnail/Hoa trao bất chợt, nở bừng niềm vui.png";

import PrevIcon from "../assets/LandingPageIcons/prevNav.svg";
import NextIcon from "../assets/LandingPageIcons/nextNav.svg";

import videoBg from "../assets/video/Homepage.mov";
import "./landing.css";

import { VscUnmute, VscMute } from "react-icons/vsc";

const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMute, setIsMute] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const slideImages = [slide_image_1, slide_image_2, slide_image_3];
  const windowWidth = useWindowWidth();

  const stories = storiesData.map((_, index) => ({
    ...storiesData[index],
    image: slideImages[index],
  }));

  const targetRef = useContext(ScrollContext);

  useEffect(() => {
    const videoElement = document.getElementById("background-video");
    videoElement.addEventListener("loadeddata", () => {
      setVideoLoaded(true);
    });
  }, []);

  function handleNavigateToStory(id) {
    navigate(`/story/${id}`);
  }

  // Scroll to story section when navigate from other page
  useEffect(() => {
    if (location.state?.scrollToTarget && targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - 60; // Apply the 60px offset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }, [location, targetRef]);

  return (
    <div className="relative">
      <div className="relative">
        {!videoLoaded && (
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black">
            <p className="text-white">Loading...</p>
          </div>
        )}
        <video
          id="background-video"
          src={videoBg}
          autoPlay
          playsInline
          loop
          muted={isMute}
          loading="lazy"
          className={`-z-10 h-screen w-screen object-cover ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        />

        <div className="absolute top-0 z-10 h-full w-full bg-black bg-opacity-20 text-white opacity-100 duration-300 hover:bg-opacity-20 hover:opacity-100 md:bg-opacity-0 md:opacity-0">
          <div className="absolute bottom-[14%] left-[5%] w-auto md:left-[10%] md:w-[546px] lg:left-[16%]">
            <div className="relative ms-8 h-[180px] w-[300px]">
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

            <p className="w-[350px] sm:w-[500px] lg:-mt-4 lg:w-auto">
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

      <div className="my-4 md:my-14" ref={targetRef}>
        <h2 className="text-center text-[32px] font-semibold text-primary">
          CÂU CHUYỆN
        </h2>

        <div className="">
          <Swiper
            effect={windowWidth > 1024 ? "coverflow" : ""}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 70,
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
            className="swiper_container h-[840px] w-[320px] sm:h-[740px] sm:w-[600px] md:h-[800px] md:w-[720px] lg:h-[800px] lg:w-[1000px] xl:w-[1200px]"
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="flex flex-col items-center gap-3 duration-300 md:gap-2 lg:gap-4 xl:gap-6">
                  <img
                    src={story.image}
                    alt="slide_image"
                    className="h-[200px] w-[320px] rounded-lg object-cover blur-sm sm:h-[320px] sm:w-[580px] md:h-[400px] md:w-[720px] lg:h-[400px] lg:w-[800px] "
                  />

                  <h3 className="w-[320px] text-center text-[20px] font-semibold opacity-0 sm:w-[580px] md:w-[720px] md:text-[32px] md:font-medium lg:w-auto">
                    {story.title}
                  </h3>

                  <p className="w-[320px] font-medium opacity-0 sm:w-[580px] md:w-[680px] lg:w-[800px] xl:w-[1000px]">
                    {story.description}
                  </p>
                  <button
                    className="btn h-[39px] min-h-[39px] w-[120px] bg-primary font-medium text-white opacity-0 hover:bg-[#546641c9]"
                    onClick={() => handleNavigateToStory(story.id)}
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
