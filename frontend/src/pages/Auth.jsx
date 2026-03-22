import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    // Hardcoded URL pointing to backend docker container mapped to port 8000
    // In actual production, this should leverage env vars.
    const url = isLogin ? 'http://13.200.235.85:8000/api/login/' : 'http://13.200.235.85:8000/api/register/';
    const payload = isLogin ? { username, password } : { username, email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Sign In' : 'Create Account'}</h2>
        <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
          {isLogin ? 'Welcome back to MaxCap Learning.' : 'Begin your journey to coding mastery.'}
        </p>

        {error && <div className="error-badge">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
          {!isLogin && (
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          )}
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            {isLogin ? 'Sign In' : 'Register'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#94a3b8' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span 
            style={{ color: '#3b82f6', cursor: 'pointer', fontWeight: 'bold' }} 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </span>
        </p>
      </div>
    </div>
  );
}
