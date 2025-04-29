import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/animations.css';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Exchange', path: '/market' },
        { name: 'Trading', path: '/trade' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'API', path: '/api' },
        { name: 'Mobile App', path: '/mobile' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Downloads', path: '/downloads' },
        { name: 'Desktop Application', path: '/desktop' },
        { name: 'Widgets', path: '/widgets' },
        { name: 'Referral Program', path: '/referral' },
        { name: 'Listing Application', path: '/listing' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Contact Us', path: '/support' },
        { name: 'System Status', path: '/status' },
        { name: 'Fees', path: '/fees' },
        { name: 'Community', path: '/community' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
        { name: 'Press', path: '/press' },
        { name: 'Legal & Privacy', path: '/legal' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img 
                src="https://cryptologos.cc/logos/versions/bitcoin-btc-logo-full.svg" 
                alt="Bee Crypto Logo" 
                className="logo-img"
              />
              <span className="logo-text">Bee Crypto</span>
            </Link>
            <p className="footer-description">
              The most trusted cryptocurrency platform for trading, investing, and securing digital assets.
            </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-reddit"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            {footerLinks.map((section, index) => (
              <div key={index} className="link-section">
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {new Date().getFullYear()} Bee Crypto. All rights reserved.</p>
            <div className="legal-links">
              <Link to="/terms">Terms of Service</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/cookies">Cookie Policy</Link>
              <Link to="/risk">Risk Disclosure</Link>
            </div>
          </div>
          
          <div className="footer-disclaimer">
            <p>
              <strong>Disclaimer:</strong> Cryptocurrency trading involves substantial risk of loss and is not suitable 
              for every investor. The valuation of cryptocurrencies may fluctuate, and, as a result, 
              clients may lose more than their original investment. The content on this website does 
              not constitute financial advice.
            </p>
          </div>
          
          <div className="footer-apps">
            <p>Download our app:</p>
            <div className="app-buttons">
              <a href="#" className="app-btn">
                <i className="fab fa-apple"></i>
                <span>App Store</span>
              </a>
              <a href="#" className="app-btn">
                <i className="fab fa-google-play"></i>
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;