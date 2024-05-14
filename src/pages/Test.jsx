import React, { useState } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
function Test() {
  const [activeSection, setActiveSection] = useState("section1");

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <div>
      {/* Navigation links */}
      <div className="fixed left-0 top-0 z-10 flex w-full justify-center space-x-4 bg-white p-4 ">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          duration={500}
          className={`cursor-pointer p-2 ${activeSection === "section1" ? "text-blue-500" : "text-gray-500"}`}
          onSetActive={handleSetActive}
        >
          Section 1
        </Link>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          duration={500}
          className={`cursor-pointer p-2 ${activeSection === "section2" ? "text-blue-500" : "text-gray-500"}`}
          onSetActive={handleSetActive}
        >
          Section 2
        </Link>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          duration={500}
          className={`cursor-pointer p-2 ${activeSection === "section3" ? "text-blue-500" : "text-gray-500"}`}
          onSetActive={handleSetActive}
        >
          Section 3
        </Link>
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          duration={500}
          className={`cursor-pointer p-2 ${activeSection === "section4" ? "text-blue-500" : "text-gray-500"}`}
          onSetActive={handleSetActive}
        >
          Section 4
        </Link>
      </div>

      {/* Full page sections */}
      <div className="scrollbar-hide-y h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth duration-300">
        <Element
          name="section1"
          className="flex h-screen snap-start items-center justify-center bg-gray-200"
        >
          <h1>Section 1</h1>
        </Element>
        <Element
          name="section2"
          className="flex h-screen snap-start items-center justify-center bg-gray-300"
        >
          <h1>Section 2</h1>
        </Element>
        <Element
          name="section3"
          className="flex h-screen snap-start items-center justify-center bg-gray-400"
        >
          <h1>Section 3</h1>
        </Element>
        <Element
          name="section4"
          className="flex h-screen snap-start items-center justify-center bg-gray-500"
        >
          <h1>Section 4</h1>
        </Element>
      </div>
    </div>
  );
}

export default Test;
