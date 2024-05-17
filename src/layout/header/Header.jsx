import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import LogoLight from "../../assets/Logo/Logo-light.png";
import LogoDark from "../../assets/Logo/Logo-dark.png";
import ScrollContext from "../../context/ScrollContext";

import { RxHamburgerMenu } from "react-icons/rx";
import { useSidebarContext } from "../../context/SidebarContext";

function Header() {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  const targetRef = useContext(ScrollContext);

  const [isTopPage, setIsTopPage] = useState(true);
  const { openSidebar, setOpenSidebar } = useSidebarContext();

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
      className={`z-20 w-full justify-center duration-300 overflow-hidden
      ${currentPath === "/" ? "fixed" : ""}
      ${!isTopPage ? "fixed bg-white shadow-xl" : "bg-transparent"}`}
    >
      <div>
        <ul
          className={`text-md my-4 flex w-screen items-center justify-center font-semibold text-primary md:gap-6 lg:gap-[70px] xl:gap-[133px]`}
        >
          <button
            className="btn absolute left-[20px] top-[20px] block border-none bg-transparent px-2 hover:bg-stone-400 hover:bg-opacity-50 md:hidden"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <RxHamburgerMenu
              color={
                !isTopPage || currentPath === "/quizStart" ? "#000" : "white"
              }
              className="h-9 w-9"
            />
          </button>

          <NavLink to={"/"} className="hidden md:block">
            <li
              className={`text-nowrap duration-300 hover:opacity-100 
              ${isTopPage && (currentPath === "/" || currentPath === "/contact") ? "text-white" : ""} 
              ${currentPath === "/" ? "opacity-100" : "opacity-50"}`}
            >
              Trang chủ
            </li>
          </NavLink>
          <button onClick={scrollToStorySection} className="hidden md:block">
            <li
              className={`text-nowrap duration-300 hover:opacity-100
              ${isTopPage && (currentPath === "/" || currentPath === "/contact") ? "text-white" : ""} 
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
            {(currentPath === "/" || currentPath === "/contact") &&
            isTopPage ? (
              <img src={LogoDark} alt="logo" className="w-52" />
            ) : (
              <img src={LogoLight} alt="logo" className="w-52" />
            )}
          </li>

          <NavLink to={"/quizStart"} className="hidden md:block">
            <li
              className={`text-nowrap duration-300 hover:opacity-100
              ${isTopPage && (currentPath === "/" || currentPath === "/contact") ? "text-white" : ""} 
              ${currentPath === "/quizStart" ? "opacity-100" : "opacity-50"}`}
            >
              Khám phá (Quiz)
            </li>
          </NavLink>
          <NavLink to={"/contact"} className="hidden md:block">
            <li
              className={`text-nowrap duration-300 hover:opacity-100
              ${isTopPage && (currentPath === "/" || currentPath === "/contact") ? "text-white" : ""} 
              ${currentPath === "/contact" ? "opacity-100" : "opacity-50"}`}
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
