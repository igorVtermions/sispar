import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/index";

function Layout() {
  const location = useLocation();

  return (
    <div style={{ display: "flex" }}>
      {location.pathname !== "/login" && <Sidebar />}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;