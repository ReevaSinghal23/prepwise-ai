import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [resumeScore, setResumeScore] = useState(95);
const [interviewScore, setInterviewScore] = useState(100);

useEffect(() => {
  const savedResume = localStorage.getItem("resumeScore");
  const savedInterview = localStorage.getItem("interviewScore");

  if (savedResume) setResumeScore(savedResume);
  if (savedInterview) setInterviewScore(savedInterview);
}, []);
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
        <h1 style={{ marginBottom: "30px" }}>
          🚀 PrepWise AI Dashboard
        </h1>

        {/* Dashboard Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {/* Resume Score */}
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h3>📄 Resume Score</h3>
            <h2 style={{ color: "#4ade80" }}>{resumeScore}%</h2>
          </div>

          {/* Interview Score */}
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
          <h3>🎤 Interview Score</h3>
<h2 style={{ color: "#4ade80" }}>
  {interviewScore}%
</h2>
          </div>

          {/* Resume Status */}
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h3>📑 Resume Status</h3>
            <h2>Uploaded ✅</h2>
          </div>

          {/* Rating */}
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h3>🏆 Rating</h3>
            <h2 style={{ color: "#facc15" }}>Excellent</h2>
          </div>
        </div>

        {/* Activity Section */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "30px",
          }}
        >
          <h2>📈 Recent Activity</h2>

          <ul>
            <li>✅ Resume analyzed successfully</li>
            <li>✅ Mock Interview completed</li>
            <li>✅ AI Feedback generated</li>
            <li>✅ Profile settings updated</li>
          </ul>
        </div>

        {/* Progress Section */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "30px",
          }}
        >
          <h2>🎯 Placement Readiness</h2>

          <div
            style={{
              width: "100%",
              height: "20px",
              background: "#334155",
              borderRadius: "10px",
              overflow: "hidden",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                width: `${
  Math.round(
    (Number(resumeScore) +
      Number(interviewScore)) / 2
  )
}%`,
                height: "100%",
                background: "#22c55e",
              }}
            ></div>
          </div>

          <p style={{ marginTop: "10px" }}>
  Resume Score: {resumeScore}% <br />
  Interview Score: {interviewScore}% <br />
  Overall Placement Readiness:
  <strong>
    {" "}
    {Math.round(
      (Number(resumeScore) +
        Number(interviewScore)) / 2
    )}
    %
  </strong>
</p>
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

export default Dashboard;