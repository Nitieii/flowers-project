import React from 'react'

const QuizzBanner = () => {
  return (
    <div className="bg-quizz bg-cover bg-center xl:min-h-screen">
      <div className="max-container py-[239px] px-[475px] flex flex-col  items-center max-sm:px-[100px]">
        <h1 className="text-center text-[32px] font-semibold mb-[40px] text-nowrap leading-normal">
          FIND OUT <br />
          <span className="underline text-[#546641] text-[40px]">
            YOUR TYPE
          </span>{" "}
          OF <span className="text-[#FF4611] text-[40px]">FLOWERS</span>
        </h1>
        <button className="text-center bg-[#546641] w-[120px] h-[60px] rounded-lg text-white">
          START
        </button>
      </div>
    </div>
  );
}

export default QuizzBanner