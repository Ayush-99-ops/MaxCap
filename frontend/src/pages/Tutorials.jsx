import { Link } from 'react-router-dom';
import { COURSES } from '../data/courses';

export default function Tutorials() {
  return (
    <div className="tutorials">
      <h2>Interactive Courses</h2>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Learn 6 completely decoupled backend languages with immediate feedback.</p>
      
      <div className="course-list">
        {COURSES.map(course => (
          <div key={course.id} className="course-card">
            <span className="badge">{course.tag}</span>
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <Link to={`/editor/${course.id}`}>
              <button className="btn-primary mt-4">Start Course (20 Lessons)</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
