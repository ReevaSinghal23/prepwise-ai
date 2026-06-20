import Sidebar from "../components/Sidebar";
import { useState } from "react";

function Interview() {
  const [started, setStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    "Tell me about yourself.",
    "What is React?",
    "What is the difference between let, var, and const?",
    "What are React Hooks?",
    "Why should we hire you?"
  ];

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
        <h1>🎤 AI Mock Interview</h1>
        <div
  style={{
    background: "#1e293b",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "20px",
    marginBottom: "20px",
    maxWidth: "250px",
  }}
>
  <h3>📊 Interview Score</h3>
  <p>{score}%</p>
</div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "30px",
            maxWidth: "800px",
          }}
        >
          <h2>Frontend Developer Interview</h2>

          <p>
            Practice technical and HR questions with AI.
          </p>

          {!started ? (
            <button
              onClick={() => setStarted(true)}
              style={{
                padding: "12px 20px",
                background: "#8b5cf6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Start Interview
            </button>
          ) : (
            <div style={{ marginTop: "20px" }}>
              <h3>Question {questionIndex + 1}</h3>

              <p>{questions[questionIndex]}</p>

              <textarea
                placeholder="Type your answer here..."
                rows="5"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  marginTop: "10px",
                }}
              />

              <button
                onClick={() => {
                 if (questionIndex < questions.length - 1) {
  setQuestionIndex(questionIndex + 1);
  setScore(score + 20);
} else {
  const finalScore = score + 20;

  setScore(finalScore);

  localStorage.setItem(
    "interviewScore",
    finalScore
  );

  alert(
    `🎉 Interview Completed!\n\nYour Score: ${finalScore}%`
  );
}
                }}
                style={{
                  marginTop: "15px",
                  padding: "12px 20px",
                  background: "#8b5cf6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {questionIndex === questions.length - 1
                  ? "Finish Interview"
                  : "Next Question"}
              </button>
            </div>
          )}
               </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            color: "#94a3b8",
          }}
        >
          © 2026 PrepWise AI | Built by Reeva Singhal
        </div>

      </div>
    </div>
  );
}

export default Interview;