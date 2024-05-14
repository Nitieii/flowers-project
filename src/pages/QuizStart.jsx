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
    <div className="relative flex items-center justify-center">
      <div className="flex cursor-none flex-col items-center text-[32px]">
        <h1 className="font-semibold">TÌM HIỂU</h1>
        <span className="flex items-end gap-2 font-semibold">
          <h1 className="text-[#546641] underline underline-offset-4">
            LOẠI HOA
          </h1>
          <h3 className="text-[28px]">CỦA</h3>
          <h1 className="text-[#FF4611]">BẠN</h1>
        </span>

        <Link
          to="/quiz"
          className="btn btn-lg mt-10 w-[200px] bg-[#546641] font-medium  text-white hover:bg-[#546641d3]"
        >
          BẮT ĐẦU
        </Link>
      </div>

      <div>
        <img className="absolute bottom-0 left-0" src={Image1} />
        <img className="absolute right-0 top-4" src={Image2} />
        <img className="absolute right-[120px] top-[450px]" src={Image7} />
        <img className="absolute bottom-0 right-0" src={Image6} />
        <img className="absolute bottom-[41px] left-2/3" src={Image4} />
        <img className="absolute bottom-[178px] left-1/4" src={Image8} />
        <img className="absolute left-[73px] top-[264px]" src={Image5} />
        <img className="absolute left-[223px] top-[163px]" src={Image3} />
        <img className="absolute right-0 top-0" src={Image9} />
        <img className="absolute bottom-0 left-0" src={Image10} />
        <img className="absolute left-2/3 top-[66px]" src={Image11} />
      </div>
    </div>
  );
}

export default QuizStart;
