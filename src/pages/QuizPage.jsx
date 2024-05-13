import { close } from "../assets";
import QuizAnswer from "../components/quizz/QuizzAnswer";

const QuizPage = () => {
  return (
    <div className="bg-[#EDE8E3] ">
      <div className="max-container ">
        <div className="pt-[40px] px-[40px] pb-[90px] flex flex-row justify-between items-center">
          <h3 className="font-semibold mx-auto text-2xl font-poppins">
            Flowers Quiz #1
          </h3>
          <img className="" src={close} alt="close" width={50} height={50} />
        </div>

        <h2 className="text-center font-semibold text-[28px] text-primary font-poppins mb-[100px]">
          Bạn định dành tặng món quà này cho ai ?
        </h2>
        <div className="flex flex-col justify-center items-center mb-[150px]">
          <QuizAnswer />
          <QuizAnswer />
        </div>
      </div>
      <div className="bg-white ">
        <div className="max-container flex flex-row  items-center py-[20px] px-[375px]">

            <div className="w-[200px] h-[16px] bg-gray-300 rounded-full mr-[14px]">
              <div
                className="h-[16px] bg-primary rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
            <p className="mr-[209px]">1/5</p>

          <button className="bg-primary text-white px-[77px] py-[20px] rounded-md font-bold text-base uppercase text-nowrap">
            Tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
