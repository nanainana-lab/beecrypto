import React, { useState } from 'react';
import '../styles/animations.css';

const Calculator = () => {
    const [activeTab, setActiveTab] = useState('profit');
    const [profitData, setProfitData] = useState({
        buyPrice: '',
        sellPrice: '',
        investment: '',
        profit: '',
        roi: '',
    });
    const [conversionData, setConversionData] = useState({
        amount: '',
        fromCurrency: 'BTC',
        toCurrency: 'USD',
        convertedAmount: '',
    });
    const [miningData, setMiningData] = useState({
        hashRate: '',
        powerConsumption: '',
        electricityCost: '',
        poolFee: '',
        reward: '',
        dailyProfit: '',
    });

    const cryptoCurrencies = [
        { symbol: 'BTC', name: 'Bitcoin' },
        { symbol: 'ETH', name: 'Ethereum' },
        { symbol: 'BNB', name: 'Binance Coin' },
        { symbol: 'SOL', name: 'Solana' },
        { symbol: 'ADA', name: 'Cardano' },
        { symbol: 'XRP', name: 'XRP' },
        { symbol: 'DOGE', name: 'Dogecoin' },
        { symbol: 'DOT', name: 'Polkadot' },
        { symbol: 'USDT', name: 'Tether' },
        { symbol: 'USD', name: 'US Dollar' },
        { symbol: 'EUR', name: 'Euro' },
    ];

    const calculateProfit = () => {
        const { buyPrice, sellPrice, investment } = profitData;
        if (buyPrice && sellPrice && investment) {
            const buyPriceNum = parseFloat(buyPrice);
            const sellPriceNum = parseFloat(sellPrice);
            const investmentNum = parseFloat(investment);

            const amount = investmentNum / buyPriceNum;
            const profit = (sellPriceNum - buyPriceNum) * amount;
            const roi = (profit / investmentNum) * 100;

            setProfitData(prev => ({
                ...prev,
                profit: profit.toFixed(2),
                roi: roi.toFixed(2),
            }));
        }
    };

    const calculateConversion = () => {
        const { amount, fromCurrency, toCurrency } = conversionData;
        if (amount && fromCurrency && toCurrency) {
            // This would normally come from an API
            const exchangeRates = {
                BTC: { USD: 51234.56, EUR: 47289.34, ETH: 18.37, BNB: 148.25 },
                ETH: { USD: 2789.32, EUR: 2574.56, BTC: 0.054, BNB: 8.07 },
                BNB: { USD: 345.67, EUR: 319.23, BTC: 0.0067, ETH: 0.124 },
                USD: { BTC: 0.0000195, ETH: 0.000358, BNB: 0.00289, EUR: 0.923 },
                EUR: { BTC: 0.0000211, ETH: 0.000388, BNB: 0.00313, USD: 1.083 },
            };

            const amountNum = parseFloat(amount);
            let convertedAmount;

            if (fromCurrency === toCurrency) {
                convertedAmount = amountNum;
            } else if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
                convertedAmount = amountNum * exchangeRates[fromCurrency][toCurrency];
            } else if (exchangeRates[toCurrency] && exchangeRates[toCurrency][fromCurrency]) {
                convertedAmount = amountNum / exchangeRates[toCurrency][fromCurrency];
            } else {
                convertedAmount = 0;
            }

            setConversionData(prev => ({
                ...prev,
                convertedAmount: convertedAmount.toFixed(8),
            }));
        }
    };

    const calculateMining = () => {
        const { hashRate, powerConsumption, electricityCost, poolFee, reward } = miningData;
        if (hashRate && powerConsumption && electricityCost && poolFee && reward) {
            const hashRateNum = parseFloat(hashRate);
            const powerNum = parseFloat(powerConsumption);
            const electricityNum = parseFloat(electricityCost);
            const poolFeeNum = parseFloat(poolFee);
            const rewardNum = parseFloat(reward);

            // Simplified mining calculation (would normally use network difficulty)
            const dailyReward = (hashRateNum * rewardNum * 86400) / (1e12 * 600);
            const dailyPoolFee = dailyReward * (poolFeeNum / 100);
            const dailyElectricityCost = (powerNum * 24 * electricityNum) / 1000;
            const dailyProfit = dailyReward - dailyPoolFee - dailyElectricityCost;

            setMiningData(prev => ({
                ...prev,
                dailyProfit: dailyProfit.toFixed(8),
            }));
        }
    };

    const handleProfitChange = (e) => {
        const { name, value } = e.target;
        setProfitData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleConversionChange = (e) => {
        const { name, value } = e.target;
        setConversionData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleMiningChange = (e) => {
        const { name, value } = e.target;
        setMiningData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="calculator">
            <div className="calculator-header">
                <h1>Crypto Calculators</h1>
                <p>Essential tools for cryptocurrency traders and investors</p>
            </div>

            <div className="calculator-tabs">
                <button
                    className={`tab ${activeTab === 'profit' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profit')}
                >
                    Profit Calculator
                </button>
                <button
                    className={`tab ${activeTab === 'conversion' ? 'active' : ''}`}
                    onClick={() => setActiveTab('conversion')}
                >
                    Currency Converter
                </button>
                <button
                    className={`tab ${activeTab === 'mining' ? 'active' : ''}`}
                    onClick={() => setActiveTab('mining')}
                >
                    Mining Calculator
                </button>
            </div>

            {activeTab === 'profit' && (
                <div className="profit-calculator">
                    <div className="calculator-form">
                        <div className="form-group">
                            <label htmlFor="buyPrice">Buy Price (USD)</label>
                            <input
                                type="number"
                                id="buyPrice"
                                name="buyPrice"
                                value={profitData.buyPrice}
                                onChange={handleProfitChange}
                                placeholder="0.00"
                                step="any"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="sellPrice">Sell Price (USD)</label>
                            <input
                                type="number"
                                id="sellPrice"
                                name="sellPrice"
                                value={profitData.sellPrice}
                                onChange={handleProfitChange}
                                placeholder="0.00"
                                step="any"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="investment">Investment Amount (USD)</label>
                            <input
                                type="number"
                                id="investment"
                                name="investment"
                                value={profitData.investment}
                                onChange={handleProfitChange}
                                placeholder="0.00"
                                step="any"
                            />
                        </div>

                        <button className="calculate-btn" onClick={calculateProfit}>
                            Calculate Profit
                        </button>
                    </div>

                    <div className="calculator-results">
                        <h3>Profit/Loss Results</h3>
                        <div className="result-card">
                            <label>Profit/Loss (USD)</label>
                            <p className={profitData.profit >= 0 ? 'positive' : 'negative'}>
                                {profitData.profit ? `$${profitData.profit}` : '-'}
                            </p>
                        </div>
                        <div className="result-card">
                            <label>Return on Investment (ROI)</label>
                            <p className={profitData.roi >= 0 ? 'positive' : 'negative'}>
                                {profitData.roi ? `${profitData.roi}%` : '-'}
                            </p>
                        </div>
                    </div>

                    <div className="calculator-info">
                        <h3>How to Use the Profit Calculator</h3>
                        <p>
                            The profit calculator helps you determine the potential profit or loss from your cryptocurrency investments.
                            Simply enter the price at which you bought the cryptocurrency, the price at which you plan to sell it,
                            and the amount you invested. The calculator will then compute your potential profit or loss in both
                            absolute terms (USD) and as a percentage return on investment (ROI).
                        </p>
                        <p>
                            This tool is particularly useful for planning your exit strategies and setting profit targets or
                            stop-loss levels. Remember to account for trading fees and taxes when calculating your actual returns.
                        </p>
                    </div>
                </div>
            )}

            {activeTab === 'conversion' && (
                <div className="conversion-calculator">
                    <div className="calculator-form">
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                value={conversionData.amount}
                                onChange={handleConversionChange}
                                placeholder="0.00"
                                step="any"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fromCurrency">From</label>
                            <select
                                id="fromCurrency"
                                name="fromCurrency"
                                value={conversionData.fromCurrency}
                                onChange={handleConversionChange}
                            >
                                {cryptoCurrencies.map(currency => (
                                    <option key={`from-${currency.symbol}`} value={currency.symbol}>
                                        {currency.name} ({currency.symbol})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="toCurrency">To</label>
                            <select
                                id="toCurrency"
                                name="toCurrency"
                                value={conversionData.toCurrency}
                                onChange={handleConversionChange}
                            >
                                {cryptoCurrencies.map(currency => (
                                    <option key={`to-${currency.symbol}`} value={currency.symbol}>
                                        {currency.name} ({currency.symbol})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button className="calculate-btn" onClick={calculateConversion}>
                            Convert
                        </button>
                    </div>

                    <div className="calculator-results">
                        <h3>Conversion Result</h3>
                        <div className="result-card">
                            <p className="conversion-result">
                                {conversionData.amount || '0'} {conversionData.fromCurrency} =
                            </p>
                            <p className="conversion-amount">
                                {conversionData.convertedAmount || '0'} {conversionData.toCurrency}
                            </p>
                        </div>
                    </div>

                    <div className="calculator-info">
                        <h3>Currency Conversion Explained</h3>
                        <p>
                            The cryptocurrency converter allows you to quickly convert between different cryptocurrencies
                            and fiat currencies. This tool uses current market rates (updated periodically) to provide
                            approximate conversion values. For the most accurate, real-time rates, check our market data.
                        </p>
                        <p>
                            Conversions between cryptocurrencies are particularly useful when evaluating altcoin investments
                            in terms of Bitcoin or Ethereum, which are common trading pairs. The converter also helps
                            understand the fiat value of your crypto holdings.
                        </p>
                    </div>
                </div>
            )}

            {activeTab === 'mining' && (
                <div className="mining-calculator">
                    <div className="calculator-form">
                        <div className="form-group">
                            <label htmlFor="hashRate">Hash Rate (MH/s)</label>
                            <input
                                type="number"
                                id="hashRate"
                                name="hashRate"
                                value={miningData.hashRate}
                                onChange={handleMiningChange}
                                placeholder="0"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="powerConsumption">Power Consumption (W)</label>
                            <input
                                type="number"
                                id="powerConsumption"
                                name="powerConsumption"
                                value={miningData.powerConsumption}
                                onChange={handleMiningChange}
                                placeholder="0"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="electricityCost">Electricity Cost ($/kWh)</label>
                            <input
                                type="number"
                                id="electricityCost"
                                name="electricityCost"
                                value={miningData.electricityCost}
                                onChange={handleMiningChange}
                                placeholder="0.00"
                                step="any"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="poolFee">Pool Fee (%)</label>
                            <input
                                type="number"
                                id="poolFee"
                                name="poolFee"
                                value={miningData.poolFee}
                                onChange={handleMiningChange}
                                placeholder="0.00"
                                step="any"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="reward">Block Reward (coins)</label>
                            <input
                                type="number"
                                id="reward"
                                name="reward"
                                value={miningData.reward}
                                onChange={handleMiningChange}
                                placeholder="0.00"
                                step="any"
                            />
                        </div>

                        <button className="calculate-btn" onClick={calculateMining}>
                            Calculate Mining Profit
                        </button>
                    </div>

                    <div className="calculator-results">
                        <h3>Mining Profitability</h3>
                        <div className="result-card">
                            <label>Estimated Daily Profit</label>
                            <p className={miningData.dailyProfit >= 0 ? 'positive' : 'negative'}>
                                {miningData.dailyProfit || '0'} coins
                            </p>
                        </div>
                    </div>

                    <div className="calculator-info">
                        <h3>Understanding Mining Profitability</h3>
                        <p>
                            The mining calculator estimates your potential earnings from cryptocurrency mining based on
                            your hardware's hash rate and power consumption, along with current network conditions.
                            Remember that mining profitability depends on several factors including network difficulty,
                            block reward, and cryptocurrency price - all of which can change frequently.
                        </p>
                        <p>
                            This calculator provides a simplified estimate. For more accurate results, consider using
                            mining profitability calculators specific to each cryptocurrency that take into account
                            current network difficulty and other real-time parameters.
                        </p>
                        <p>
                            Mining can be energy-intensive. Always consider the environmental impact and ensure mining
                            is legal in your jurisdiction before investing in equipment.
                        </p>
                    </div>
                </div>
            )}

            <div className="calculator-tips">
                <h3>Calculator Tips & Best Practices</h3>
                <div className="tips-grid">
                    <div className="tip-card">
                        <i className="fas fa-percentage"></i>
                        <h4>Understand ROI</h4>
                        <p>Return on Investment (ROI) measures performance relative to investment cost. Higher ROI means better returns.</p>
                    </div>
                    <div className="tip-card">
                        <i className="fas fa-exchange-alt"></i>
                        <h4>Watch Exchange Rates</h4>
                        <p>Crypto prices fluctuate constantly. For accurate conversions, use real-time market data.</p>
                    </div>
                    <div className="tip-card">
                        <i className="fas fa-bolt"></i>
                        <h4>Mining Costs</h4>
                        <p>Electricity costs and hardware efficiency are crucial factors in mining profitability.</p>
                    </div>
                    <div className="tip-card">
                        <i className="fas fa-fee"></i>
                        <h4>Account for Fees</h4>
                        <p>Remember to include trading, withdrawal, and network fees in your calculations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;