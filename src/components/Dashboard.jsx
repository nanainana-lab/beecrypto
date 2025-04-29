import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import '../styles/animations.css';

const Dashboard = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulating API call with mock data
                const mockData = [
                    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 51234.56, change24h: 2.34, marketCap: 980000000000, volume: 28000000000, image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
                    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 2789.32, change24h: -1.23, marketCap: 330000000000, volume: 15000000000, image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
                    { id: 'binancecoin', name: 'Binance Coin', symbol: 'BNB', price: 345.67, change24h: 0.56, marketCap: 56000000000, volume: 2000000000, image: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
                    { id: 'solana', name: 'Solana', symbol: 'SOL', price: 123.45, change24h: 5.67, marketCap: 42000000000, volume: 1800000000, image: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
                    { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 0.56, change24h: -0.78, marketCap: 19000000000, volume: 800000000, image: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
                ];

                setTimeout(() => {
                    setCryptoData(mockData);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredData = activeTab === 'gainers'
        ? cryptoData.filter(item => item.change24h > 0)
        : activeTab === 'losers'
            ? cryptoData.filter(item => item.change24h < 0)
            : cryptoData;

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Welcome to Bee Crypto</h1>
                <p>Your gateway to the world of cryptocurrency trading and investment</p>
            </div>

            <div className="dashboard-content">
                <section className="market-overview">
                    <div className="section-header">
                        <h2>Market Overview</h2>
                        <div className="tabs">
                            <button
                                className={`tab ${activeTab === 'all' ? 'active' : ''}`}
                                onClick={() => setActiveTab('all')}
                            >
                                All
                            </button>
                            <button
                                className={`tab ${activeTab === 'gainers' ? 'active' : ''}`}
                                onClick={() => setActiveTab('gainers')}
                            >
                                Gainers
                            </button>
                            <button
                                className={`tab ${activeTab === 'losers' ? 'active' : ''}`}
                                onClick={() => setActiveTab('losers')}
                            >
                                Losers
                            </button>
                        </div>
                    </div>

                    {loading ? (
                        <div className="loading-spinner">
                            <i className="fas fa-spinner fa-spin"></i>
                        </div>
                    ) : (
                        <div className="crypto-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>24h %</th>
                                        <th>Market Cap</th>
                                        <th>Volume (24h)</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((crypto, index) => (
                                        <tr key={crypto.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="crypto-name">
                                                    <img src={crypto.image} alt={crypto.name} />
                                                    <span>{crypto.name}</span>
                                                    <span className="symbol">{crypto.symbol}</span>
                                                </div>
                                            </td>
                                            <td>${crypto.price.toLocaleString()}</td>
                                            <td className={crypto.change24h > 0 ? 'positive' : 'negative'}>
                                                {crypto.change24h > 0 ? '+' : ''}{crypto.change24h}%
                                            </td>
                                            <td>${(crypto.marketCap / 1000000000).toFixed(2)}B</td>
                                            <td>${(crypto.volume / 1000000000).toFixed(2)}B</td>
                                            <td>
                                                <Link to={`/trade?symbol=${crypto.symbol}`} className="trade-btn">
                                                    Trade
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>

                <section className="price-chart">
                    <h2>BTC/USDT Price Chart</h2>
                    <div className="chart-container">
                        <Chart />
                    </div>
                </section>

                <section className="news-section">
                    <h2>Latest Crypto News</h2>
                    <div className="news-grid">
                        <div className="news-card">
                            <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55" alt="Crypto News" />
                            <div className="news-content">
                                <h3>Bitcoin Reaches New All-Time High</h3>
                                <p>Bitcoin has surged past $60,000 as institutional adoption continues to grow...</p>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                        <div className="news-card">
                            <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040" alt="Crypto News" />
                            <div className="news-content">
                                <h3>Ethereum 2.0 Upgrade Nears Completion</h3>
                                <p>The long-awaited Ethereum upgrade promises to reduce energy consumption by 99%...</p>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                        <div className="news-card">
                            <img src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05" alt="Crypto News" />
                            <div className="news-content">
                                <h3>Regulatory Changes in Crypto Space</h3>
                                <p>Governments worldwide are working on new regulations for cryptocurrency markets...</p>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features-section">
                    <h2>Why Choose Bee Crypto?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <i className="fas fa-shield-alt"></i>
                            <h3>Advanced Security</h3>
                            <p>Military-grade encryption and multi-factor authentication to protect your assets.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-tachometer-alt"></i>
                            <h3>Lightning Fast Trades</h3>
                            <p>Execute trades in milliseconds with our high-performance trading engine.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-percentage"></i>
                            <h3>Low Fees</h3>
                            <p>Competitive trading fees starting from just 0.1% with volume discounts.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-chart-pie"></i>
                            <h3>Portfolio Analysis</h3>
                            <p>AI-powered tools to analyze and optimize your cryptocurrency portfolio.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;