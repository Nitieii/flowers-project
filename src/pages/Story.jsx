import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { VscUnmute, VscMute } from "react-icons/vsc";

import StoryBg1 from "../assets/video/story1.mp4";
import StoryBg2 from "../assets/video/story2.mp4";
import StoryBg3 from "../assets/video/story3.mp4";
import StoryBg4 from "../assets/video/story4.mp4";

import ScrollNextIcon from "../assets/StoryPageIcons/chevron-down.svg";

import storiesData from "../data/stories.json";

function Story() {
  const { id } = useParams();
  const [isMute, setIsMute] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(null);
  // Initialize chaptersRef as an array
  const chaptersRef = useRef([]);

  const storyVideos = [StoryBg1, StoryBg2, StoryBg3, StoryBg4];

  const stories = storiesData.map((_, index) => ({
    ...storiesData[index],
    video: storyVideos[index],
  }));
  const story = stories.find((story) => story.id === parseInt(id));

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
    <div className="scrollbar-hide-y h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth duration-300">
      {story.content.map((chapter, index) => (
        <div
          className="relative h-screen w-full snap-start"
          key={index}
          id={`chapter-${index}`}
          ref={(el) => (chaptersRef.current[index] = el)}
        >
          <video
            src={story.video}
            autoPlay
            loop
            muted={isMute}
            className="-z-10 h-screen w-screen object-cover"
          />

          <div className="absolute top-0 h-full w-full bg-black bg-opacity-20">
            <div className="absolute left-[10%] top-[50%] w-[546px] text-white">
              <div className="h-[350px] border-b ">
                {index === 0 && id === String(1) && (
                  <div className="mb-2 flex items-end gap-3">
                    <h1 className="font-tanWaltzingMathilde text-[40px] leading-tight">
                      Có 1 <br />
                      loài
                    </h1>
                    <h1 className="font-tanWaltzingMathilde text-[80px] leading-tight">
                      hoa
                    </h1>
                    <h1 className="font-tanWaltzingMathilde text-[40px] italic leading-tight">
                      không tàn
                    </h1>
                  </div>
                )}

                <h3 className="font-float text-3xl">Chapter {index + 1}:</h3>

                <p className="text-lg">{chapter}</p>
              </div>
              <div className="mt-2 flex items-center">
                <div className="relative h-10 w-10">
                  <img className="absolute -top-1" src={ScrollNextIcon} />
                  <img className="absolute top-1" src={ScrollNextIcon} />
                </div>
                Kéo xuống để tiếp tục
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute right-36 top-10 z-10">
        <button
          className="btn relative rounded-none border-none bg-black bg-opacity-40 text-xl text-white hover:bg-black hover:bg-opacity-60"
          onClick={() => setIsMute(!isMute)}
        >
          {isMute ? <VscMute /> : <VscUnmute />}
        </button>
      </div>

      <div className="absolute right-0 top-0 flex h-screen w-32 flex-col justify-center bg-black bg-opacity-20 text-white">
        {story.content.map((_, index) => (
          <div key={index} className="flex">
            <div
              className={`${currentChapter === index ? "" : "bg-opacity-0"} h-full w-1 bg-yellow-500 duration-300`}
            ></div>
            <a
              href={`chapter-${index}`}
              className={`${currentChapter === index ? "font-semibold" : ""} p-2`}
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
              Chapter {index + 1}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
