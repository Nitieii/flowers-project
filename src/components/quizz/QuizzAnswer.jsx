const QuizzAnswer = ({ option, selected, onClick }) => {

  console.log(selected)
  return (
    <div
      className={`flex flex-row items-center w-[500px] rounded-lg mb-[30px] py-[16px] px-[24px] gap-[30px] opacity-1  transition-colors duration-700 max-sm:w-[380px] ${
        selected ? "bg-[#9EAA92]" : "bg-white"
      }`}
      onClick={onClick}
    >
      <p
        className={`text-center py-[8px] px-[16px]  rounded-full font-semibold text-[20px] transition-colors duration-700 max-sm:text-[18px] max-sm:px-[12px] max-sm:py-[4px] ${
          selected ? "text-[#546641] bg-[#fff]" : "text-[#000] bg-secondary"
        }`}
      >
        {option.id}
      </p>
      <p
        className={`font-semibold text-[20px] transition-colors duration-700 max-sm:text-[18px] ${
          selected ? "text-[#fff]" : "text-[#000]"
        }`}
      >
        {option.value}
      </p>
    </div>
  );
};

export default QuizzAnswer;
