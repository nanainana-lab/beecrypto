import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Chart from './Chart';
import '../styles/animations.css';

const Trade = ({ user }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const defaultSymbol = queryParams.get('symbol') || 'BTC/USDT';

    const [tradeData, setTradeData] = useState({
        symbol: defaultSymbol,
        type: 'limit',
        side: 'buy',
        amount: '',
        price: '',
        total: '0.00',
    });

    const [orderHistory, setOrderHistory] = useState([]);
    const [openPositions, setOpenPositions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('chart');

    const cryptoPairs = [
        { symbol: 'BTC/USDT', base: 'Bitcoin', quote: 'Tether' },
        { symbol: 'ETH/USDT', base: 'Ethereum', quote: 'Tether' },
        { symbol: 'BNB/USDT', base: 'Binance Coin', quote: 'Tether' },
        { symbol: 'SOL/USDT', base: 'Solana', quote: 'Tether' },
        { symbol: 'ADA/USDT', base: 'Cardano', quote: 'Tether' },
        { symbol: 'XRP/USDT', base: 'XRP', quote: 'Tether' },
        { symbol: 'DOT/USDT', base: 'Polkadot', quote: 'Tether' },
        { symbol: 'DOGE/USDT', base: 'Dogecoin', quote: 'Tether' },
    ];

    useEffect(() => {
        // Calculate total when amount or price changes
        if (tradeData.amount && tradeData.price) {
            const total = parseFloat(tradeData.amount) * parseFloat(tradeData.price);
            setTradeData(prev => ({ ...prev, total: total.toFixed(2) }));
        } else {
            setTradeData(prev => ({ ...prev, total: '0.00' }));
        }
    }, [tradeData.amount, tradeData.price]);

    useEffect(() => {
        // Fetch order history and open positions (simulated)
        if (user) {
            setLoading(true);
            setTimeout(() => {
                setOrderHistory([
                    { id: 1, symbol: 'BTC/USDT', side: 'buy', type: 'limit', amount: 0.05, price: 48500, total: 2425, status: 'filled', date: '2023-05-15 10:23:45' },
                    { id: 2, symbol: 'ETH/USDT', side: 'sell', type: 'market', amount: 1.2, price: 2789.32, total: 3347.18, status: 'filled', date: '2023-05-14 15:42:12' },
                    { id: 3, symbol: 'SOL/USDT', side: 'buy', type: 'limit', amount: 5, price: 120.50, total: 602.50, status: 'canceled', date: '2023-05-13 09:15:33' },
                ]);

                setOpenPositions([
                    { id: 1, symbol: 'BTC/USDT', side: 'buy', amount: 0.05, entryPrice: 48500, currentPrice: 51234.56, pnl: '+137.17', pnlPercent: '+5.64%' },
                    { id: 2, symbol: 'ETH/USDT', side: 'buy', amount: 2.5, entryPrice: 2650.00, currentPrice: 2789.32, pnl: '+348.30', pnlPercent: '+5.26%' },
                ]);

                setLoading(false);
            }, 1000);
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTradeData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        if (!user) {
            alert('Please login to place orders');
            return;
        }

        // Simulate order placement
        setLoading(true);
        setTimeout(() => {
            alert(`Order placed successfully: ${tradeData.side.toUpperCase()} ${tradeData.amount} ${tradeData.symbol.split('/')[0]} at ${tradeData.price || 'market'} price`);
            setLoading(false);
            setTradeData(prev => ({ ...prev, amount: '', price: '', total: '0.00' }));
        }, 1000);
    };

    return (
        <div className="trade">
            <div className="trade-header">
                <h1>Trade Cryptocurrencies</h1>
                <p>Buy and sell digital assets with our advanced trading interface</p>
            </div>

            <div className="trade-container">
                <div className="trade-left">
                    <div className="pair-selector">
                        <select
                            value={tradeData.symbol}
                            onChange={(e) => setTradeData(prev => ({ ...prev, symbol: e.target.value }))}
                        >
                            {cryptoPairs.map(pair => (
                                <option key={pair.symbol} value={pair.symbol}>
                                    {pair.symbol} - {pair.base}/{pair.quote}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === 'chart' ? 'active' : ''}`}
                            onClick={() => setActiveTab('chart')}
                        >
                            Chart
                        </button>
                        <button
                            className={`tab ${activeTab === 'orderbook' ? 'active' : ''}`}
                            onClick={() => setActiveTab('orderbook')}
                        >
                            Order Book
                        </button>
                        <button
                            className={`tab ${activeTab === 'trades' ? 'active' : ''}`}
                            onClick={() => setActiveTab('trades')}
                        >
                            Recent Trades
                        </button>
                    </div>

                    <div className="chart-container">
                        {activeTab === 'chart' && <Chart />}
                        {activeTab === 'orderbook' && (
                            <div className="orderbook">
                                <h3>Order Book - {tradeData.symbol}</h3>
                                <div className="orderbook-content">
                                    <div className="bids">
                                        <h4>Bids (Buy Orders)</h4>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Price</th>
                                                    <th>Amount</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="positive">51,234.56</td>
                                                    <td>0.125</td>
                                                    <td>6,404.32</td>
                                                </tr>
                                                <tr>
                                                    <td className="positive">51,230.12</td>
                                                    <td>0.342</td>
                                                    <td>17,520.70</td>
                                                </tr>
                                                <tr>
                                                    <td className="positive">51,225.89</td>
                                                    <td>0.210</td>
                                                    <td>10,757.44</td>
                                                </tr>
                                                <tr>
                                                    <td className="positive">51,220.00</td>
                                                    <td>0.500</td>
                                                    <td>25,610.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="positive">51,215.45</td>
                                                    <td>1.200</td>
                                                    <td>61,458.54</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="asks">
                                        <h4>Asks (Sell Orders)</h4>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Price</th>
                                                    <th>Amount</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="negative">51,235.78</td>
                                                    <td>0.087</td>
                                                    <td>4,457.51</td>
                                                </tr>
                                                <tr>
                                                    <td className="negative">51,240.12</td>
                                                    <td>0.154</td>
                                                    <td>7,890.98</td>
                                                </tr>
                                                <tr>
                                                    <td className="negative">51,245.67</td>
                                                    <td>0.230</td>
                                                    <td>11,786.50</td>
                                                </tr>
                                                <tr>
                                                    <td className="negative">51,250.00</td>
                                                    <td>0.420</td>
                                                    <td>21,525.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="negative">51,255.89</td>
                                                    <td>0.750</td>
                                                    <td>38,441.92</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'trades' && (
                            <div className="recent-trades">
                                <h3>Recent Trades - {tradeData.symbol}</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="positive">51,234.56</td>
                                            <td>0.025</td>
                                            <td>10:23:45</td>
                                        </tr>
                                        <tr>
                                            <td className="positive">51,234.50</td>
                                            <td>0.120</td>
                                            <td>10:23:42</td>
                                        </tr>
                                        <tr>
                                            <td className="negative">51,235.78</td>
                                            <td>0.087</td>
                                            <td>10:23:38</td>
                                        </tr>
                                        <tr>
                                            <td className="positive">51,234.00</td>
                                            <td>0.250</td>
                                            <td>10:23:35</td>
                                        </tr>
                                        <tr>
                                            <td className="negative">51,235.00</td>
                                            <td>0.180</td>
                                            <td>10:23:30</td>
                                        </tr>
                                        <tr>
                                            <td className="positive">51,233.45</td>
                                            <td>0.075</td>
                                            <td>10:23:25</td>
                                        </tr>
                                        <tr>
                                            <td className="negative">51,236.12</td>
                                            <td>0.320</td>
                                            <td>10:23:20</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                <div className="trade-right">
                    <form className="order-form" onSubmit={handleSubmitOrder}>
                        <div className="form-header">
                            <h3>New Order</h3>
                            <div className="order-types">
                                <button
                                    type="button"
                                    className={`order-type ${tradeData.type === 'limit' ? 'active' : ''}`}
                                    onClick={() => setTradeData(prev => ({ ...prev, type: 'limit' }))}
                                >
                                    Limit
                                </button>
                                <button
                                    type="button"
                                    className={`order-type ${tradeData.type === 'market' ? 'active' : ''}`}
                                    onClick={() => setTradeData(prev => ({ ...prev, type: 'market', price: '' }))}
                                >
                                    Market
                                </button>
                                <button
                                    type="button"
                                    className={`order-type ${tradeData.type === 'stop' ? 'active' : ''}`}
                                    onClick={() => setTradeData(prev => ({ ...prev, type: 'stop' }))}
                                >
                                    Stop
                                </button>
                            </div>
                        </div>

                        <div className="order-sides">
                            <button
                                type="button"
                                className={`order-side buy ${tradeData.side === 'buy' ? 'active' : ''}`}
                                onClick={() => setTradeData(prev => ({ ...prev, side: 'buy' }))}
                            >
                                Buy
                            </button>
                            <button
                                type="button"
                                className={`order-side sell ${tradeData.side === 'sell' ? 'active' : ''}`}
                                onClick={() => setTradeData(prev => ({ ...prev, side: 'sell' }))}
                            >
                                Sell
                            </button>
                        </div>

                        <div className="form-group">
                            <label htmlFor="amount">Amount ({tradeData.symbol.split('/')[0]})</label>
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                value={tradeData.amount}
                                onChange={handleInputChange}
                                placeholder="0.00"
                                step="any"
                                required
                            />
                        </div>

                        {tradeData.type !== 'market' && (
                            <div className="form-group">
                                <label htmlFor="price">Price ({tradeData.symbol.split('/')[1]})</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={tradeData.price}
                                    onChange={handleInputChange}
                                    placeholder="0.00"
                                    step="any"
                                    required={tradeData.type !== 'market'}
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label>Total ({tradeData.symbol.split('/')[1]})</label>
                            <div className="total-display">{tradeData.total}</div>
                        </div>

                        <button type="submit" className="submit-order" disabled={loading}>
                            {loading ? (
                                <i className="fas fa-spinner fa-spin"></i>
                            ) : (
                                `${tradeData.side.toUpperCase()} ${tradeData.symbol.split('/')[0]}`
                            )}
                        </button>
                    </form>

                    {user && (
                        <div className="balance-info">
                            <h3>Available Balance</h3>
                            <ul>
                                <li>BTC: 0.1254</li>
                                <li>ETH: 2.5678</li>
                                <li>USDT: 1,245.67</li>
                                <li>BNB: 5.4321</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {user && (
                <div className="trade-history">
                    <div className="history-tabs">
                        <button
                            className={`tab ${activeTab === 'open' ? 'active' : ''}`}
                            onClick={() => setActiveTab('open')}
                        >
                            Open Positions
                        </button>
                        <button
                            className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
                            onClick={() => setActiveTab('orders')}
                        >
                            Order History
                        </button>
                    </div>

                    {activeTab === 'open' ? (
                        <div className="positions-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Symbol</th>
                                        <th>Side</th>
                                        <th>Amount</th>
                                        <th>Entry Price</th>
                                        <th>Current Price</th>
                                        <th>PNL</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {openPositions.map(position => (
                                        <tr key={position.id}>
                                            <td>{position.symbol}</td>
                                            <td className={position.side === 'buy' ? 'positive' : 'negative'}>{position.side}</td>
                                            <td>{position.amount}</td>
                                            <td>{position.entryPrice.toLocaleString()}</td>
                                            <td>{position.currentPrice.toLocaleString()}</td>
                                            <td className={position.pnl.startsWith('+') ? 'positive' : 'negative'}>
                                                {position.pnl} ({position.pnlPercent})
                                            </td>
                                            <td>
                                                <button className="close-btn">Close</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="orders-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Symbol</th>
                                        <th>Side</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderHistory.map(order => (
                                        <tr key={order.id}>
                                            <td>{order.symbol}</td>
                                            <td className={order.side === 'buy' ? 'positive' : 'negative'}>{order.side}</td>
                                            <td>{order.type}</td>
                                            <td>{order.amount}</td>
                                            <td>{order.price.toLocaleString()}</td>
                                            <td>{order.total.toLocaleString()}</td>
                                            <td className={`status ${order.status}`}>{order.status}</td>
                                            <td>{order.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}

            <div className="trading-tips">
                <h3>Trading Tips</h3>
                <div className="tips-content">
                    <div className="tip-card">
                        <i className="fas fa-chart-line"></i>
                        <h4>Use Stop-Loss Orders</h4>
                        <p>Always set stop-loss orders to limit potential losses in volatile markets.</p>
                    </div>
                    <div className="tip-card">
                        <i className="fas fa-dollar-sign"></i>
                        <h4>Diversify Your Portfolio</h4>
                        <p>Don't put all your funds into a single asset. Spread your investments.</p>
                    </div>
                    <div className="tip-card">
                        <i className="fas fa-book"></i>
                        <h4>Do Your Research</h4>
                        <p>Understand the projects you're investing in before committing funds.</p>
                    </div>
                    <div className="tip-card">
                        <i className="fas fa-brain"></i>
                        <h4>Control Emotions</h4>
                        <p>Stick to your trading plan and avoid making decisions based on fear or greed.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trade;