import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main className="hero-section">
      <h1>Master Coding with Interactive Real-Time Feedback</h1>
      <p>Join thousands of developers leveling up their skills in Python, JavaScript, and Web Development.</p>
      <Link to="/tutorials">
        <button className="btn-primary mt-4">Start Coding Now</button>
      </Link>
    </main>
  );
}
