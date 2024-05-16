import { RxCross2 } from "react-icons/rx";
import LogoLight from "../../assets/Logo/Logo-light.png";
import { useSidebarContext } from "../../context/SidebarContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";

function Sidebar() {
  const { openSidebar, setOpenSidebar } = useSidebarContext();
  const targetRef = useContext(ScrollContext);
  const navigate = useNavigate();

  const scrollToStorySection = () => {
    setOpenSidebar(false);

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

  const handleNavigation = (link) => {
    setOpenSidebar(false);
    navigate(link);
  };

  return (
    <div
      className={`fixed top-0 z-20 h-screen w-screen bg-[#F4F0E8] p-6 duration-500 ${openSidebar ? "left-0" : "-left-[120%]"}`}
    >
      <div className="flex justify-between">
        <div className="cursor-default opacity-100 duration-300">
          <img src={LogoLight} alt="logo" className="w-52" />
        </div>

        <button
          className="bg-late-gray btn rounded-full px-3"
          onClick={() => setOpenSidebar(false)}
        >
          <RxCross2 className="h-6 w-6" />
        </button>
      </div>

      <ul className="mt-10 flex flex-col gap-5">
        <button
          className="text-start text-xl duration-300 hover:opacity-70"
          onClick={() => handleNavigation("/")}
        >
          <li className={`text-nowrap duration-300 hover:opacity-100`}>
            Trang chủ
          </li>
        </button>
        <button
          className="text-start text-xl duration-300 hover:opacity-70"
          onClick={scrollToStorySection}
        >
          <li className={`text-nowrap duration-300 hover:opacity-100`}>
            Câu chuyện
          </li>
        </button>

        <button
          className="text-start text-xl duration-300 hover:opacity-70"
          onClick={() => handleNavigation("/quizStart")}
        >
          <li className={`text-nowrap duration-300 hover:opacity-100`}>
            Khám phá (Quiz)
          </li>
        </button>
        <button
          className="text-start text-xl duration-300 hover:opacity-70"
          onClick={() => handleNavigation("/contact")}
        >
          <li className={`text-nowrap duration-300 hover:opacity-100`}>
            Về chúng mình
          </li>
        </button>
      </ul>
    </div>
  );
}

export default Sidebar;
