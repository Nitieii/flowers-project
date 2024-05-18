import PropTypes from "prop-types";

const QuizzAnswer = ({ option, selected, onClick }) => {
  return (
    <div
      className={`opacity-1 mx-4 mb-[30px] flex w-[500px] cursor-pointer flex-row items-center gap-[30px] rounded-lg px-[24px] py-[16px] transition-colors duration-700 max-sm:w-[390px] ${
        selected ? "bg-primary" : "bg-white"
      }`}
      onClick={onClick}
    >
      <p
        className={`rounded-full px-[16px] py-[8px]  text-center text-[20px] font-semibold transition-colors duration-700 max-sm:px-[12px] max-sm:py-[4px] max-sm:text-[18px] ${
          selected ? "bg-[#fff] text-[#546641]" : "bg-[#F4F0E8] text-[#000]"
        }`}
      >
        {option.id}
      </p>
      <p
        className={`text-[20px] font-semibold transition-colors duration-700 max-sm:text-[18px] ${
          selected ? "text-[#fff]" : "text-[#000]"
        }`}
      >
        {option.value}
      </p>
    </div>
  );
};

QuizzAnswer.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default QuizzAnswer;
