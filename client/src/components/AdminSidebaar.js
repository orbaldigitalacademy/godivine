import { useNavigate, useLocation } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token"); // ⚠️ match your dashboard token key
    navigate("/admin/login");
  };

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Go Divine</h2>

      <ul className="sidebar-menu">
        <li
          onClick={() => goTo("/admin/dashboard")}
          className={location.pathname === "/admin/dashboard" ? "active" : ""}
        >
          Dashboard
        </li>

        <li
          onClick={() => goTo("/admin/bookings")}
          className={location.pathname === "/admin/bookings" ? "active" : ""}
        >
          Bookings
        </li>
      </ul>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default AdminSidebar;