import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/animations.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate inputs (in a real app, this would be done server-side)
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      // Simulate successful login
      const userData = {
        id: '12345',
        username: email.split('@')[0],
        email,
        vipLevel: Math.floor(Math.random() * 5) + 1,
        joinDate: new Date().toISOString(),
      };

      onLogin(userData);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to access your Bee Crypto account</p>
        </div>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>
          
          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
          </div>
          
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              'Login'
            )}
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
          
          <div className="social-login">
            <p>Or login with:</p>
            <div className="social-buttons">
              <button className="social-btn google">
                <i className="fab fa-google"></i>
              </button>
              <button className="social-btn apple">
                <i className="fab fa-apple"></i>
              </button>
              <button className="social-btn twitter">
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="auth-image">
        <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55" alt="Crypto Login" />
        <div className="image-overlay">
          <h3>Secure Your Future</h3>
          <p>Join millions trading and investing in cryptocurrency</p>
        </div>
      </div>
    </div>
  );
};

export default Login;