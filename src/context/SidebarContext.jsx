import PropTypes from "prop-types";
import { createContext, useState, useContext } from "react";
import useAddNoScrollClass from "../context/useAddNoScrollClass";

const SidebarContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  useAddNoScrollClass(openSidebar);

  return (
    <SidebarContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SidebarProvider;
