import { Link } from 'react-router-dom';
import { COURSES } from '../data/courses';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const points = user.points || 1250;
  
  // Stacking nice progress bars mock logic simulating real progress
  const startedCourses = [
    { ...COURSES[0], progress: 65, completed: 13 }, // Python
    { ...COURSES[1], progress: 20, completed: 4 },  // JavaScript
    { ...COURSES[4], progress: 10, completed: 2 }   // Go
  ];

  return (
    <div className="dashboard">
      <h2 style={{ marginBottom: '2rem' }}>Welcome back, {user.username || 'Developer'}!</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Your Level</h3>
          <div className="stat-value text-gradient">5</div>
          <p>Intermediate Hacker</p>
        </div>
        <div className="stat-card">
          <h3>Total Honor Points</h3>
          <div className="stat-value text-gradient">{points}</div>
          <p>Top 15% Rank</p>
        </div>
        <div className="stat-card">
          <h3>Global Lessons Beaten</h3>
          <div className="stat-value text-gradient">19</div>
          <p>Across 3 Stacks</p>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3>Your Active Tracks</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem'}}>
          {startedCourses.map(c => (
             <div key={c.id} className="course-card" style={{ padding: '1.5rem', marginTop: 0 }}>
               <h4>{c.title}: Intermediate</h4>
               <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem'}}>
                 Lesson {c.completed} / 20 Completed
               </p>
               <div className="progress-bar">
                 <div className="progress-fill" style={{ width: `${c.progress}%` }}></div>
               </div>
               <Link to={`/editor/${c.id}`}>
                 <button className="btn-primary mt-4" style={{ width: '100%', padding: '0.5rem' }}>Resume</button>
               </Link>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
