import Image1 from "../assets/QuizStartPageImgs/Backgroudimg1.png";
import Image2 from "../assets/QuizStartPageImgs/Backgroudimg2.png";
import Image3 from "../assets/QuizStartPageImgs/Backgroudimg3.png";
import Image4 from "../assets/QuizStartPageImgs/Backgroudimg4.png";
import Image5 from "../assets/QuizStartPageImgs/Backgroudimg5.png";
import Image6 from "../assets/QuizStartPageImgs/Backgroudimg6.png";
import Image7 from "../assets/QuizStartPageImgs/Backgroudimg7.png";
import Image8 from "../assets/QuizStartPageImgs/Backgroudimg8.png";
import Image9 from "../assets/QuizStartPageImgs/Backgroudimg9.png";
import Image10 from "../assets/QuizStartPageImgs/Backgroudimg10.png";
import Image11 from "../assets/QuizStartPageImgs/Backgroudimg11.png";
import { Link } from "react-router-dom";

function QuizStart() {
  return (
    <div className="flex justify-center items-center relative">
      <div className="flex flex-col items-center text-[32px] cursor-none">
        <h1 className="font-semibold">FIND OUT</h1>
        <span className="flex gap-2 items-end font-semibold">
          <h1 className="underline underline-offset-4 text-[#546641]">
            YOUR TYPE
          </h1>
          <h3 className="text-[28px]">OF</h3>
          <h1 className="text-[#FF4611]">FLOWERS</h1>
        </span>

        <Link
          to="/quiz"
          className="btn bg-[#546641] hover:bg-[#546641d3] w-[120px] btn-lg text-white font-medium mt-10"
        >
          START
        </Link>
      </div>

      <div>
        <img className="absolute bottom-0 left-0" src={Image1} />
        <img className="absolute top-4 right-0" src={Image2} />
        <img className="absolute top-[450px] right-[120px]" src={Image7} />
        <img className="absolute bottom-0 right-0" src={Image6} />
        <img className="absolute bottom-[41px] left-2/3" src={Image4} />
        <img className="absolute bottom-[178px] left-1/4" src={Image8} />
        <img className="absolute top-[264px] left-[73px]" src={Image5} />
        <img className="absolute top-[163px] left-[223px]" src={Image3} />
        <img className="absolute top-0 right-0" src={Image9} />
        <img className="absolute bottom-0 left-0" src={Image10} />
        <img className="absolute top-[66px] left-2/3" src={Image11} />
      </div>
    </div>
  );
}

export default QuizStart;
