import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    pendingBookings: 0,
    recentBookings: [] // ✅ FIXED
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/admin/login");
          return;
        }

        const res = await axios.get(`${API_BASE}/api/admin/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats({
          totalBookings: res.data.totalBookings ?? 0,
          pendingBookings: res.data.pendingBookings ?? 0,
          recentBookings: res.data.recentBookings ?? []
        });

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setError("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]); // ✅ only real dependency

  if (loading) return <p className="loading">Loading dashboard...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="dashboard-container">

      <div className="dashboard-content">
        <h1 className="dashboard-title">Admin Dashboard</h1>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>Total Bookings</h2>
            <p className="card-value red">{stats.totalBookings}</p>
          </div>

          <div className="dashboard-card">
            <h2>Pending Bookings</h2>
            <p className="card-value yellow">{stats.pendingBookings}</p>
          </div>
        </div>

        <h2 style={{ marginTop: "40px" }}>Recent Bookings</h2>

        <table className="orders-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Phone</th>
              <th>Items</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {stats.recentBookings.length === 0 ? (
              <tr>
                <td colSpan="5">No recent data</td>
              </tr>
            ) : (
              stats.recentBookings.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.phone}</td>

                  <td>
                    {order.items?.map((item, i) => (
                      <div key={i}>
                        {item.name} × {item.quantity}
                      </div>
                    ))}
                  </td>

                  <td>
                    <span className={`status ${order.status}`}>
                      {order.status}
                    </span>
                  </td>

                  <td>
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;