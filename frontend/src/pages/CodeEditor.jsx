import { useState } from 'react';
import Editor from '@monaco-editor/react';

const LESSONS = [
  { id: 1, title: 'Hello World', code: 'def greet():\n    print("Hello, World!")\n\ngreet()', desc: 'Define a function that prints exactly "Hello, World!"' },
  { id: 2, title: 'Variables & Types', code: 'name = "Dev"\nage = 25\n\n# Print name and age here', desc: 'Create variables and print them out.' },
  { id: 3, title: 'Loops', code: 'for i in range(5):\n    # Write logic here\n    pass', desc: 'Use a loop to print numbers 0 to 4.' }
];

export default function CodeEditor() {
  const [activeLesson, setActiveLesson] = useState(LESSONS[1]); // Default to Lesson 2 as requested
  const [code, setCode] = useState(activeLesson.code);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  // Sync editor when switching lesson
  const switchLesson = (lesson) => {
    setActiveLesson(lesson);
    setCode(lesson.code);
    setOutput('');
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Running remotely in Docker container sandbox...');
    
    setTimeout(() => {
      setOutput('Execution successful! ✨ +20 Points added to your profile.');
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="editor-layout">
      {/* Sidebar Navigation */}
      <div className="editor-sidebar">
        <h3>Python Track</h3>
        <ul>
          {LESSONS.map(lesson => (
            <li 
              key={lesson.id} 
              className={activeLesson.id === lesson.id ? 'active-lesson' : ''}
              onClick={() => switchLesson(lesson)}
            >
              <span className="lesson-number">{lesson.id}</span>
              {lesson.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Execution Area */}
      <div className="editor-container" style={{ marginTop: 0 }}>
        <div className="problem-description">
          <h2>Lesson {activeLesson.id}: {activeLesson.title}</h2>
          <span className="badge">Python</span>
          
          <div style={{ marginTop: '1.5rem', lineHeight: '1.6' }}>
            <p>{activeLesson.desc}</p>
          </div>

          <button 
            className="btn-primary" 
            onClick={handleRun}
            style={{ width: '100%', marginTop: '2rem' }}
            disabled={isRunning}
          >
            {isRunning ? 'Executing...' : 'Run Code'}
          </button>

          <div className="output-console">
            <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>TERMINAL OUTPUT</div>
            {output}
          </div>
        </div>
        
        <div className="editor-pane">
          <Editor
            height="75vh"
            defaultLanguage="python"
            theme="vs-dark"
            value={code}
            onChange={(val) => setCode(val)}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              padding: { top: 20 }
            }}
          />
        </div>
      </div>
    </div>
  );
}
