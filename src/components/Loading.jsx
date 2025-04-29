import React from 'react';
import '../styles/animations.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <img 
            src="https://cryptologos.cc/logos/versions/bitcoin-btc-logo-full.svg" 
            alt="Bee Crypto Logo" 
          />
        </div>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <div className="loading-text">
          <h2>Loading Bee Crypto</h2>
          <p>Preparing your secure trading environment...</p>
        </div>
        <div className="loading-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="progress-text">Loading assets...</span>
        </div>
      </div>
      
      <div className="loading-tips">
        <div className="tip-card">
          <i className="fas fa-lock"></i>
          <h3>Security Tip</h3>
          <p>Always verify the website URL before entering your login credentials.</p>
        </div>
        <div className="tip-card">
          <i className="fas fa-book"></i>
          <h3>Did You Know?</h3>
          <p>You can access free educational resources in our Learning Center.</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;