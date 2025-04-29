import React, { useState, useEffect, useRef } from 'react';
import '../styles/animations.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m the Bee Crypto assistant. How can I help you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const commonQuestions = [
    'How do I create an account?',
    'What are the trading fees?',
    'How to deposit funds?',
    'Is my account secure?',
    'How to contact support?',
  ];

  const botResponses = {
    'how do i create an account': 'You can create an account by clicking on the "Register" button at the top right of the page. You\'ll need to provide an email address, create a password, and agree to our terms of service.',
    'what are the trading fees': 'Our trading fees start at 0.1% for makers and 0.2% for takers. Fees decrease based on your 30-day trading volume and whether you hold our native token. You can see the complete fee schedule in the Fees section of your account.',
    'how to deposit funds': 'To deposit funds, go to the "Wallet" section and click "Deposit". You can deposit cryptocurrency by sending it to your unique wallet address, or fiat currency via bank transfer in supported regions.',
    'is my account secure': 'We employ multiple security measures including two-factor authentication, withdrawal whitelists, and cold storage for funds. However, you should also take precautions like using a strong password and enabling 2FA.',
    'how to contact support': 'You can contact our support team 24/7 via live chat, email at support@beecrypto.com, or through the contact form in the Support section of our website.',
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let responseText = "I'm sorry, I didn't understand that. Could you rephrase your question or try one of the suggested questions below?";

      // Check for matching question
      for (const [question, answer] of Object.entries(botResponses)) {
        if (lowerInput.includes(question)) {
          responseText = answer;
          break;
        }
      }

      const botMessage = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    // Trigger form submission
    const fakeEvent = { preventDefault: () => {} };
    handleSubmit(fakeEvent);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <div className="chatbot-avatar">
                <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="Bot Avatar" />
              </div>
              <h3>Bee Crypto Assistant</h3>
            </div>
            <button className="chatbot-close" onClick={toggleChat}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="message-content typing">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-quick-questions">
            <p>Quick questions:</p>
            <div className="quick-buttons">
              {commonQuestions.map((question, index) => (
                <button 
                  key={index} 
                  className="quick-btn"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              autoFocus
            />
            <button type="submit">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={toggleChat}>
          <i className="fas fa-comment-dots"></i>
        </button>
      )}
    </div>
  );
};

export default ChatBot;