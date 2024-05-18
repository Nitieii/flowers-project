const QuizzBanner = () => {
  return (
    <div className="bg-quizz bg-cover bg-center xl:min-h-screen">
      <div className="max-container flex flex-col items-center px-[475px]  py-[239px] max-sm:px-[100px]">
        <h1 className="mb-[40px] text-nowrap text-center text-[32px] font-semibold leading-normal">
          FIND OUT <br />
          <span className="text-[40px] text-[#546641] underline">
            YOUR TYPE
          </span>{" "}
          OF <span className="text-[40px] text-[#FF4611]">FLOWERS</span>
        </h1>
        <button className="h-[60px] w-[120px] rounded-lg bg-[#546641] text-center text-white">
          START
        </button>
      </div>
    </div>
  );
};

export default QuizzBanner;
