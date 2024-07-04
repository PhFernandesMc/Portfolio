import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <main className="main-container">
      <SideBar />
      <div className="right-side-container">
        <Navbar />
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
