import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import '../Styles/Login.css';

const Login = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Login submitted:', formData);
        alert('Login successful!');
      } catch (error) {
        console.error('Login failed:', error);
        setErrors({ general: 'Login failed. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    alert('Google login clicked!');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
            <div className="google-icon"></div>
            <span>Chef Booking</span>
          </div>
          <div className="user-icon">
            <User size={24} />
          </div>
        </div>

        <div className="auth-content">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account</p>

          {errors.general && (
            <div className="general-error">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <div className="input-wrapper">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  disabled={isLoading}
                />
              </div>
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <Lock className="input-icon" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? 'error' : ''}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" disabled={isLoading} />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="loading"></div>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button 
            onClick={handleGoogleLogin} 
            className="google-button"
            disabled={isLoading}
          >
            <div className="google-icon">G</div>
            Continue with Google
          </button>

          <div className="auth-switch">
            <span>Don't have an account? </span>
            <Link to="/signup" className="switch-button">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;