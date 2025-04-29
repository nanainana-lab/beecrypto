import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/animations.css';

const Navbar = ({ user }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/', name: 'Dashboard', icon: 'fas fa-home' },
        { path: '/market', name: 'Market', icon: 'fas fa-chart-line' },
        { path: '/trade', name: 'Trade', icon: 'fas fa-exchange-alt' },
        { path: '/portfolio', name: 'Portfolio', icon: 'fas fa-wallet' },
        { path: '/calculator', name: 'Calculator', icon: 'fas fa-calculator' },
        { path: '/lessons', name: 'Lessons', icon: 'fas fa-graduation-cap' },
        { path: '/about', name: 'About Us', icon: 'fas fa-info-circle' },
        { path: '/support', name: 'Support', icon: 'fas fa-headset' },
        { path: '/security', name: 'Security', icon: 'fas fa-shield-alt' },
    ];

    return (
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <i className="fas fa-times"></i>
                ) : (
                    <i className="fas fa-bars"></i>
                )}
            </button>

            <ul className="nav-list">
                {navItems.map((item) => (
                    <li key={item.path} className="nav-item">
                        <Link
                            to={item.path}
                            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <i className={item.icon}></i>
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}

                {user && (
                    <li className="nav-item vip-badge">
                        <div className="nav-link">
                            <i className="fas fa-crown"></i>
                            <span>VIP Tier {user.vipLevel}</span>
                        </div>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;