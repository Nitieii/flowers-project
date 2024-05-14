import { ScrollProvider } from "../context/ScrollContext";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <ScrollProvider>
      <div className="grid min-h-screen grid-rows-[auto_1fr] font-montserrat">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </ScrollProvider>
  );
}
