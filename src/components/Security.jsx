import React, { useState } from 'react';
import '../styles/animations.css';

const Security = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [withdrawalWhitelist, setWithdrawalWhitelist] = useState(false);
  const [antiPhishingCode, setAntiPhishingCode] = useState('');
  const [deviceList, setDeviceList] = useState([
    { id: 1, name: 'iPhone 13', os: 'iOS 15.4', location: 'New York, US', lastActive: '2 hours ago', current: true },
    { id: 2, name: 'MacBook Pro', os: 'macOS 12.3', location: 'New York, US', lastActive: '1 day ago', current: false },
    { id: 3, name: 'Android Phone', os: 'Android 11', location: 'London, UK', lastActive: '3 weeks ago', current: false },
  ]);
  const [loginHistory, setLoginHistory] = useState([
    { id: 1, date: '2023-05-15 10:23:45', device: 'iPhone 13', location: 'New York, US', ip: '192.168.1.1', status: 'Successful' },
    { id: 2, date: '2023-05-14 15:42:12', device: 'MacBook Pro', location: 'New York, US', ip: '192.168.1.2', status: 'Successful' },
    { id: 3, date: '2023-05-10 09:15:33', device: 'Android Phone', location: 'London, UK', ip: '203.113.45.67', status: 'Successful' },
    { id: 4, date: '2023-05-08 22:56:12', device: 'Unknown', location: 'Moscow, RU', ip: '95.213.204.11', status: 'Failed' },
  ]);

  const toggleTwoFactorAuth = () => {
    setTwoFactorAuth(!twoFactorAuth);
  };

  const toggleWithdrawalWhitelist = () => {
    setWithdrawalWhitelist(!withdrawalWhitelist);
  };

  const saveAntiPhishingCode = () => {
    if (antiPhishingCode.trim() !== '') {
      alert(`Anti-phishing code saved: ${antiPhishingCode}`);
    }
  };

  const revokeDevice = (deviceId) => {
    setDeviceList(deviceList.filter(device => device.id !== deviceId));
  };

  return (
    <div className="security">
      <div className="security-header">
        <h1>Security Center</h1>
        <p>Manage your account security settings and monitor activity</p>
      </div>
      
      <div className="security-tabs">
        <button 
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab ${activeTab === 'devices' ? 'active' : ''}`}
          onClick={() => setActiveTab('devices')}
        >
          Devices
        </button>
        <button 
          className={`tab ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => setActiveTab('activity')}
        >
          Activity Log
        </button>
        <button 
          className={`tab ${activeTab === 'advanced' ? 'active' : ''}`}
          onClick={() => setActiveTab('advanced')}
        >
          Advanced
        </button>
      </div>
      
      {activeTab === 'overview' && (
        <div className="security-overview">
          <div className="security-score">
            <div className="score-circle">
              <div className="circle-progress" style={{ '--progress': '85' }}></div>
              <span>85%</span>
            </div>
            <div className="score-details">
              <h3>Your Security Score</h3>
              <p>Good - Better than 75% of users</p>
              <p>Improve your score by enabling additional security features</p>
            </div>
          </div>
          
          <div className="security-features">
            <h3>Security Features</h3>
            <div className="features-grid">
              <div className={`feature-card ${twoFactorAuth ? 'enabled' : ''}`}>
                <div className="feature-header">
                  <i className="fas fa-mobile-alt"></i>
                  <h4>Two-Factor Authentication</h4>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={twoFactorAuth} 
                      onChange={toggleTwoFactorAuth} 
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <p>
                  Add an extra layer of security to your account. When enabled, you'll need to 
                  enter a verification code from your authenticator app each time you log in.
                </p>
                {twoFactorAuth ? (
                  <button className="manage-btn">Manage 2FA</button>
                ) : (
                  <button className="enable-btn" onClick={toggleTwoFactorAuth}>Enable</button>
                )}
              </div>
              
              <div className={`feature-card ${withdrawalWhitelist ? 'enabled' : ''}`}>
                <div className="feature-header">
                  <i className="fas fa-list-check"></i>
                  <h4>Withdrawal Whitelist</h4>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={withdrawalWhitelist} 
                      onChange={toggleWithdrawalWhitelist} 
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <p>
                  Restrict withdrawals to pre-approved wallet addresses only. When enabled, 
                  any new withdrawal address must be verified via email before use.
                </p>
                {withdrawalWhitelist ? (
                  <button className="manage-btn">Manage Addresses</button>
                ) : (
                  <button className="enable-btn" onClick={toggleWithdrawalWhitelist}>Enable</button>
                )}
              </div>
              
              <div className="feature-card">
                <div className="feature-header">
                  <i className="fas fa-shield-alt"></i>
                  <h4>Anti-Phishing Code</h4>
                </div>
                <p>
                  Set a personal code that will be included in all official emails from Bee Crypto. 
                  This helps you identify legitimate communications and avoid phishing attempts.
                </p>
                <div className="phishing-code">
                  <input
                    type="text"
                    value={antiPhishingCode}
                    onChange={(e) => setAntiPhishingCode(e.target.value)}
                    placeholder="Enter your code"
                    maxLength="10"
                  />
                  <button onClick={saveAntiPhishingCode}>Save</button>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-header">
                  <i className="fas fa-lock"></i>
                  <h4>Password Management</h4>
                </div>
                <p>
                  Regularly update your password to maintain account security. Use a strong, 
                  unique password that you don't use for any other services.
                </p>
                <button className="change-btn">Change Password</button>
              </div>
            </div>
          </div>
          
          <div className="security-tips">
            <h3>Security Tips</h3>
            <div className="tips-grid">
              <div className="tip-card">
                <i className="fas fa-envelope"></i>
                <h4>Beware of Phishing</h4>
                <p>Always verify emails claiming to be from Bee Crypto. Check the sender's address and look for your anti-phishing code.</p>
              </div>
              <div className="tip-card">
                <i className="fas fa-link"></i>
                <h4>Check URLs</h4>
                <p>Ensure you're on the official Bee Crypto website before entering login credentials. Bookmark our official site.</p>
              </div>
              <div className="tip-card">
                <i className="fas fa-user-secret"></i>
                <h4>Protect Your Device</h4>
                <p>Use up-to-date antivirus software and avoid logging in from public or shared computers.</p>
              </div>
              <div className="tip-card">
                <i className="fas fa-key"></i>
                <h4>Secure Your Keys</h4>
                <p>Never share your API keys, private keys, or seed phrases with anyone. Bee Crypto will never ask for these.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'devices' && (
        <div className="devices-section">
          <div className="devices-list">
            <h3>Authorized Devices</h3>
            <p>Manage devices that have access to your account</p>
            
            <table>
              <thead>
                <tr>
                  <th>Device</th>
                  <th>Operating System</th>
                  <th>Location</th>
                  <th>Last Active</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {deviceList.map(device => (
                  <tr key={device.id} className={device.current ? 'current' : ''}>
                    <td>
                      {device.name}
                      {device.current && <span className="current-badge">Current</span>}
                    </td>
                    <td>{device.os}</td>
                    <td>{device.location}</td>
                    <td>{device.lastActive}</td>
                    <td>
                      {!device.current && (
                        <button 
                          className="revoke-btn"
                          onClick={() => revokeDevice(device.id)}
                        >
                          Revoke
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="device-security">
            <h3>Device Security</h3>
            <div className="security-card">
              <i className="fas fa-laptop"></i>
              <div className="card-content">
                <h4>Secure Your Devices</h4>
                <p>
                  Each device with access to your account is a potential entry point for attackers. 
                  Follow these best practices to keep your devices secure:
                </p>
                <ul>
                  <li>Use strong passwords or biometric locks on all devices</li>
                  <li>Keep operating systems and browsers updated</li>
                  <li>Install reputable security software</li>
                  <li>Avoid using public or shared computers for accessing your account</li>
                  <li>Regularly review and revoke access for unused devices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'activity' && (
        <div className="activity-section">
          <div className="activity-log">
            <h3>Login History</h3>
            <p>Review recent login attempts to your account</p>
            
            <table>
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Device</th>
                  <th>Location</th>
                  <th>IP Address</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {loginHistory.map(entry => (
                  <tr key={entry.id} className={entry.status.toLowerCase()}>
                    <td>{entry.date}</td>
                    <td>{entry.device}</td>
                    <td>{entry.location}</td>
                    <td>{entry.ip}</td>
                    <td>
                      <span className={`status ${entry.status.toLowerCase()}`}>
                        {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="suspicious-activity">
            <h3>Suspicious Activity</h3>
            <div className="activity-card">
              <div className="alert-header">
                <i className="fas fa-exclamation-triangle"></i>
                <h4>Failed Login Attempt</h4>
                <span className="alert-time">2023-05-08 22:56:12</span>
              </div>
              <div className="alert-details">
                <p><strong>Location:</strong> Moscow, RU</p>
                <p><strong>IP Address:</strong> 95.213.204.11</p>
                <p><strong>Device:</strong> Unknown</p>
                <p>
                  <strong>Details:</strong> Failed login attempt with incorrect password. 
                  If this wasn't you, we recommend changing your password immediately.
                </p>
              </div>
              <div className="alert-actions">
                <button className="report-btn">Report Suspicious Activity</button>
                <button className="secure-btn">Secure My Account</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'advanced' && (
        <div className="advanced-section">
          <div className="advanced-features">
            <h3>Advanced Security Settings</h3>
            
            <div className="feature-card">
              <div className="feature-header">
                <i className="fas fa-ban"></i>
                <h4>Account Freeze</h4>
              </div>
              <p>
                Temporarily freeze your account to prevent all withdrawals and trades. 
                This can be useful if you suspect unauthorized access or need to secure 
                your account while traveling.
              </p>
              <button className="freeze-btn">Freeze Account</button>
            </div>
            
            <div className="feature-card">
              <div className="feature-header">
                <i className="fas fa-clock"></i>
                <h4>Withdrawal Delays</h4>
              </div>
              <p>
                Enable a 24-hour delay for all withdrawals. This provides a window to 
                cancel unauthorized withdrawals if your account is compromised.
              </p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            
            <div className="feature-card">
              <div className="feature-header">
                <i className="fas fa-globe"></i>
                <h4>IP Restrictions</h4>
              </div>
              <p>
                Restrict account access to specific IP addresses or geographic regions. 
                This prevents login attempts from unexpected locations.
              </p>
              <button className="manage-btn">Manage IP Restrictions</button>
            </div>
            
            <div className="feature-card">
              <div className="feature-header">
                <i className="fas fa-bell"></i>
                <h4>Security Notifications</h4>
              </div>
              <p>
                Configure how you receive security alerts about login attempts, 
                password changes, and other sensitive activities.
              </p>
              <button className="manage-btn">Notification Settings</button>
            </div>
          </div>
          
          <div className="emergency-section">
            <h3>Emergency Options</h3>
            <div className="emergency-card">
              <i className="fas fa-user-lock"></i>
              <div className="card-content">
                <h4>Account Recovery</h4>
                <p>
                  If you've lost access to your account, we can help you recover it 
                  through our verification process. This may take several days for 
                  security reasons.
                </p>
                <button className="recovery-btn">Begin Account Recovery</button>
              </div>
            </div>
            
            <div className="emergency-card">
              <i className="fas fa-skull-crossbones"></i>
              <div className="card-content">
                <h4>Self-Destruct</h4>
                <p>
                  In extreme cases, you can initiate a self-destruct sequence that 
                  will permanently delete your account and all associated data after 
                  a 7-day waiting period.
                </p>
                <button className="destruct-btn">Initiate Self-Destruct</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="security-resources">
        <h3>Security Resources</h3>
        <div className="resources-grid">
          <a href="#" className="resource-card">
            <i className="fas fa-book"></i>
            <h4>Security Guide</h4>
            <p>Comprehensive guide to securing your cryptocurrency assets</p>
          </a>
          <a href="#" className="resource-card">
            <i className="fas fa-video"></i>
            <h4>Security Webinars</h4>
            <p>Live and recorded sessions on cryptocurrency security best practices</p>
          </a>
          <a href="#" className="resource-card">
            <i className="fas fa-question-circle"></i>
            <h4>Security FAQ</h4>
            <p>Answers to common security questions and concerns</p>
          </a>
          <a href="#" className="resource-card">
            <i className="fas fa-headset"></i>
            <h4>Security Support</h4>
            <p>Contact our security specialists for immediate assistance</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Security;