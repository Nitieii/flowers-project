import React, { useState } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

function Test() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleSetActive = (to) => {
    setCurrentPage(to);
  };

  const scrollToPage = (page) => {
    setCurrentPage(page);
    scroller.scrollTo(`page${page}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div>
      {/* Pager */}
      <ul>
        <li>
          <button onClick={() => scrollToPage(0)}>Page 1</button>
        </li>
        <li>
          <button onClick={() => scrollToPage(1)}>Page 2</button>
        </li>
        <li>
          <button onClick={() => scrollToPage(2)}>Page 3</button>
        </li>
        {/* Add more pager buttons as needed */}
      </ul>

      {/* Full page sections */}
      <Element name="page0" className="element">
        <div className="page">Page 1</div>
      </Element>
      <Element name="page1" className="element">
        <div className="page">Page 2</div>
      </Element>
      <Element name="page2" className="element">
        <div className="page">Page 3</div>
      </Element>
      {/* Add more full page sections as needed */}
    </div>
  );
}

export default Test;
