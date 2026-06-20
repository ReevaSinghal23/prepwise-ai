import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Resume() {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(0);
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    if (!file) {
      alert("Please upload a resume first!");
      return;
    }

const randomScore = Math.floor(Math.random() * 20) + 80;

setScore(randomScore);
localStorage.setItem("resumeScore", randomScore);

setAnalyzed(true); 
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
        <h1>📄 Resume Analyzer</h1>

        <p>
          Upload your resume and get AI-powered suggestions.
        </p>

        {/* Upload Section */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "12px",
            marginTop: "20px",
            maxWidth: "800px",
          }}
        >
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{
              marginBottom: "15px",
              color: "white",
            }}
          />

          {file && (
            <div style={{ marginBottom: "15px" }}>
              <p>📎 Selected File: {file.name}</p>
              <p style={{ color: "#4ade80" }}>
                ✅ Resume Uploaded Successfully
              </p>
            </div>
          )}

          <button
            onClick={handleAnalyze}
            style={{
              padding: "12px 20px",
              background: "#8b5cf6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Analyze Resume
          </button>
        </div>

        {/* Score Section */}
        {analyzed && (
          <>
            <div
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "12px",
                marginTop: "25px",
                maxWidth: "800px",
              }}
            >
              <h2>📊 Resume Score</h2>

              <h1 style={{ color: "#4ade80" }}>
                {score} / 100
              </h1>
            </div>

            {/* Suggestions */}
            <div
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "12px",
                marginTop: "25px",
                maxWidth: "800px",
              }}
            >
              <h2>🤖 AI Suggestions</h2>

              <ul>
                <li>Add more technical projects.</li>
                <li>Include your GitHub profile link.</li>
                <li>Highlight React and AI skills.</li>
                <li>Improve project descriptions.</li>
                <li>Add internship or training experience.</li>
              </ul>

              <button
  onClick={() => {
    const report = `
Resume Analysis Report

Resume Score: ${score}/100

Suggestions:
- Add more technical projects
- Include GitHub profile link
- Highlight React and AI skills
- Improve project descriptions
- Add internship experience
`;

    const blob = new Blob([report], {
      type: "text/plain",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Resume_Report.txt";
    link.click();
  }}
  style={{
    padding: "10px 20px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "15px",
  }}
>
  Download Report
</button>
            </div>
                   </>
        )}

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

export default Resume;