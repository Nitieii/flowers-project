import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const currentPath = useLocation().pathname;
  const [isTopPage, setIsTopPage] = useState(true);

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
      className={`duration-300 w-full justify-center z-20
      ${currentPath === "/" ? "fixed" : ""}
      ${!isTopPage ? "fixed shadow-xl bg-white" : "bg-transparent"}`}
    >
      <div>
        <ul
          className={`flex justify-center gap-[133px] my-4 text-lg font-semibold`}
        >
          <NavLink to={"/"}>
            <li
              className={`duration-300 hover:opacity-100 
              ${isTopPage && currentPath === "/" ? "text-white" : ""} 
              ${currentPath === "/" ? "opacity-100" : "opacity-50"}`}
            >
              TRANG CHỦ
            </li>
          </NavLink>
          <NavLink to={"/story"}>
            <li
              className={`duration-300 hover:opacity-100
              ${isTopPage && currentPath === "/" ? "text-white" : ""} 
              ${currentPath === "/story" ? "opacity-100" : "opacity-50"}`}
            >
              CÂU CHUYỆN
            </li>
          </NavLink>

          <li
            className={`font-normal text-[30px] opacity-100 duration-300 cursor-default ${
              currentPath === "/" && isTopPage ? "text-white" : "text-black"
            }`}
          >
            Flower Go
          </li>

          <NavLink to={"/quizStart"}>
            <li
              className={`duration-300 hover:opacity-100
              ${isTopPage && currentPath === "/" ? "text-white" : ""} 
              ${currentPath === "/quizStart" ? "opacity-100" : "opacity-50"}`}
            >
              QUIZ
            </li>
          </NavLink>
          <NavLink to={"/aboutUs"}>
            <li
              className={`duration-300 hover:opacity-100
              ${isTopPage && currentPath === "/" ? "text-white" : ""} 
              ${currentPath === "/aboutUs" ? "opacity-100" : "opacity-50"}`}
            >
              VỀ CHÚNG TÔI
            </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default Header;
