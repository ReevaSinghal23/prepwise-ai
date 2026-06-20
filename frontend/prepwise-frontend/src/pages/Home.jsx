function Home() {
  return (
    <div>
      <nav>
        <h2>PrepWise AI</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Login</a>
        </div>
      </nav>

      <section className="hero">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1>Practice Interviews with AI</h1>

          <p>
            Improve your interview skills with AI-powered mock interviews,
            resume analysis, and instant feedback.
          </p>

          <button>Start Interview</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="ai-card">
            <h3>AI Mock Interview</h3>

            <p>Role: Frontend Developer</p>

            <div className="question-box">
              Tell me about yourself and your technical skills.
            </div>

            <button className="secondary-btn">Generate Questions</button>
          </div>
        </div>
      </section>
      <h2 className="feature-heading">
  Powerful Features
</h2>
      <section className="features">

  <div className="feature-card">
    <h3>AI Mock Interviews</h3>

    <p>
      Practice real interview questions with AI-generated scenarios.
    </p>
  </div>

  <div className="feature-card">
    <h3>Resume Analysis</h3>

    <p>
      Upload your resume and get smart AI suggestions instantly.
    </p>
  </div>

  <div className="feature-card">
    <h3>Instant Feedback</h3>

    <p>
      Receive detailed feedback on confidence, answers, and communication.
    </p>
  </div>

</section>
    </div>
  );
}

export default Home;