import React, { useState } from 'react';
import '../styles/animations.css';

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqCategories = [
    { id: 'general', name: 'General' },
    { id: 'account', name: 'Account' },
    { id: 'trading', name: 'Trading' },
    { id: 'security', name: 'Security' },
    { id: 'payments', name: 'Payments' },
  ];

  const faqItems = {
    general: [
      {
        question: 'What is Bee Crypto?',
        answer: 'Bee Crypto is a comprehensive cryptocurrency trading platform that allows users to buy, sell, and trade various digital assets. We provide advanced trading tools, educational resources, and secure wallet services to help both beginners and experienced traders navigate the cryptocurrency markets.'
      },
      {
        question: 'Is Bee Crypto available in my country?',
        answer: 'Bee Crypto is available in most countries, with some exceptions due to local regulations. We currently serve users in over 100 countries. Please check our Terms of Service or contact support for specific information about your region.'
      },
      {
        question: 'How do I get started with Bee Crypto?',
        answer: 'To get started, simply create an account by providing your email address and setting up a secure password. After verifying your email, you can deposit funds and begin trading. We recommend completing your profile and identity verification to access all features and higher limits.'
      }
    ],
    account: [
      {
        question: 'How do I reset my password?',
        answer: 'If you\'ve forgotten your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and we\'ll send you instructions to reset your password. For security reasons, we cannot retrieve your existing password.'
      },
      {
        question: 'Why do I need to verify my identity?',
        answer: 'Identity verification (KYC) is required to comply with financial regulations and prevent fraud. It helps us maintain a secure platform for all users and enables higher deposit/withdrawal limits. Your information is protected with bank-level security measures.'
      },
      {
        question: 'Can I have multiple accounts?',
        answer: 'No, each user is allowed only one account. Creating multiple accounts violates our Terms of Service and may result in all associated accounts being suspended. If you need help with your existing account, please contact our support team.'
      }
    ],
    trading: [
      {
        question: 'What trading pairs are available?',
        answer: 'We offer a wide range of trading pairs including major cryptocurrencies like BTC, ETH, and BNB paired with stablecoins (USDT, USDC) and fiat currencies where available. The complete list is visible on our Markets page, with new pairs added regularly based on user demand.'
      },
      {
        question: 'What are the trading fees?',
        answer: 'Our fee structure is competitive and based on your 30-day trading volume. Maker fees start at 0.10% and taker fees at 0.20%, with discounts available for holding our native token and higher volume traders. See our Fees page for complete details.'
      },
      {
        question: 'How do limit orders work?',
        answer: 'A limit order allows you to set the maximum price you\'re willing to pay when buying or the minimum price you\'re willing to accept when selling. The order will only execute if the market reaches your specified price. This gives you more control over your trade execution.'
      }
    ],
    security: [
      {
        question: 'How do I secure my account?',
        answer: 'We recommend enabling Two-Factor Authentication (2FA), using a strong unique password, and being cautious of phishing attempts. Never share your password or 2FA codes with anyone. For large holdings, consider using our offline vault storage option.'
      },
      {
        question: 'What should I do if I suspect unauthorized access?',
        answer: 'Immediately change your password and enable 2FA if not already active. Contact our support team through verified channels to report the issue. We can help secure your account and investigate any suspicious activity.'
      },
      {
        question: 'Are my funds insured?',
        answer: 'The majority of user funds are held in cold storage for security. We maintain an insurance fund to cover potential losses, but cryptocurrency investments are inherently risky. We recommend users only invest what they can afford to lose.'
      }
    ],
    payments: [
      {
        question: 'What deposit methods are available?',
        answer: 'We support cryptocurrency deposits (no minimum) and fiat deposits via bank transfer (minimum varies by currency). Some regions also support credit/debit cards and alternative payment methods. Available options will be shown when you initiate a deposit.'
      },
      {
        question: 'How long do withdrawals take?',
        answer: 'Cryptocurrency withdrawals are typically processed within 30 minutes but may take longer during periods of high network congestion. Fiat withdrawals usually take 1-3 business days depending on your bank. All withdrawals are subject to security reviews.'
      },
      {
        question: 'Are there deposit or withdrawal limits?',
        answer: 'Limits vary based on your account verification level. Unverified accounts have lower limits, while fully verified accounts enjoy higher limits. You can view your current limits in the Account section of your dashboard.'
      }
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the message to your support system
    console.log({ name, email, subject, message });
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="support">
      <div className="support-header">
        <h1>Support Center</h1>
        <p>We're here to help you with any questions or issues</p>
      </div>
      
      <div className="support-tabs">
        <button 
          className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </button>
        <button 
          className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact Us
        </button>
        <button 
          className={`tab ${activeTab === 'status' ? 'active' : ''}`}
          onClick={() => setActiveTab('status')}
        >
          System Status
        </button>
      </div>
      
      {activeTab === 'faq' && (
        <div className="faq-section">
          <div className="faq-categories">
            {faqCategories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <div className="search-box">
              <input type="text" placeholder="Search FAQs..." />
              <button><i className="fas fa-search"></i></button>
            </div>
            
            <div className="faq-items">
              {faqItems[activeTab]?.map((item, index) => (
                <div key={index} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              )) || (
                <div className="no-results">
                  <p>Select a category to view FAQs</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'contact' && (
        <div className="contact-section">
          <div className="contact-options">
            <div className="option-card">
              <i className="fas fa-envelope"></i>
              <h3>Email Support</h3>
              <p>For general inquiries and non-urgent matters</p>
              <p>Average response time: 24 hours</p>
              <a href="mailto:support@beecrypto.com" className="contact-btn">
                Email Us
              </a>
            </div>
            <div className="option-card">
              <i className="fas fa-comment-dots"></i>
              <h3>Live Chat</h3>
              <p>Get instant help from our support team</p>
              <p>Available 24/7 for verified users</p>
              <button className="contact-btn">
                Start Chat
              </button>
            </div>
            <div className="option-card">
              <i className="fas fa-phone-alt"></i>
              <h3>Phone Support</h3>
              <p>Speak directly with a support agent</p>
              <p>Available Monday-Friday, 9AM-5PM EST</p>
              <a href="tel:+15551234567" className="contact-btn">
                Call Us
              </a>
            </div>
          </div>
          
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            {isSubmitted ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>Your message has been sent successfully!</p>
                <p>Our support team will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="support-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      
      {activeTab === 'status' && (
        <div className="status-section">
          <div className="status-header">
            <h2>System Status</h2>
            <div className="status-overview">
              <div className="status-indicator operational">
                <div className="status-light"></div>
                <span>All Systems Operational</span>
              </div>
              <p>Last updated: {new Date().toLocaleString()}</p>
            </div>
          </div>
          
          <div className="status-components">
            <div className="component-card">
              <h3>Trading Engine</h3>
              <div className="status operational">
                <span>Operational</span>
              </div>
              <p>No issues detected</p>
            </div>
            <div className="component-card">
              <h3>API</h3>
              <div className="status operational">
                <span>Operational</span>
              </div>
              <p>All endpoints functioning normally</p>
            </div>
            <div className="component-card">
              <h3>Deposits</h3>
              <div className="status operational">
                <span>Operational</span>
              </div>
              <p>Processing normally</p>
            </div>
            <div className="component-card">
              <h3>Withdrawals</h3>
              <div className="status operational">
                <span>Operational</span>
              </div>
              <p>Standard processing times</p>
            </div>
            <div className="component-card">
              <h3>Website</h3>
              <div className="status operational">
                <span>Operational</span>
              </div>
              <p>No reported issues</p>
            </div>
            <div className="component-card">
              <h3>Mobile App</h3>
              <div className="status operational">
                <span>Operational</span>
              </div>
              <p>Latest version 2.4.1 available</p>
            </div>
          </div>
          
          <div className="incident-history">
            <h3>Past Incidents</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Component</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-05-10</td>
                  <td>API</td>
                  <td className="status degraded">Degraded</td>
                  <td>Partial outage for 30 minutes during maintenance</td>
                </tr>
                <tr>
                  <td>2023-04-22</td>
                  <td>Deposits</td>
                  <td className="status outage">Outage</td>
                  <td>Delays in ETH and ERC-20 token deposits for 2 hours</td>
                </tr>
                <tr>
                  <td>2023-03-15</td>
                  <td>Website</td>
                  <td className="status outage">Outage</td>
                  <td>DDOS attack caused 45 minutes of downtime</td>
                </tr>
                <tr>
                  <td>2023-02-28</td>
                  <td>Trading Engine</td>
                  <td className="status degraded">Degraded</td>
                  <td>Increased latency during peak trading hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      <div className="support-resources">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <i className="fas fa-book"></i>
            <h3>Help Center</h3>
            <p>Comprehensive guides and tutorials for all platform features</p>
            <a href="#" className="resource-link">Visit Help Center</a>
          </div>
          <div className="resource-card">
            <i className="fas fa-video"></i>
            <h3>Video Tutorials</h3>
            <p>Step-by-step video guides for common tasks and features</p>
            <a href="#" className="resource-link">Watch Videos</a>
          </div>
          <div className="resource-card">
            <i className="fas fa-comments"></i>
            <h3>Community Forum</h3>
            <p>Get help from other users and share your knowledge</p>
            <a href="#" className="resource-link">Join Discussion</a>
          </div>
          <div className="resource-card">
            <i className="fas fa-file-alt"></i>
            <h3>Documentation</h3>
            <p>Technical documentation for API and advanced features</p>
            <a href="#" className="resource-link">Read Docs</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;