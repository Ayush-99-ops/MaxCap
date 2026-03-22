import { useState } from 'react'

function App() {
  return (
    <div className="app-container">
      <header className="navbar">
        <div className="logo">MaxCap Learning</div>
        <nav>
          <a href="#">Tutorials</a>
          <a href="#">Leaderboard</a>
          <a href="#">Forum</a>
          <a href="#" className="btn-primary">Sign In</a>
        </nav>
      </header>
      <main className="hero-section">
        <h1>Master Coding with Interactive Real-Time Feedback</h1>
        <p>Join thousands of developers leveling up their skills in Python, JavaScript, and Web Development.</p>
        <button className="btn-primary mt-4">Start Coding Now</button>
      </main>
    </div>
  )
}

export default App
