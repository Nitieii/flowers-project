import PropTypes from "prop-types";
import { createContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const targetRef = useRef(null);
  return (
    <ScrollContext.Provider value={targetRef}>
      {children}
    </ScrollContext.Provider>
  );
};

ScrollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ScrollContext;
