import { NavLink, useNavigate } from "react-router-dom";
import LogoLight from "../../assets/Logo/Logo-light.png";
import { useContext, useEffect, useState } from "react";
import ScrollContext from "../../context/ScrollContext";

function Footer() {
  const [currentPath, setCurrentPath] = useState("");
  const targetRef = useContext(ScrollContext);
  const navigate = useNavigate();

  // Scroll to the Story Section
  const scrollToStorySection = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToTarget: true } });
    } else {
      if (targetRef.current) {
        // Calculate the position manually and apply the offset
        const rect = targetRef.current.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY - 100; // Apply the 100px offset

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <footer className="relative bg-white text-gray-800">
      <div className="mx-auto mt-4 flex max-w-6xl flex-col  flex-wrap justify-between gap-4 px-4 pt-2 sm:flex-row">
        <div className="mb-0 sm:mb-4">
          <img src={LogoLight} alt="Logo" className="h-12" />

          <div className="relative ms-1 mt-3 h-[168px] w-[300px]">
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

        <div className="-mt-6 flex flex-col flex-wrap gap-4 text-xl font-semibold sm:mt-0">
          <NavLink
            to="/"
            className="mx-2 text-nowrap duration-300 hover:text-secondary"
            activeclassname="font-bold"
          >
            Trang chủ
          </NavLink>
          <button
            to="/"
            className="mx-2 text-nowrap text-start duration-300 hover:text-secondary"
            onClick={scrollToStorySection}
          >
            Câu chuyện
          </button>

          <NavLink
            to="/quizStart"
            className="mx-2 text-nowrap duration-300 hover:text-secondary"
            activeclassname="font-bold"
          >
            Khám phá (Quiz)
          </NavLink>
          <NavLink
            to="/contact"
            className="mx-2 text-nowrap duration-300 hover:text-secondary"
            activeclassname="font-bold"
          >
            Về chúng mình
          </NavLink>
        </div>

        <div className="mb-5 flex w-[350px] flex-col gap-2">
          <p className="font-float text-[20px]">Hãy để lại lời nhắn của bạn:</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Nhập địa chỉ email của bạn"
              className="mb-2 mr-0 w-full rounded border border-gray-400 px-3 py-2 sm:mb-0 sm:w-auto"
            />

            <textarea
              rows={3}
              className="w-full resize-none rounded border border-gray-400 p-2"
              placeholder="Enter your text here..."
            />
            {/* 
            <button type="submit" className="btn">
              Đăng ký
            </button> */}
          </form>
        </div>
      </div>
      <div className="bottom-0 w-full bg-gray-800 py-2 text-center text-white hover:underline">
        <a href="https://techtack.com.vn">Thiết kế bởi TechTack</a>
      </div>
    </footer>
  );
}

export default Footer;
