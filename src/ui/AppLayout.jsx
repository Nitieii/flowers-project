import { ScrollProvider } from "../context/ScrollContext";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import { Outlet } from "react-router-dom";
import SidebarProvider from "../context/SidebarContext";
import Sidebar from "../layout/sidebar/Sidebar";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <ScrollProvider>
        <div className="grid min-h-screen grid-rows-[auto_1fr] font-montserrat">
          <Header />

          <Outlet />
          <Sidebar />

          <Footer />
        </div>
      </ScrollProvider>
    </SidebarProvider>
  );
}
