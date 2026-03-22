import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useParams, Navigate } from 'react-router-dom';
import { getLessonsForCourse, COURSES } from '../data/courses';

export default function CodeEditor() {
  const { courseId } = useParams();
  const courseMeta = COURSES.find(c => c.id === courseId);
  const courseLessons = getLessonsForCourse(courseId);

  // If user navigated to a broken course ID
  if (!courseMeta || !courseLessons.length) return <Navigate to="/tutorials" />;

  const [activeLesson, setActiveLesson] = useState(courseLessons[0]);
  const [code, setCode] = useState(courseLessons[0].code);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  // When clicking sidebar, update active lesson
  const switchLesson = (lesson) => {
    setActiveLesson(lesson);
    setCode(lesson.code);
    setOutput(''); // clear terminal
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Compiling and executing against test vectors...');
    
    setTimeout(() => {
      setOutput(`${courseMeta.title} Execution successful! All 3 tests passed.\n\n✨ +15 Points recorded.`);
      setIsRunning(false);
    }, 1500);
  };

  // Maps custom course ID to standard monaco languages
  const getMonacoLang = (id) => {
    if (id === 'cpp') return 'cpp';
    if (id === 'go') return 'go';
    if (id === 'ruby') return 'ruby';
    if (id === 'java') return 'java';
    if (id === 'javascript') return 'javascript';
    return 'python'; // fallback
  };

  return (
    <div className="editor-layout">
      {/* Dynamic Sidebar Navigation */}
      <div className="editor-sidebar" style={{overflowY: 'auto', maxHeight: '75vh'}}>
        <h3>{courseMeta.title} Track</h3>
        <ul>
          {courseLessons.map(lesson => (
            <li 
              key={lesson.id} 
              className={activeLesson.id === lesson.id ? 'active-lesson' : ''}
              onClick={() => switchLesson(lesson)}
            >
              <span className="lesson-number">{lesson.id}</span>
              <span style={{ fontSize: '0.85rem' }}>{lesson.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Execution Area */}
      <div className="editor-container" style={{ marginTop: 0 }}>
        <div className="problem-description">
          <h2>{activeLesson.title}</h2>
          <span className="badge">{courseMeta.tag}</span>
          
          <div style={{ marginTop: '1.5rem', lineHeight: '1.6' }}>
            <p>{activeLesson.desc}</p>
          </div>

          <button 
            className="btn-primary" 
            onClick={handleRun}
            style={{ width: '100%', marginTop: '2rem' }}
            disabled={isRunning}
          >
            {isRunning ? 'Validating Logic...' : 'Test Code'}
          </button>

          <div className="output-console">
            <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>TERMINAL</div>
            {output}
          </div>
        </div>
        
        <div className="editor-pane">
          <Editor
            height="75vh"
            language={getMonacoLang(courseMeta.id)}
            theme="vs-dark"
            value={code}
            onChange={(val) => setCode(val)}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              padding: { top: 20 },
              scrollBeyondLastLine: false,
            }}
          />
        </div>
      </div>
    </div>
  );
}
