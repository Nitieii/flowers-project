import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import LogoLight from "../../assets/Logo/Logo-light.png";
import LogoDark from "../../assets/Logo/Logo-dark.png";
import ScrollContext from "../../context/ScrollContext";

function Header() {
  const currentPath = useLocation().pathname;
  const [isTopPage, setIsTopPage] = useState(true);

  const targetRef = useContext(ScrollContext);

  const navigate = useNavigate();

  const scrollToStorySection = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToTarget: true } });
    } else {
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Set state isTopPage to true when scroll
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
    <header
      className={`z-20 w-full justify-center duration-300
      ${currentPath === "/" ? "fixed" : ""}
      ${!isTopPage ? "fixed bg-white shadow-xl" : "bg-transparent"}`}
    >
      <div>
        <ul
          className={`my-4 flex items-center justify-center gap-[133px] text-lg font-semibold text-primary`}
        >
          <NavLink to={"/"}>
            <li
              className={`duration-300 hover:opacity-100 
              ${isTopPage && currentPath === "/" ? "text-white" : ""} 
              ${currentPath === "/" ? "opacity-100" : "opacity-50"}`}
            >
              Trang chủ
            </li>
          </NavLink>
          <button onClick={scrollToStorySection}>
            <li
              className={`duration-300 hover:opacity-100
              ${isTopPage && currentPath === "/" ? "text-white" : ""} 
              ${currentPath === "/story" ? "opacity-100" : "opacity-50"}`}
            >
              Câu chuyện
            </li>
          </button>

          <li
            className={`cursor-default text-[30px] font-normal opacity-100 duration-300 ${
              currentPath === "/" && isTopPage ? "text-white" : "text-primary"
            }`}
          >
            {currentPath === "/" && isTopPage ? (
              <img src={LogoDark} alt="logo" className="w-52" />
            ) : (
              <img src={LogoLight} alt="logo" className="w-52" />
            )}
          </li>

          <NavLink to={"/quizStart"}>
            <li
              className={`duration-300 hover:opacity-100
              ${isTopPage && currentPath === "/" ? "text-white" : ""} 
              ${currentPath === "/quizStart" ? "opacity-100" : "opacity-50"}`}
            >
              Quiz
            </li>
          </NavLink>
          <NavLink to={"/aboutUs"}>
            <li
              className={`duration-300 hover:opacity-100
              ${isTopPage && currentPath === "/" ? "text-white" : ""} 
              ${currentPath === "/aboutUs" ? "opacity-100" : "opacity-50"}`}
            >
              Về chúng mình
            </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default Header;
