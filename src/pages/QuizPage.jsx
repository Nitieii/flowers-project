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
    const isConfirmed = window.confirm(
      "Tiến độ của bạn sẽ mất. Bạn có muốn tiếp tục không?",
    );
    if (isConfirmed) {
      navigate("/quizStart");
      setIndex(0);
      setIsSelected(false);
    }
  };

  const progress = ((index + 1) / question.length) * 100;
  console.log(progress);

  return (
    <div className="h-screen bg-[#EDE8E3]">
      <div className="max-container">
        <div className="flex flex-row items-center justify-between px-[40px] pb-[90px] pt-[40px] max-sm:pb-[60px]">
          <h3 className="mx-auto font-montserrat text-2xl font-semibold">
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
          className={`mb-[100px] text-center font-montserrat text-[28px] font-semibold text-primary transition-all duration-700  max-sm:mb-[60px] max-sm:px-4 ${
            isSelected ? "-translate-y-2" : ""
          }`}
        >
          {questions.question}
        </h2>
        <div className="flex flex-col items-center justify-center">
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
      <div className="fixed bottom-0 right-0  flex w-screen bg-white max-sm:mt-[120px]">
        <div className="max-container flex flex-row items-center justify-center py-[20px] gap-6 sm:gap-20">
          <div
            className={`h-[16px] w-[200px] rounded-full bg-[#EDE8E3] max-sm:w-[100px]`}
          >
            <div
              className={`h-[16px]  rounded-full transition-colors duration-700 ${
                isSelected ? "bg-[#71845C]" : "bg-[#31CD63]"
              } `}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className=" font-[900] text-[#757575]">
            {index + 1}/{question.length}
          </p>

          <button
            className={`text-nowrap rounded-md bg-[#71845C] px-[30px] sm:px-[50px] py-[20px] text-base font-semibold text-white transition-colors duration-700 max-sm:py-[15px] ${
              !isSelected ? "cursor-not-allowed bg-[#747475]" : "cursor-pointer"
            }`}
            onClick={handleNextClick}
            disabled={!isSelected}
          >
            Tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizzPage;
