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
      <div className="mx-auto mt-4 flex max-w-6xl flex-row flex-wrap justify-between gap-4 px-4 pt-2 ">
        <div className="mb-0 sm:mb-4">
          <img src={LogoLight} alt="Logo" className="h-8" />

          <div className="relative ms-1 mt-3 h-[84px] w-[150px]">
            <h1 className="absolute top-0 font-tanMonCheri text-[20px]">
              Nghĩ khác
            </h1>
            <h1 className="absolute right-[55%] top-[20%] font-vivaldi text-[20px]">
              về
            </h1>
            <h1 className="absolute bottom-0 right-0 font-vivaldi text-[80px] font-medium leading-none">
              hoa
            </h1>
          </div>
        </div>

        <div className="flex flex-col flex-wrap gap-4 text-sm font-semibold">
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

        <div className="xs:mt-3 items-cnter mb-5 flex w-[350px] flex-col gap-2 text-xs">
          <p className="font-float text-[16px]">Hãy để lại lời nhắn của bạn:</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Nhập địa chỉ email của bạn"
              className="mb-2 mr-0 w-full rounded border border-gray-400 px-2 py-2 sm:mb-0 sm:w-auto"
            />

            <textarea
              rows={3}
              className="w-full resize-none rounded border border-gray-400 p-2"
              placeholder="Điều mà bạn muốn chia sẻ với chúng mình."
            />
            <button
              type="submit"
              className="rounded bg-primary py-2 text-sm text-white"
            >
              Gửi
            </button>
          </form>
        </div>
      </div>
      <div className="bottom-0 w-full bg-gray-800 py-2 text-center text-xs text-white hover:underline">
        <a href="https://techtack.com.vn">Phát triển bởi TechTack</a>
      </div>
    </footer>
  );
}

export default Footer;
