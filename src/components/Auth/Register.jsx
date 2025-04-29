import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/animations.css';

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    agreeTerms: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate inputs
      if (!formData.email || !formData.password || !formData.username) {
        throw new Error('Please fill in all fields');
      }
      
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      if (!formData.agreeTerms) {
        throw new Error('You must agree to the terms and conditions');
      }

      // Simulate successful registration
      const userData = {
        id: '54321',
        username: formData.username,
        email: formData.email,
        vipLevel: 1,
        joinDate: new Date().toISOString(),
      };

      onRegister(userData);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setError('');
    setStep(2);
  };

  const prevStep = () => {
    setStep(1);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Create Your Account</h2>
          <p>Join Bee Crypto and start your cryptocurrency journey</p>
        </div>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          {step === 1 ? (
            <>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
                <div className="password-strength">
                  <div className={`strength-bar ${formData.password.length > 0 ? 'weak' : ''} ${formData.password.length > 5 ? 'medium' : ''} ${formData.password.length > 8 ? 'strong' : ''}`}></div>
                  <span>
                    {formData.password.length === 0 ? '' : 
                     formData.password.length <= 5 ? 'Weak' : 
                     formData.password.length <= 8 ? 'Medium' : 'Strong'}
                  </span>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
              
              <button type="button" className="auth-btn" onClick={nextStep}>
                Continue
              </button>
            </>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="terms-checkbox">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    I agree to the <Link to="/terms">Terms of Service</Link> and 
                    <Link to="/privacy"> Privacy Policy</Link>
                  </span>
                </label>
              </div>
              
              <div className="form-actions">
                <button type="button" className="auth-btn secondary" onClick={prevStep}>
                  Back
                </button>
                <button type="submit" className="auth-btn" disabled={loading}>
                  {loading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </div>
            </>
          )}
        </form>
        
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Login</Link></p>
          
          <div className="social-login">
            <p>Or register with:</p>
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
        <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040" alt="Crypto Register" />
        <div className="image-overlay">
          <h3>Start Your Journey</h3>
          <p>Join the cryptocurrency revolution today</p>
        </div>
      </div>
    </div>
  );
};

export default Register;