import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Dashboard from './components/Dashboard';
import Market from './components/Market';
import Trade from './components/Trade';
import Portfolio from './components/Portfolio';
import Calculator from './components/Calculator';
import Lessons from './components/Lessons';
import About from './components/About';
import Support from './components/Support';
import Security from './components/Security';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <Header user={user} onLogout={handleLogout} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Navbar user={user} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/market" element={<Market />} />
            <Route path="/trade" element={<Trade user={user} />} />
            <Route path="/portfolio" element={<Portfolio user={user} />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/security" element={<Security />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onRegister={handleLogin} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;