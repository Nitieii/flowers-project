import { NavLink } from "react-router-dom";
import LogoLight from "../../assets/Logo/Logo-light.png";
import { useEffect, useState } from "react";

function Footer() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <footer className="relative bg-white text-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 py-8 sm:flex-row">
        <div className="mb-4 sm:mb-0">
          <img src={LogoLight} alt="Logo" className="h-12" />
        </div>
        <div className="flex flex-col flex-wrap justify-center sm:justify-end">
          <NavLink to="/" className="mx-2" activeClassName="font-bold">
            Trang chủ
          </NavLink>
          <NavLink to="/" className="mx-2" activeClassName="font-bold">
            Câu chuyện
          </NavLink>

          <NavLink to="/quizStart" className="mx-2" activeClassName="font-bold">
            Khám phá (Quiz)
          </NavLink>
          <NavLink to="/contact" className="mx-2" activeClassName="font-bold">
            Về chúng mình
          </NavLink>
        </div>
        <div className="mx-auto mt-8 px-4">
          <div className="justify-center sm:flex-row">
            <p className="mb-4 mr-4 sm:mb-0">Đăng ký nhận tin tức:</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
                className="mb-2 mr-0 w-full rounded border border-gray-400 px-3 py-2 sm:mb-0 sm:mr-2 sm:w-auto"
              />
              <button type="submit" className="rounded px-4 py-2">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom-0 w-full bg-gray-800 py-4 text-center text-white">
        <p>Thiết kế bởi TechTack</p>
      </div>
    </footer>
  );
}

export default Footer;
