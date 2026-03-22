import { Link } from 'react-router-dom';

export default function Tutorials() {
  const courses = [
    { id: 1, title: 'Python for Beginners', desc: 'Variables, loops, and logic.', tag: 'Python' },
    { id: 2, title: 'JavaScript Fundamentals', desc: 'DOM manipulation and ES6.', tag: 'JavaScript' },
    { id: 3, title: 'Web Design Masterclass', desc: 'HTML semantics and CSS Grid.', tag: 'HTML/CSS' },
  ];

  return (
    <div className="tutorials">
      <h2>Interactive Courses</h2>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Learn by doing with real-time feedback.</p>
      
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <span className="badge">{course.tag}</span>
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <Link to={`/editor/${course.id}`}>
              <button className="btn-primary mt-4">Start Lesson</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
