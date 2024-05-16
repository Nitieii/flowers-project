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
    <div
      className="relative flex items-center justify-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <div className="z-10 flex scale-100 cursor-none flex-col items-center justify-center text-[32px] lg:scale-125">
        <h1 className="font-tanMonCheri font-semibold">Tìm hiểu</h1>
        <span className="flex items-end gap-2 font-semibold">
          <h1 className="font-vivaldi text-[70px] text-[#546641] ">loại hoa</h1>
          <h3 className="text-[28px]">của</h3>
          <h1 className="font-vivaldi text-[60px] leading-none text-[#FF4611]">
            bạn
          </h1>
        </span>

        <Link
          to="/quiz"
          className="btn mt-10 w-[200px] bg-[#546641] font-medium text-white  sm:btn-lg hover:bg-[#546641d3]"
        >
          BẮT ĐẦU
        </Link>
      </div>

      <div>
        <img
          className="absolute bottom-0 left-0 scale-75 sm:-left-10 sm:bottom-0  sm:scale-100 "
          src={Image1}
        />
        <img className="absolute right-0 top-4 hidden sm:block" src={Image2} />
        <img className="absolute right-[120px] top-[450px]" src={Image7} />
        <img className="absolute bottom-0 right-0" src={Image6} />
        <img
          className="absolute bottom-[41px] left-2/3 hidden sm:block"
          src={Image4}
        />
        <img
          className="absolute bottom-[178px] left-1/4 hidden md:block"
          src={Image8}
        />
        <img className="absolute left-[73px] top-[264px]" src={Image5} />
        <img
          className="absolute left-[223px] top-[163px] hidden sm:block"
          src={Image3}
        />
        <img className="absolute right-0 top-0" src={Image9} />
        <img className="absolute bottom-0 left-0" src={Image10} />
        <img
          className="absolute left-2/3 top-[66px] hidden lg:block"
          src={Image11}
        />
      </div>
    </div>
  );
}

export default QuizStart;
