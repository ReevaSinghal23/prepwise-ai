import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function Settings() {
    const navigate = useNavigate();
    const handleLogout = () => {
  alert("Logged out successfully");
  navigate("/login");
   };
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px",
          color: "white",
        }}
      >
        <h1>⚙️ Settings</h1>

        {/* Profile Section */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "20px",
            maxWidth: "800px",
          }}
        >
          <h2>👤 Profile Information</h2>

          <p>
            <strong>Name:</strong> Reeva Singhal
          </p>

          <p>
            <strong>Course:</strong> BCA (AI Specialization)
          </p>

          <p>
            <strong>Email:</strong> reeva@example.com
          </p>
        </div>

        {/* Preferences Section */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "20px",
            maxWidth: "800px",
          }}
        >
          <h2>🎨 Preferences</h2>

          <label>
            <input type="checkbox" defaultChecked />
            {" "}Dark Mode
          </label>

          <br />
          <br />

          <label>
            <input type="checkbox" defaultChecked />
            {" "}Enable Notifications
          </label>
        </div>

        {/* Account Section */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "20px",
            maxWidth: "800px",
          }}
        >
          <h2>🔒 Account</h2>

          <button onClick={handleLogout}>
  Logout
</button>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          © 2026 PrepWise AI | Built by Reeva Singhal
        </div>
      </div>
    </div>
  );
}

export default Settings;