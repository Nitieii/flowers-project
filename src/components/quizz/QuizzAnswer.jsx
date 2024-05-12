
const QuizzAnswer = ({ option, selected, onClick }) => {
  return (
    <div
      className={`flex flex-row items-center bg-white w-[500px] rounded-lg mb-[30px] py-[16px] px-[24px] gap-[30px]  transition-colors duration-700 ${
        selected ? "bg-[#9EAA92]" : ""
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

export default QuizzAnswer