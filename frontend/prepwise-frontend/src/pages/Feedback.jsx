import Sidebar from "../components/Sidebar";

function Feedback() {
  const interviewScore =
  localStorage.getItem("interviewScore") || 0;

let feedback = "";
let strengths = [];
let improvements = [];

if (interviewScore >= 90) {
  feedback = "Excellent Performance";

  strengths = [
    "Strong technical knowledge",
    "Excellent communication",
    "Confident answers",
  ];

  improvements = [
    "Keep practicing advanced concepts",
  ];
} else if (interviewScore >= 70) {
  feedback = "Good Performance";

  strengths = [
    "Good understanding of concepts",
    "Decent communication skills",
  ];

  improvements = [
    "Improve confidence",
    "Practice technical questions",
  ];
} else {
  feedback = "Needs Improvement";

  strengths = [
    "Basic understanding of concepts",
  ];

  improvements = [
    "Practice mock interviews",
    "Improve technical knowledge",
    "Improve communication",
  ];
}
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
        <h1>🤖 AI Feedback Report</h1>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "20px",
            maxWidth: "800px",
          }}
        >
          <h2>📊 Interview Performance</h2>

          <p>Communication Skills: 8/10</p>
          <p>Technical Knowledge: 9/10</p>
          <p>Confidence Level: 8/10</p>
          <p>Problem Solving: 9/10</p>
<h2 style={{ marginTop: "20px", color: "#4ade80" }}>
  Overall Score: {interviewScore}%
</h2>

<p>{feedback}</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "20px",
            maxWidth: "800px",
          }}
        >
          <h2>💪 Strengths</h2>

          <ul>
  {strengths.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "20px",
            maxWidth: "800px",
          }}
        >
          <h2>📈 Areas for Improvement</h2>

          <ul>
  {improvements.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
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

export default Feedback;