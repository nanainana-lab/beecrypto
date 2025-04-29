import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/animations.css';

const Market = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'marketCap', direction: 'desc' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulating API call with more extensive mock data
                const mockData = [
                    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 51234.56, change24h: 2.34, marketCap: 980000000000, volume: 28000000000, image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
                    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 2789.32, change24h: -1.23, marketCap: 330000000000, volume: 15000000000, image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
                    { id: 'binancecoin', name: 'Binance Coin', symbol: 'BNB', price: 345.67, change24h: 0.56, marketCap: 56000000000, volume: 2000000000, image: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
                    { id: 'solana', name: 'Solana', symbol: 'SOL', price: 123.45, change24h: 5.67, marketCap: 42000000000, volume: 1800000000, image: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
                    { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 0.56, change24h: -0.78, marketCap: 19000000000, volume: 800000000, image: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
                    { id: 'ripple', name: 'XRP', symbol: 'XRP', price: 0.52, change24h: 1.23, marketCap: 25000000000, volume: 2200000000, image: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
                    { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', price: 6.78, change24h: -2.34, marketCap: 6800000000, volume: 350000000, image: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png' },
                    { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', price: 0.12, change24h: 10.45, marketCap: 16000000000, volume: 1200000000, image: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
                    { id: 'avalanche', name: 'Avalanche', symbol: 'AVAX', price: 23.45, change24h: 3.21, marketCap: 5800000000, volume: 420000000, image: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
                    { id: 'litecoin', name: 'Litecoin', symbol: 'LTC', price: 78.90, change24h: -0.45, marketCap: 5500000000, volume: 380000000, image: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png' },
                    { id: 'chainlink', name: 'Chainlink', symbol: 'LINK', price: 14.56, change24h: 1.78, marketCap: 6800000000, volume: 450000000, image: 'https://cryptologos.cc/logos/chainlink-link-logo.png' },
                    { id: 'uniswap', name: 'Uniswap', symbol: 'UNI', price: 5.67, change24h: -1.23, marketCap: 3400000000, volume: 120000000, image: 'https://cryptologos.cc/logos/uniswap-uni-logo.png' },
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

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = [...cryptoData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const filteredData = sortedData.filter((crypto) =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="market">
            <div className="market-header">
                <h1>Cryptocurrency Market</h1>
                <p>Real-time prices, market caps, and trading volumes for thousands of cryptocurrencies</p>

                <div className="market-controls">
                    <div className="search-box">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            placeholder="Search cryptocurrencies..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="market-content">
                {loading ? (
                    <div className="loading-spinner">
                        <i className="fas fa-spinner fa-spin"></i>
                    </div>
                ) : (
                    <div className="crypto-table">
                        <table>
                            <thead>
                                <tr>
                                    <th onClick={() => handleSort('name')}>
                                        Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th onClick={() => handleSort('price')}>
                                        Price {sortConfig.key === 'price' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th onClick={() => handleSort('change24h')}>
                                        24h % {sortConfig.key === 'change24h' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th onClick={() => handleSort('marketCap')}>
                                        Market Cap {sortConfig.key === 'marketCap' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th onClick={() => handleSort('volume')}>
                                        Volume(24h) {sortConfig.key === 'volume' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((crypto) => (
                                    <tr key={crypto.id}>
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
            </div>

            <div className="market-info">
                <div className="info-card">
                    <h3>Total Market Cap</h3>
                    <p>$1.28T <span className="positive">+2.34%</span></p>
                </div>
                <div className="info-card">
                    <h3>24h Volume</h3>
                    <p>$58.23B <span className="positive">+5.67%</span></p>
                </div>
                <div className="info-card">
                    <h3>BTC Dominance</h3>
                    <p>42.56% <span className="negative">-0.78%</span></p>
                </div>
                <div className="info-card">
                    <h3>ETH Dominance</h3>
                    <p>18.23% <span className="positive">+1.23%</span></p>
                </div>
            </div>

            <div className="market-education">
                <h2>Cryptocurrency Market Basics</h2>
                <div className="education-content">
                    <p>
                        The cryptocurrency market is a decentralized digital currency network that operates without a central authority.
                        Unlike traditional financial systems, cryptocurrencies use blockchain technology to gain transparency,
                        immutability, and decentralization. The market operates 24/7, allowing continuous trading across different
                        time zones and geographical locations.
                    </p>
                    <p>
                        Market capitalization (market cap) is calculated by multiplying the current price of a cryptocurrency by its
                        circulating supply. This metric helps investors understand the relative size of different cryptocurrencies.
                        Trading volume represents the total amount of a cryptocurrency that has been traded in the last 24 hours,
                        indicating the liquidity and activity level of a particular asset.
                    </p>
                    <p>
                        Price volatility is a common characteristic of cryptocurrency markets, with prices often experiencing
                        significant fluctuations within short periods. This volatility presents both opportunities and risks for
                        traders and investors. Understanding market trends, technical analysis, and fundamental factors can help
                        market participants make more informed decisions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Market;