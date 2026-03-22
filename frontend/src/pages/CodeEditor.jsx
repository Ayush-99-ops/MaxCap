import { useState } from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditor() {
  const [code, setCode] = useState('def greet():\n    print("Hello, World!")\n\ngreet()');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Running remotely in Docker container sandbox...');
    
    // Simulate API call to Django execution endpoint
    setTimeout(() => {
      setOutput('Hello, World!\n\nExecution successful! ✨ +20 Points added to your profile.');
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="editor-container">
      <div className="problem-description">
        <h2>Lesson 1: Hello World</h2>
        <span className="badge">Python</span>
        
        <div style={{ marginTop: '1.5rem', lineHeight: '1.6' }}>
          <p>Welcome to your first interactive lesson!</p>
          <p>Your task is to define a function that prints exactly <code>"Hello, World!"</code> to the console.</p>
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
  );
}
