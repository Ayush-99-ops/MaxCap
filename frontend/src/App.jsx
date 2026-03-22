import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Tutorials from './pages/Tutorials';
import CodeEditor from './pages/CodeEditor';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <Link to="/" className="logo">MaxCap Learning</Link>
          <nav>
            <Link to="/tutorials">Tutorials</Link>
            <Link to="/dashboard">Dashboard</Link>
            <a href="#">Forum</a>
            <Link to="/login" className="btn-primary">Sign In</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/editor/:lessonId" element={<CodeEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
