import Header from "../layout/header/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] font-poppins">
      <Header />

      <Outlet />
    </div>
  );
}
