import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2 style={{ marginBottom: '2rem' }}>Welcome back, Developer!</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Your Level</h3>
          <div className="stat-value text-gradient">5</div>
          <p>Intermediate</p>
        </div>
        <div className="stat-card">
          <h3>Total Points</h3>
          <div className="stat-value text-gradient">1,250</div>
          <p>Top 15% of users</p>
        </div>
        <div className="stat-card">
          <h3>Lessons Completed</h3>
          <div className="stat-value text-gradient">14</div>
          <p>Python Track</p>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3>Continue Learning</h3>
        <div className="course-card" style={{ marginTop: '1rem' }}>
          <h4>Python: Data Structures</h4>
          <p>Master lists, dictionaries, and tuples to optimize your logic.</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '60%' }}></div>
          </div>
          <Link to="/editor/42">
            <button className="btn-primary mt-4">Resume Course</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
