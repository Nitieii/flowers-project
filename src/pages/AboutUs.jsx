import { useEffect, useState } from "react";
import BgImage1 from "../assets/AboutUsPage/AboutUsBg1.jpg";
import Image1 from "../assets/AboutUsPage/Image1.png";
import Logo from "../assets/Logo/Logo-light.png";
import AboutUsCard from "../components/AboutUsCard";
import Card1 from "../assets/AboutUsPage/Card1.png";
import Card2 from "../assets/AboutUsPage/Card2.png";
import Card3 from "../assets/AboutUsPage/Card3.png";

function AboutUs() {
  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTopPage(false);
      } else {
        setIsTopPage(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <section
        style={{
          backgroundImage: `url(${BgImage1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute left-0 top-0 h-[500px] w-screen bg-cover bg-center  py-10"
      ></section>
      <div style={isTopPage ? { height: 500 - 55 } : { height: 525 }}></div>

      <section className="container mx-auto my-8">
        <div className="flex justify-center gap-8">
          <div className="">
            <div className="relative ms-20 mt-20 h-[168px] w-[300px] scale-150">
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

            <p className="mt-6 w-[560px] text-justify text-xl italic leading-8">
              Chào mừng bạn đến với &quot;Nghĩ Khác về Hoa&quot; một sản phẩm
              của Dflower8 - nơi chúng mình đặt nền tảng cho một cái nhìn mới về
              sức mạnh của hoa trong cuộc sống hàng ngày của chúng ta. Hoa không
              chỉ là vật trang trí, mà còn là biểu tượng của tình yêu, sự gắn
              kết và sự tươi mới. Tại &quot;Nghĩ Khác về Hoa&quot; và Dflower8,
              chúng mình tôn vinh và tôn trọng vẻ đẹp tự nhiên của hoa, từ việc
              chọn lựa các loại hoa tươi mới nhất cho đến việc tạo ra những
              thiết kế độc đáo và tinh tế nhất.
            </p>
          </div>

          <div className="">
            <img src={Image1} className="w-[580px]" />
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-10">
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} alt="Logo" className="w-[500px]" />

          <h2 className="mb-8 mt-12 font-tanMonCheri text-[40px] tracking-widest">
            GIẢI THÍCH Ý NGHĨA THƯƠNG HIỆU
          </h2>

          <p className="w-[1000px] text-xl italic leading-8">
            Dflower8 ở đây: “D là viết tắt cho tên của cô Lê Vũ Điệp, 8 là Nhóm
            8 còn flower là hoa, là cầu nối giữa cô Lê Vũ Điệp và Nhóm 8”.
            <br />
            <br />
            Với Dflower8, nhóm muốn chứng minh sức mạnh kết nối của hoa. Qua đó,
            nhóm còn mong muốn cho mọi người thấy những giá trị tiềm ẩn của hoa,
            để rồi từ đó giúp mọi người có cái nhìn mới mẻ và suy nghĩ khác hơn
            về hoa.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-8 mt-12 font-tanMonCheri text-[40px] tracking-widest">
            TẦM NHÌN - SỨ MỆNH - MỤC TIÊU
          </h2>

          <div className="flex gap-8">
            <AboutUsCard image={Card1} title="SỨ MỆNH">
              Đ-Flower8 mang đến sức sống và niềm vui cho mỗi người thông qua vẻ
              đẹp và ý nghĩa của hoa, tạo ra không gian sống và làm việc tích
              cực và tươi mới.
            </AboutUsCard>
            <AboutUsCard image={Card2} title="TẦM NHÌN">
              &quot;Nghĩ Khác về Hoa&quot; nhằm thay đổi cách nhìn của mọi người
              về hoa từ góc độ trang trí đến ý nghĩa sâu sắc trong cuộc sống
              hàng ngày.
            </AboutUsCard>
            <AboutUsCard image={Card3} title="MỤC TIÊU">
              Lan tỏa ý thức về tầm quan trọng của việc thưởng thức và tôn vinh
              vẻ đẹp tự nhiên, từ đó làm giàu tinh thần và truyền tải năng lượng
              tích cực, tươi mới như những đóa hoa.
            </AboutUsCard>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
