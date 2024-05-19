import {
  close,
  question,
  resultsMatrix,
  tulip,
  rose,
  karma,
  money,
  violet,
  sun,
} from "../assets";
import QuizzAnswer from "../components/quizz/QuizzAnswer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoRefreshOutline, IoHomeOutline } from "react-icons/io5";

const QuizzPage = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(question[index]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [result, setResult] = useState(null);
  // const [images,setImages] = useState([rose, karma, tulip, violet, money]);
  const [isResultMode, setIsResultMode] = useState(false);

  const navigate = useNavigate();

  const images = {
    "Hoa hồng": rose,
    "Hoa tulip": tulip,
    "Hoa đồng tiền": money,
    "Hoa violet": violet,
    "Hoa cẩm chướng": karma,
    "Hoa hướng dương": sun,
  };

  const handleAnswerClick = (optionId) => {
    setSelectedAnswer(optionId);
    setIsSelected(true);
  };

  const handleNextClick = () => {
    //check if is the last question naviagte to '/'
    const newSelectedAnswers = [...selectedAnswers, selectedAnswer];
    setSelectedAnswers(newSelectedAnswers);
    if (index === question.length - 1) {
      // return window.location.replace("/");
      const resultEntry = resultsMatrix.find(
        (r) => r.sequence.join("") === newSelectedAnswers.join(""),
      );
      const finalResult = resultEntry
        ? resultEntry.result
        : "No matching result";
      setResult(finalResult);
      setIsResultMode(true);

      console.log(finalResult);
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

  const handleReset = () => {
    setIndex(0);
    setIsSelected(false);
    setSelectedAnswers([]);
    setResult(null);
    setIsResultMode(false);
    setSelectedAnswer(null);

    navigate("/quizStart");
  };

  const progress = ((index + 1) / question.length) * 100;

  return (
    <div className="h-screen bg-[#EDE8E3]">
      <div className="max-container">
        <div className="flex flex-row items-center justify-between px-[40px] pb-[90px] pt-[40px] max-sm:pb-[60px]">
          <h3 className="mx-auto font-montserrat text-2xl font-semibold">
            {!isResultMode ? `Flowers Quiz #${index + 1}` : "Kết quả"}
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
        {!isResultMode && (
          <h2
            className={`mb-[100px] text-center font-montserrat text-[28px] font-semibold text-primary transition-all duration-700  max-sm:mb-[60px] max-sm:px-4 ${
              isSelected ? "-translate-y-2" : ""
            }`}
          >
            {questions.question}
          </h2>
        )}

        <div className="flex flex-col items-center ">
          {isResultMode ? (
            <div className="flex flex-col items-center justify-center ">
              <button
                className="text-nowrap rounded-md bg-[#71845C] px-[30px] py-[20px] text-base font-semibold text-white transition-colors duration-700 max-sm:py-[15px] sm:px-[50px]"
                onClick={() =>
                  document.getElementById("quiz-result").showModal()
                }
              >
                Xem kết quả
              </button>
            </div>
          ) : (
            questions.options.map((item) => (
              <QuizzAnswer
                key={item.id}
                option={item}
                selected={selectedAnswer === item.id}
                onClick={() => handleAnswerClick(item.id)}
              />
            ))
          )}
        </div>
      </div>
      <div className="fixed bottom-0 right-0  flex w-screen bg-white max-sm:mt-[120px]">
        <div className="max-container flex flex-row items-center justify-center gap-6 py-[20px] sm:gap-20">
          {!isResultMode && (
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
          )}

          {!isResultMode && (
            <p className=" font-[900] text-[#757575]">
              {index + 1}/{question.length}
            </p>
          )}

          <button
            className={`text-nowrap rounded-md bg-[#71845C] px-[30px] py-[20px] text-base font-semibold text-white transition-colors duration-700 max-sm:py-[15px] sm:px-[50px] ${
              !isSelected ? "cursor-not-allowed bg-[#747475]" : "cursor-pointer"
            }`}
            onClick={!isResultMode ? handleNextClick : handleReset}
            disabled={!isSelected}
          >
            {!isResultMode ? "Tiếp theo" : "Làm lại "}
          </button>
        </div>
      </div>

      <dialog id="quiz-result" className="modal">
        <div className="modal-box flex max-w-[800px] flex-col items-center">
          <h3 className="mb-8 text-center text-3xl font-bold">
            Loại hoa của bạn là:
          </h3>
          <img
            className="mb-[20px]"
            src={images[result]}
            alt="result"
            width={700}
            height={700}
          />

          <div className="flex w-full flex-col gap-x-8 gap-y-3 sm:w-auto sm:flex-row">
            <button
              className="sm:min-h-auto btn h-8 min-h-8 w-full bg-[#71845C] text-white hover:bg-[#71845cd2] sm:h-12 sm:w-48"
              onClick={() => navigate("/")}
            >
              <IoHomeOutline /> Về trang chủ
            </button>
            <button
              className="sm:min-h-auto btn h-8 min-h-8 w-full bg-[#71845C] text-white hover:bg-[#71845cd2] sm:h-12 sm:w-48"
              onClick={handleReset}
            >
              <IoRefreshOutline /> Làm lại
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default QuizzPage;
