import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        background: "#111827",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "#8b5cf6" }}>PrepWise AI</h2>

      <div style={{ marginTop: "40px" }}>
<p>
  <Link
    to="/dashboard"
    style={{ color: "white", textDecoration: "none" }}
  >
    🏠 Dashboard
  </Link>
</p>
        <p>
  <Link
    to="/interview"
    style={{ color: "white", textDecoration: "none" }}
  >
    🎤 Mock Interview
  </Link>
</p>
        <p>
  <Link
    to="/resume"
    style={{ color: "white", textDecoration: "none" }}
  >
    📄 Resume Analyzer
  </Link>
</p>
       <p>
  <Link
    to="/feedback"
    style={{ color: "white", textDecoration: "none" }}
  >
    🤖 AI Feedback
  </Link>
</p>
       <p>
  <Link
    to="/settings"
    style={{ color: "white", textDecoration: "none" }}
  >
    ⚙️ Settings
  </Link>
</p>
      </div>
    </div>
  );
}

export default Sidebar;