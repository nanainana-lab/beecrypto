import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/animations.css';

const Header = ({ user, onLogout, toggleDarkMode, darkMode }) => {
    return (
        <header className={`header ${darkMode ? 'dark' : 'light'}`}>
            <div className="header-container">
                <Link to="/" className="logo">
                    <img
                        src="https://cryptologos.cc/logos/versions/bitcoin-btc-logo-full.svg"
                        alt="Bee Crypto Logo"
                        className="logo-img"
                    />
                    <span className="logo-text">Bee Crypto</span>
                </Link>

                <div className="header-actions">
                    <div className="theme-toggle" onClick={toggleDarkMode}>
                        {darkMode ? (
                            <i className="fas fa-sun"></i>
                        ) : (
                            <i className="fas fa-moon"></i>
                        )}
                    </div>

                    {user ? (
                        <div className="user-profile">
                            <span className="username">{user.username}</span>
                            <div className="user-avatar">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${user.username}&background=random`}
                                    alt="User Avatar"
                                />
                            </div>
                            <button onClick={onLogout} className="logout-btn">
                                <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </div>
                    ) : (
                        <div className="auth-buttons">
                            <Link to="/login" className="login-btn">
                                Login
                            </Link>
                            <Link to="/register" className="register-btn">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;