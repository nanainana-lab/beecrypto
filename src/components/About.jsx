import React from 'react';
import '../styles/animations.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Bee Crypto</h1>
        <p>Your trusted partner in the cryptocurrency revolution</p>
      </div>
      
      <div className="about-content">
        <section className="mission-section">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              At Bee Crypto, we believe in the transformative power of blockchain technology 
              and cryptocurrencies to create a more open, accessible, and equitable financial 
              system for everyone. Our mission is to bridge the gap between traditional finance 
              and the emerging digital economy by providing intuitive tools, comprehensive 
              education, and secure infrastructure for cryptocurrency trading and investment.
            </p>
            <p>
              We're committed to building a platform that empowers both newcomers and experienced 
              traders to participate confidently in the crypto ecosystem. By combining cutting-edge 
              technology with user-friendly design, we aim to make cryptocurrency accessible to 
              everyone, regardless of their technical expertise or financial background.
            </p>
          </div>
          <div className="mission-image">
            <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55" alt="Crypto Mission" />
          </div>
        </section>
        
        <section className="history-section">
          <h2>Our History</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2017</div>
              <div className="timeline-content">
                <h3>Founding</h3>
                <p>
                  Bee Crypto was founded by a team of blockchain enthusiasts and financial experts 
                  who saw the potential for cryptocurrencies to revolutionize global finance. 
                  Starting as a small research group, we began developing our first trading tools.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2018</div>
              <div className="timeline-content">
                <h3>Platform Launch</h3>
                <p>
                  We launched our first public trading platform with support for Bitcoin, Ethereum, 
                  and a handful of other major cryptocurrencies. Despite the bear market, we focused 
                  on building robust infrastructure and educating our growing user base.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2020</div>
              <div className="timeline-content">
                <h3>DeFi Integration</h3>
                <p>
                  Recognizing the potential of decentralized finance, we integrated DeFi protocols 
                  into our platform, allowing users to access yield farming, staking, and other 
                  innovative financial products directly from our interface.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>
                  Bee Crypto expanded its services to over 50 countries, obtaining necessary 
                  regulatory approvals and establishing local support teams to serve our 
                  international user base better.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Present</div>
              <div className="timeline-content">
                <h3>Innovation Continues</h3>
                <p>
                  Today, Bee Crypto serves millions of users worldwide with a comprehensive suite 
                  of trading tools, educational resources, and secure custody solutions. We 
                  continue to innovate, with plans to integrate more blockchain technologies 
                  and expand our ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" />
              <h3>John Smith</h3>
              <p className="position">CEO & Founder</p>
              <p className="bio">
                Former Wall Street trader with 15 years of experience in financial markets. 
                Early Bitcoin adopter since 2012.
              </p>
            </div>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" />
              <h3>Sarah Johnson</h3>
              <p className="position">CTO</p>
              <p className="bio">
                Blockchain developer and security expert. Contributed to Ethereum core 
                development and several DeFi protocols.
              </p>
            </div>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Team Member" />
              <h3>Michael Chen</h3>
              <p className="position">Head of Trading</p>
              <p className="bio">
                Quantitative analyst specializing in cryptocurrency market microstructure 
                and algorithmic trading strategies.
              </p>
            </div>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Team Member" />
              <h3>Emily Rodriguez</h3>
              <p className="position">Head of Education</p>
              <p className="bio">
                Financial educator and content creator focused on making complex crypto 
                concepts accessible to beginners.
              </p>
            </div>
          </div>
        </section>
        
        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-lock"></i>
              <h3>Security First</h3>
              <p>
                We prioritize the safety of our users' funds and data above all else, 
                employing enterprise-grade security measures and best practices.
              </p>
            </div>
            <div className="value-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>Education</h3>
              <p>
                We believe knowledge is power. Our comprehensive educational resources 
                empower users to make informed decisions.
              </p>
            </div>
            <div className="value-card">
              <i className="fas fa-hand-holding-usd"></i>
              <h3>Transparency</h3>
              <p>
                We maintain open communication about our operations, fees, and any 
                risks associated with cryptocurrency trading.
              </p>
            </div>
            <div className="value-card">
              <i className="fas fa-users"></i>
              <h3>Community</h3>
              <p>
                We foster a supportive community where users can learn, share ideas, 
                and grow together in their crypto journey.
              </p>
            </div>
            <div className="value-card">
              <i className="fas fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>
                We continuously explore new technologies and features to enhance our 
                platform and stay ahead in the rapidly evolving crypto space.
              </p>
            </div>
            <div className="value-card">
              <i className="fas fa-balance-scale"></i>
              <h3>Integrity</h3>
              <p>
                We conduct our business with honesty and ethical standards, putting 
                our users' interests first in all decisions.
              </p>
            </div>
          </div>
        </section>
        
        <section className="achievements-section">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <i className="fas fa-users"></i>
              <h3>5M+ Users</h3>
              <p>Trusted by millions of cryptocurrency enthusiasts worldwide</p>
            </div>
            <div className="achievement-card">
              <i className="fas fa-coins"></i>
              <h3>150+ Cryptocurrencies</h3>
              <p>Supported on our trading platform with deep liquidity</p>
            </div>
            <div className="achievement-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Zero Security Breaches</h3>
              <p>Perfect track record in protecting user funds and data</p>
            </div>
            <div className="achievement-card">
              <i className="fas fa-trophy"></i>
              <h3>Industry Awards</h3>
              <p>Recognized as the most innovative crypto platform 2022</p>
            </div>
          </div>
        </section>
        
        <section className="partners-section">
          <h2>Our Partners</h2>
          <div className="partners-grid">
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin" />
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum" />
            <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="Binance" />
            <img src="https://cryptologos.cc/logos/chainlink-link-logo.png" alt="Chainlink" />
            <img src="https://cryptologos.cc/logos/polkadot-new-dot-logo.png" alt="Polkadot" />
            <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana" />
          </div>
        </section>
        
        <section className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p><i className="fas fa-envelope"></i> support@beecrypto.com</p>
              <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
              <p><i className="fas fa-map-marker-alt"></i> 123 Crypto Street, Blockchain City, BC 10001</p>
              
              <div className="social-links">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-telegram"></i></a>
                <a href="#"><i className="fab fa-discord"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;