import { close, question } from "../assets";
import QuizzAnswer from "../components/quizz/QuizzAnswer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizzPage = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(question[index]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

  const handleAnswerClick = (optionId) => {
    setSelectedAnswer(optionId);
    setIsSelected(true);
  };

  const handleNextClick = () => {
    //check if is the last question naviagte to '/'
    if (index === question.length - 1) {
      // return window.location.replace("/");
      return;
    }
    setIndex(index + 1);
    setQuestions(question[index + 1]);
    setSelectedAnswer(null);
    setIsSelected(false);
  };

  const handleClose = () => {
    navigate("/quizStart");
    setIndex(0);
    setIsSelected(false);
  }

  const progress = ((index + 1) / question.length) * 100;
  console.log(progress);

  return (
    <div className="bg-[#EDE8E3] ">
      <div className="max-container ">
        <div className="pt-[40px] px-[40px] pb-[90px] flex flex-row justify-between items-center max-sm:pb-[60px]">
          <h3 className="font-semibold mx-auto text-2xl font-montserrat ">
            Flowers Quiz #{index + 1}
          </h3>
          <img
            className="cursor-pointer"
            src={close}
            alt="close"
            width={50}
            height={50}
            onClick={handleClose}
          />
        </div>

        <h2
          className={`text-center font-semibold text-[28px] text-primary font-montserrat mb-[100px] transition-all duration-700  max-sm:px-4 max-sm:mb-[60px] ${
            isSelected ? "-translate-y-2" : ""
          }`}
        >
          {questions.question}
        </h2>
        <div className="flex flex-col justify-center items-center mb-[150px]">
          {questions.options.map((item) => (
            <QuizzAnswer
              key={item.id}
              option={item}
              selected={selectedAnswer === item.id}
              onClick={() => handleAnswerClick(item.id)}
            />
          ))}
        </div>
      </div>
      <div className="bg-white flex ">
        <div className="max-container flex flex-row justify-center  items-center py-[20px] ">
          <div
            className={`w-[200px] h-[16px] bg-[#EDE8E3] rounded-full mr-[14px] `}
          >
            <div
              className={`h-[16px]  rounded-full transition-colors duration-700 ${
                isSelected ? "bg-[#71845C]" : "bg-[#31CD63]"
              } `}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mr-[209px] text-[#757575] font-[900] max-sm:mr-[90px]">
            {index + 1}/{question.length}
          </p>

          <button
            className={`bg-[#71845C] text-white px-[77px] py-[20px] rounded-md font-bold text-base uppercase text-nowrap  transition-colors duration-700 max-sm:px-[40px] max-sm:py-[15px] ${
              !isSelected ? "cursor-not-allowed bg-[#747475]" : "cursor-pointer"
            }`}
            onClick={handleNextClick}
          >
            Tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizzPage;
