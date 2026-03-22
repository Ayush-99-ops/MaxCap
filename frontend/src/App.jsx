import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Tutorials from './pages/Tutorials';
import CodeEditor from './pages/CodeEditor';
import Auth from './pages/Auth';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <Link to="/" className="logo">MaxCap Learning</Link>
          <nav>
            <Link to="/tutorials">Tutorials</Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <a href="#">Forum</a>
                <button onClick={handleLogout} className="btn-primary" style={{marginLeft: '2rem'}}>Logout</button>
              </>
            ) : (
              <Link to="/login" className="btn-primary">Sign In</Link>
            )}
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/tutorials" element={<ProtectedRoute><Tutorials /></ProtectedRoute>} />
          <Route path="/editor/:courseId" element={<ProtectedRoute><CodeEditor /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
