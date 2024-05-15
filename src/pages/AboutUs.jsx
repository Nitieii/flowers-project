import BgImage1 from "../assets/AboutUsPage/AboutUsBg1.jpg";

function AboutUs() {
  return (
    <div className="">
      <section
        style={{
          backgroundImage: `url(${BgImage1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute left-0 top-0 w-screen py-10 "
      >
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-primary opacity-30"></div>

        <div className="z-10 mt-28 flex justify-center text-white">
          <div className="relative h-[168px] w-[300px]">
            <h1 className="absolute top-0 font-tanMonCheri text-[40px]">
              Nghĩ khác
            </h1>
            <h1 className="absolute right-[55%] top-[20%] font-vivaldi text-[40px]">
              về
            </h1>
            <h1 className="absolute bottom-0 right-0 font-vivaldi text-[160px] font-medium leading-none">
              hoa
            </h1>
          </div>
        </div>

        <div className="z-10 mx-auto w-[820px]">
          <h3 className="mb-6 font-tanMonCheri text-[28px] text-white">
            VỀ CHÚNG MÌNH
          </h3>

          <p className="ms-4 italic text-white">
            Chào mừng bạn đến với &quot;Nghĩ Khác về Hoa&quot;, một sản phẩm của
            D-Flower8 - nơi chúng mình đặt nền tảng cho một cái nhìn mới về sức
            mạnh của hoa trong cuộc sống hàng ngày của chúng ta. Hoa không chỉ
            là vật trang trí, mà còn là biểu tượng của tình yêu, sự gắn kết và
            sự tươi mới. Tại &quot;Nghĩ Khác về Hoa&quot; và Đ-Flower8, chúng
            mình tôn vinh và tôn trọng vẻ đẹp tự nhiên của hoa, từ việc chọn lựa
            các loại hoa tươi mới nhất cho đến việc tạo ra những thiết kế độc
            đáo và tinh tế nhất.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
