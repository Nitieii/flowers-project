const QuizzAnswer = ({ option, selected, onClick }) => {

  console.log(selected)
  return (
    <div
      className={`flex flex-row items-center w-[500px] rounded-lg mb-[30px] py-[16px] px-[24px] gap-[30px] opacity-1  transition-colors duration-700 ${
        selected ? "bg-[#9EAA92]" : "bg-white"
      }`}
      onClick={onClick}
    >
      <p className="text-center py-[8px] px-[16px] bg-secondary rounded-full font-semibold text-[20px]">
        {option.id}
      </p>
      <p className="font-semibold text-[20px]">{option.value}</p>
    </div>
  );
};

export default QuizzAnswer;
