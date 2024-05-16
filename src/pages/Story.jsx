import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { VscUnmute, VscMute } from "react-icons/vsc";

import StoryBgVideo1 from "../assets/StoryPageBackgrounds/bgVideo1.mp4";
import StoryBgVideo2 from "../assets/StoryPageBackgrounds/bgVideo2.mp4";
import StoryBgVideo3 from "../assets/StoryPageBackgrounds/bgVideo3.mp4";
import StoryBgImg1 from "../assets/StoryPageBackgrounds/bgImage1.jpg";
import StoryBgImg2 from "../assets/StoryPageBackgrounds/bgImage2.jpg";
import StoryBgImg3 from "../assets/StoryPageBackgrounds/bgImage3.jpg";

import ScrollNextIcon from "../assets/StoryPageIcons/chevron-down.svg";

import storiesData from "../data/stories.json";

function Story() {
  const { id } = useParams();
  const [isMute, setIsMute] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(null);
  // Initialize chaptersRef as an array
  const chaptersRef = useRef([]);

  const storyBackground = [
    [StoryBgImg1, StoryBgVideo1],
    [StoryBgImg2, StoryBgVideo2],
    [StoryBgImg3, StoryBgVideo3],
  ];

  const stories = storiesData.map((_, index) => ({
    ...storiesData[index],
    background: storyBackground[index],
  }));
  const story = stories.find((story) => story.id === parseInt(id));

  const navigate = useNavigate();

  // Highlight the chapter on view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ensure the currentChapter state is set to a valid index
            setCurrentChapter(chaptersRef.current.indexOf(entry.target));
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      },
    );
    chaptersRef.current.forEach((chapter) => {
      if (chapter) {
        observer.observe(chapter);
      }
    });

    return () => {
      // Clean up by unobserving all elements
      chaptersRef.current.forEach((chapter) => {
        if (chapter) {
          observer.unobserve(chapter);
        }
      });
    };
  }, []);

  if (!story) {
    return <div>Story not found</div>;
  }
  return (
    <div className="scrollbar-hide-y h-screen w-screen snap-y snap-mandatory overflow-hidden overflow-y-scroll scroll-smooth bg-transparent duration-300">
      {/* Set background of the page base on it type */}
      {story.background.map((bg, index) => {
        if (bg.split(".")[1] === "mp4")
          return (
            <video
              key={index}
              src={bg}
              className={`fixed top-0 h-screen w-screen object-cover opacity-0 duration-[2s] ${currentChapter === index ? "opacity-100" : ""}`}
              autoPlay
              loop
              muted={isMute}
              playsInline
              loading="lazy"
            />
          );
        else
          return (
            <img
              key={index}
              src={bg}
              className={`fixed top-0 h-screen w-screen object-cover opacity-0 duration-[2s] ${currentChapter === index ? "opacity-100" : ""}`}
            />
          );
      })}

      {story.content.map((chapter, index) => (
        <div
          className="relative h-screen w-screen snap-start bg-transparent"
          key={index}
          id={`chapter-${index}`}
          ref={(el) => (chaptersRef.current[index] = el)}
        >
          <div className="absolute top-0 h-full w-full bg-black bg-opacity-20">
            <div className="absolute bottom-0 left-[2%] w-auto min-w-[360px] max-w-[546px] text-white md:w-[546px] lg:left-[10%]">
              <div className="h-[560px] md:h-[500px]">
                {index === 0 && id === String(1) && (
                  <div className="-ml-10 mb-2 flex w-auto scale-[75%] items-end gap-2">
                    <h1 className="font-tanWaltzingMathilde text-[40px] leading-tight">
                      <span className="text-nowrap font-tanWaltzingMathilde">
                        Có 1
                      </span>
                      <br />
                      loài
                    </h1>
                    <h1 className="font-tanWaltzingMathilde text-[80px] leading-tight">
                      hoa
                    </h1>
                    <h1 className="text-nowrap font-tanWaltzingMathilde text-[40px] italic leading-tight">
                      không tàn
                    </h1>
                  </div>
                )}

                {index === 0 && id === String(2) && (
                  <div className="relative mb-2 flex h-[170px] w-[360px] scale-[85%] items-end gap-3 md:w-[600px]">
                    <h1 className="absolute top-0 w-full font-tanWaltzingMathilde text-[100px] leading-tight">
                      E
                    </h1>

                    <h1 className="absolute left-[73px] top-[30px] font-tanWaltzingMathilde text-[75px] leading-tight">
                      m
                    </h1>

                    <h1 className="absolute left-[170px] top-[-15px] font-vivaldi text-[140px] italic leading-tight">
                      hoa
                    </h1>

                    <h1 className="absolute left-[73px] top-[10px] font-tanMonCheri text-[30px] leading-none">
                      có thể
                    </h1>

                    <h1 className="absolute left-[220px] top-[10px] font-tanMonCheri text-[30px] leading-none">
                      tự mua
                    </h1>

                    <h1 className="absolute bottom-0 left-0 w-full font-tanMonCheri text-[36px] leading-none">
                      cho chính mình
                    </h1>
                  </div>
                )}

                {index === 0 && id === String(3) && (
                  <div className="relative mb-2 flex h-[150px] w-[300px] items-end gap-3">
                    <h1 className="absolute top-0 font-tanWaltzingMathilde text-[120px] leading-tight">
                      H
                    </h1>

                    <h1 className="absolute left-[93px] top-[10px] font-vivaldi text-[91px] leading-none">
                      oa
                    </h1>

                    <h1 className="absolute left-[160px] top-[55px] w-full font-montserrat text-[26px] italic leading-tight">
                      trao bất chợt
                    </h1>

                    <h1 className="absolute left-[93px] top-[105px] font-montserrat text-[26px] italic leading-tight">
                      nở bừng
                    </h1>

                    <h1 className="absolute left-[210px] top-[78px] w-full font-vivaldi text-[58.5px] leading-tight">
                      niềm vui
                    </h1>
                  </div>
                )}

                <h3 className="font-float text-3xl leading-tight">
                  Chapter {index + 1}: {story.chapterTitle[index]}
                </h3>

                <p className="text-md w-auto italic lg:w-[500px]">{chapter}</p>
              </div>

              {currentChapter + 1 !== story.content.length && (
                <div className="mt-2 inline-flex items-center border-t">
                  <div className="relative h-10 w-10">
                    <img className="absolute" src={ScrollNextIcon} />
                  </div>
                  Kéo xuống để tiếp tục
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="absolute right-0 sm:right-36 top-10 z-10">
        <button
          className="btn relative rounded-none border-none bg-black bg-opacity-40 text-xl text-white hover:bg-black hover:bg-opacity-60"
          onClick={() => setIsMute(!isMute)}
        >
          {isMute ? <VscMute /> : <VscUnmute />}
        </button>
      </div>

      <div className="absolute bottom-20 left-[10%]">
        <button
          className={`btn w-36 ${id === String(2) && currentChapter === 1 ? "opacity-100" : "opacity-0"}`}
          onClick={() => navigate("/quizStart")}
          disabled={!(id === String(2) && currentChapter === 1)}
        >
          Quiz
        </button>
      </div>

      <div className="absolute right-0 top-0 hidden h-screen w-24 flex-col justify-center bg-black bg-opacity-20 text-white duration-300 sm:flex">
        {story.content.map((_, index) => (
          <div key={index} className="relative flex">
            <button
              className="fixed top-0 bg-black bg-opacity-30 p-2 text-start text-sm duration-300 hover:bg-opacity-70"
              onClick={() => navigate("/")}
            >
              Quay về trang chủ
            </button>

            <div
              className={`${currentChapter === index ? "" : "bg-opacity-0"} h-full w-1 bg-yellow-500 duration-300`}
            ></div>
            <a
              href={`chapter-${index}`}
              className={`${currentChapter === index ? "font-semibold" : ""} w-full bg-black bg-opacity-0 p-2 text-sm hover:bg-opacity-40`}
              onClick={(e) => {
                e.preventDefault();
                const target = e.target;
                const id = target.getAttribute("href")?.replace("#", "");
                const element = document.getElementById(String(id));

                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Chapter {index + 1} <br />
              {story.chapterTitle[index]}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
