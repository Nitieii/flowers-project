import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
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
  const navigate = useNavigate();

  const storyVideos = [StoryBg1, StoryBg2, StoryBg3, StoryBg4];

  const stories = storiesData.map((_, index) => ({
    ...storiesData[index],
    video: storyVideos[index],
  }));
  const story = stories.find((story) => story.id === parseInt(id));

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div
      className="scrollbar-hide-y h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth  duration-300"
      id="scroll-container"
    >
      <div className="relative h-screen w-full snap-start">
        <video
          src={StoryBg1}
          autoPlay
          loop
          muted={isMute}
          className="-z-10 h-screen w-screen object-cover"
        />

        <div className="absolute top-0 h-full w-full bg-black bg-opacity-20">
          <div className="absolute left-[10%] top-[50%] w-[546px] text-white">
            <div className="h-[300px] border-b ">
              <h1 className="mb-4 text-[40px] font-semibold">
                Story 1 - The introduction
              </h1>

              <p className="text-lg ">
                Rure eiusmod sit cillum laborum occaecat ex fugiat elit non
                fugiat i irure eu veniam id qui. Velit amet ut ipsum irure
                incididunt. Velit Lorem do irure ut eu voluptate irure L.
              </p>
            </div>

            <div className="mt-2 flex items-center">
              <div className="relative h-10 w-10">
                <img className="absolute -top-1" src={ScrollNextIcon} />
                <img className="absolute top-1" src={ScrollNextIcon} />
              </div>
              Scroll down to continue
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-screen w-full snap-start">
        <video
          src={StoryBg2}
          autoPlay
          loop
          muted={isMute}
          className="-z-10 h-screen w-screen object-cover"
        />

        <div className="absolute top-0 h-full w-full bg-black bg-opacity-20">
          <div className="absolute left-[10%] top-[50%] w-[546px] text-white">
            <div className="h-[300px] border-b ">
              <h1 className="mb-4 text-[40px] font-semibold">
                Story 2 - The introduction
              </h1>

              <p className="text-lg ">
                Rure eiusmod sit cillum laborum occaecat ex fugiat elit non
                fugiat i irure eu veniam id qui. Velit amet ut ipsum irure
                incididunt. Velit Lorem do irure ut eu voluptate irure L.
              </p>

              <button
                className="btn mt-10 border-none bg-[#546641] text-white hover:bg-[#62774c]"
                onClick={() => navigate("/quiz")}
              >
                Take Quiz
              </button>
            </div>

            <div className="mt-2 flex items-center">
              <div className="relative h-10 w-10">
                <img className="absolute -top-1" src={ScrollNextIcon} />
                <img className="absolute top-1" src={ScrollNextIcon} />
              </div>
              Scroll down to continue
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-screen w-full snap-start">
        <video
          src={StoryBg3}
          autoPlay
          loop
          muted={isMute}
          className="-z-10 h-screen w-screen object-cover"
        />

        <div className="absolute top-0 h-full w-full bg-black bg-opacity-20">
          <div className="absolute left-[10%] top-[50%] w-[546px] text-white">
            <div className="h-[300px] border-b ">
              <h1 className="mb-4 text-[40px] font-semibold">
                Story 1 - The introduction
              </h1>

              <p className="text-lg ">
                Rure eiusmod sit cillum laborum occaecat ex fugiat elit non
                fugiat i irure eu veniam id qui. Velit amet ut ipsum irure
                incididunt. Velit Lorem do irure ut eu voluptate irure L.
              </p>
            </div>

            <div className="mt-2 flex items-center">
              <div className="relative h-10 w-10">
                <img className="absolute -top-1" src={ScrollNextIcon} />
                <img className="absolute top-1" src={ScrollNextIcon} />
              </div>
              Scroll down to continue
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-screen w-full snap-start">
        <video
          src={StoryBg4}
          autoPlay
          loop
          muted={isMute}
          className="-z-10 h-screen w-screen object-cover"
        />

        <div className="absolute top-0 h-full w-full bg-black bg-opacity-20">
          <div className="absolute left-[10%] top-[50%] w-[546px] text-white">
            <div className="h-[300px] border-b ">
              <h1 className="mb-4 text-[40px] font-semibold">
                Story 1 - The introduction
              </h1>

              <p className="text-lg ">
                Rure eiusmod sit cillum laborum occaecat ex fugiat elit non
                fugiat i irure eu veniam id qui. Velit amet ut ipsum irure
                incididunt. Velit Lorem do irure ut eu voluptate irure L.
              </p>
            </div>

            <div className="mt-2 flex items-center">
              <div className="relative h-10 w-10">
                <img className="absolute -top-1" src={ScrollNextIcon} />
                <img className="absolute top-1" src={ScrollNextIcon} />
              </div>
              Scroll down to continue
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-10 z-10">
        <button
          className="btn relative rounded-none border-none bg-black bg-opacity-40 text-xl text-white hover:bg-black hover:bg-opacity-60"
          onClick={() => setIsMute(!isMute)}
        >
          {isMute ? <VscMute /> : <VscUnmute />}
        </button>
      </div>
    </div>
  );
}

export default Story;
