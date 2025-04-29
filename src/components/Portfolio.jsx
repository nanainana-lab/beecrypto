import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import '../styles/animations.css';

const Portfolio = ({ user }) => {
    const [portfolioData, setPortfolioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [timeRange, setTimeRange] = useState('7d');
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        if (user) {
            // Simulate API call with mock data
            setTimeout(() => {
                setPortfolioData({
                    totalValue: 12567.89,
                    dayChange: 234.56,
                    dayChangePercent: 1.89,
                    allTimeProfit: 2567.89,
                    allTimeProfitPercent: 25.67,
                    assets: [
                        { symbol: 'BTC', name: 'Bitcoin', amount: 0.05, value: 2561.73, avgBuyPrice: 48500, currentPrice: 51234.56, change: 13.67, allocation: 20.37 },
                        { symbol: 'ETH', name: 'Ethereum', amount: 2.5, value: 6973.30, avgBuyPrice: 2650.00, currentPrice: 2789.32, change: 5.26, allocation: 55.47 },
                        { symbol: 'BNB', name: 'Binance Coin', amount: 5, value: 1728.35, avgBuyPrice: 320.00, currentPrice: 345.67, change: 8.02, allocation: 13.75 },
                        { symbol: 'USDT', name: 'Tether', amount: 1245.67, value: 1245.67, avgBuyPrice: 1.00, currentPrice: 1.00, change: 0.00, allocation: 9.91 },
                        { symbol: 'SOL', name: 'Solana', amount: 10, value: 1234.50, avgBuyPrice: 110.00, currentPrice: 123.45, change: 12.23, allocation: 9.82 },
                    ],
                    performanceHistory: {
                        '7d': [12000, 12150, 11980, 12340, 12200, 12450, 12567.89],
                        '30d': [11000, 11200, 11500, 11700, 11450, 11600, 11800, 12000, 12200, 12300, 12100, 11900, 12050, 12100, 12250, 12300, 12400, 12350, 12450, 12500, 12400, 12550, 12600, 12520, 12480, 12500, 12530, 12550, 12580, 12567.89],
                        '90d': [9000, 9200, 9400, 9600, 9800, 10000, 10200, 10400, 10600, 10800, 11000, 11200, 11400, 11600, 11800, 12000, 12200, 12400, 12600, 12400, 12200, 12000, 11800, 11600, 11400, 11200, 11000, 10800, 10600, 10400, 10200, 10000, 9800, 9600, 9400, 9200, 9000, 9200, 9400, 9600, 9800, 10000, 10200, 10400, 10600, 10800, 11000, 11200, 11400, 11600, 11800, 12000, 12200, 12400, 12600, 12400, 12200, 12000, 11800, 11600, 11400, 11200, 11000, 10800, 10600, 10400, 10200, 10000, 9800, 9600, 9400, 9200, 9000, 9200, 9400, 9600, 9800, 10000, 10200, 10400, 10600, 10800, 11000, 11200, 11400, 11600, 11800, 12000, 12200, 12400, 12567.89],
                    },
                    transactions: [
                        { id: 1, date: '2023-05-15', type: 'buy', symbol: 'BTC', amount: 0.05, price: 48500, total: 2425, status: 'completed' },
                        { id: 2, date: '2023-05-14', type: 'buy', symbol: 'ETH', amount: 2.5, price: 2650, total: 6625, status: 'completed' },
                        { id: 3, date: '2023-05-10', type: 'buy', symbol: 'BNB', amount: 5, price: 320, total: 1600, status: 'completed' },
                        { id: 4, date: '2023-05-05', type: 'deposit', symbol: 'USDT', amount: 2000, price: 1, total: 2000, status: 'completed' },
                        { id: 5, date: '2023-05-01', type: 'buy', symbol: 'SOL', amount: 10, price: 110, total: 1100, status: 'completed' },
                    ],
                });
                setLoading(false);
            }, 1000);
        }
    }, [user]);

    if (!user) {
        return (
            <div className="portfolio">
                <div className="auth-required">
                    <h2>Portfolio Tracking</h2>
                    <p>Please login or register to view your portfolio and track your investments.</p>
                    <div className="auth-buttons">
                        <Link to="/login" className="login-btn">
                            Login
                        </Link>
                        <Link to="/register" className="register-btn">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (loading || !portfolioData) {
        return (
            <div className="portfolio">
                <div className="loading-spinner">
                    <i className="fas fa-spinner fa-spin"></i>
                </div>
            </div>
        );
    }

    return (
        <div className="portfolio">
            <div className="portfolio-header">
                <h1>My Portfolio</h1>
                <p>Track your cryptocurrency investments and performance</p>
            </div>

            <div className="portfolio-summary">
                <div className="total-value">
                    <h3>Total Portfolio Value</h3>
                    <p className="value">${portfolioData.totalValue.toLocaleString()}</p>
                    <p className={`change ${portfolioData.dayChange >= 0 ? 'positive' : 'negative'}`}>
                        {portfolioData.dayChange >= 0 ? '+' : ''}{portfolioData.dayChange.toLocaleString()} (
                        {portfolioData.dayChangePercent >= 0 ? '+' : ''}{portfolioData.dayChangePercent}%)
                    </p>
                </div>

                <div className="profit-loss">
                    <h3>All Time Profit/Loss</h3>
                    <p className={`value ${portfolioData.allTimeProfit >= 0 ? 'positive' : 'negative'}`}>
                        ${portfolioData.allTimeProfit.toLocaleString()} (
                        {portfolioData.allTimeProfitPercent >= 0 ? '+' : ''}{portfolioData.allTimeProfitPercent}%)
                    </p>
                </div>

                <div className="time-range">
                    <button
                        className={`range-btn ${timeRange === '7d' ? 'active' : ''}`}
                        onClick={() => setTimeRange('7d')}
                    >
                        7D
                    </button>
                    <button
                        className={`range-btn ${timeRange === '30d' ? 'active' : ''}`}
                        onClick={() => setTimeRange('30d')}
                    >
                        30D
                    </button>
                    <button
                        className={`range-btn ${timeRange === '90d' ? 'active' : ''}`}
                        onClick={() => setTimeRange('90d')}
                    >
                        90D
                    </button>
                </div>
            </div>

            <div className="portfolio-chart">
                <Chart data={portfolioData.performanceHistory[timeRange]} />
            </div>

            <div className="portfolio-tabs">
                <button
                    className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Overview
                </button>
                <button
                    className={`tab ${activeTab === 'assets' ? 'active' : ''}`}
                    onClick={() => setActiveTab('assets')}
                >
                    Assets
                </button>
                <button
                    className={`tab ${activeTab === 'transactions' ? 'active' : ''}`}
                    onClick={() => setActiveTab('transactions')}
                >
                    Transactions
                </button>
            </div>

            {activeTab === 'overview' && (
                <div className="portfolio-overview">
                    <div className="allocation-chart">
                        <h3>Asset Allocation</h3>
                        <div className="pie-chart">
                            {/* This would be replaced with an actual chart component */}
                            <div className="chart-placeholder">
                                <img src="https://via.placeholder.com/400x300?text=Pie+Chart+Placeholder" alt="Asset Allocation Chart" />
                            </div>
                        </div>
                    </div>

                    <div className="performance-metrics">
                        <h3>Performance Metrics</h3>
                        <div className="metrics-grid">
                            <div className="metric-card">
                                <h4>Sharpe Ratio</h4>
                                <p>1.45</p>
                            </div>
                            <div className="metric-card">
                                <h4>Volatility</h4>
                                <p>12.34%</p>
                            </div>
                            <div className="metric-card">
                                <h4>Beta</h4>
                                <p>0.87</p>
                            </div>
                            <div className="metric-card">
                                <h4>Max Drawdown</h4>
                                <p>-8.76%</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'assets' && (
                <div className="assets-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Asset</th>
                                <th>Amount</th>
                                <th>Avg Buy Price</th>
                                <th>Current Price</th>
                                <th>Value</th>
                                <th>Change</th>
                                <th>Allocation</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {portfolioData.assets.map(asset => (
                                <tr key={asset.symbol}>
                                    <td>
                                        <div className="asset-name">
                                            <img
                                                src={`https://cryptologos.cc/logos/${asset.name.toLowerCase().replace(' ', '-')}-${asset.symbol.toLowerCase()}-logo.png`}
                                                alt={asset.name}
                                                onError={(e) => {
                                                    e.target.src = 'https://cryptologos.cc/logos/bnb-bnb-logo.png';
                                                }}
                                            />
                                            <span>{asset.name}</span>
                                            <span className="symbol">{asset.symbol}</span>
                                        </div>
                                    </td>
                                    <td>{asset.amount}</td>
                                    <td>${asset.avgBuyPrice.toLocaleString()}</td>
                                    <td>${asset.currentPrice.toLocaleString()}</td>
                                    <td>${asset.value.toLocaleString()}</td>
                                    <td className={asset.change >= 0 ? 'positive' : 'negative'}>
                                        {asset.change >= 0 ? '+' : ''}{asset.change}%
                                    </td>
                                    <td>{asset.allocation}%</td>
                                    <td>
                                        <Link to={`/trade?symbol=${asset.symbol}/USDT`} className="trade-btn">
                                            Trade
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'transactions' && (
                <div className="transactions-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Asset</th>
                                <th>Amount</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {portfolioData.transactions.map(tx => (
                                <tr key={tx.id}>
                                    <td>{tx.date}</td>
                                    <td className={tx.type === 'buy' ? 'positive' : 'negative'}>{tx.type}</td>
                                    <td>{tx.symbol}</td>
                                    <td>{tx.amount}</td>
                                    <td>${tx.price.toLocaleString()}</td>
                                    <td>${tx.total.toLocaleString()}</td>
                                    <td className={`status ${tx.status}`}>{tx.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="portfolio-insights">
                <h3>AI-Powered Portfolio Insights</h3>
                <div className="insights-content">
                    <div className="insight-card">
                        <i className="fas fa-lightbulb"></i>
                        <h4>Diversification Score: 78/100</h4>
                        <p>Your portfolio is well-diversified across different cryptocurrencies, but could benefit from adding some stablecoins to reduce volatility.</p>
                    </div>
                    <div className="insight-card">
                        <i className="fas fa-chart-pie"></i>
                        <h4>Risk Level: Medium</h4>
                        <p>Your current asset allocation indicates a medium risk tolerance, with 65% in large-cap assets and 35% in mid-cap assets.</p>
                    </div>
                    <div className="insight-card">
                        <i className="fas fa-balance-scale"></i>
                        <h4>Rebalancing Suggestion</h4>
                        <p>Consider rebalancing your portfolio to maintain your target allocation. ETH is currently overweight by 5%.</p>
                    </div>
                </div>
            </div>

            <div className="portfolio-actions">
                <h3>Quick Actions</h3>
                <div className="actions-grid">
                    <Link to="/trade" className="action-card">
                        <i className="fas fa-exchange-alt"></i>
                        <span>Trade Assets</span>
                    </Link>
                    <Link to="/deposit" className="action-card">
                        <i className="fas fa-plus-circle"></i>
                        <span>Deposit Funds</span>
                    </Link>
                    <Link to="/withdraw" className="action-card">
                        <i className="fas fa-minus-circle"></i>
                        <span>Withdraw Funds</span>
                    </Link>
                    <Link to="/transfer" className="action-card">
                        <i className="fas fa-random"></i>
                        <span>Transfer Assets</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;