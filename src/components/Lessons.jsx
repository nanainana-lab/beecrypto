import React, { useState } from 'react';
import '../styles/animations.css';

const Lessons = () => {
    const [activeCategory, setActiveCategory] = useState('beginner');
    const [expandedLesson, setExpandedLesson] = useState(null);

    const categories = [
        { id: 'beginner', name: 'Beginner' },
        { id: 'intermediate', name: 'Intermediate' },
        { id: 'advanced', name: 'Advanced' },
        { id: 'trading', name: 'Trading' },
        { id: 'security', name: 'Security' },
    ];

    const lessons = {
        beginner: [
            {
                id: 1,
                title: 'What is Cryptocurrency?',
                content: 'Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional currencies issued by governments (fiat currencies), cryptocurrencies operate on decentralized networks based on blockchain technology. The first and most well-known cryptocurrency is Bitcoin, created in 2009 by an anonymous person or group known as Satoshi Nakamoto. Cryptocurrencies are not controlled by any central authority, making them theoretically immune to government interference or manipulation. They enable secure online payments without the use of third-party intermediaries like banks. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.',
                duration: '10 min',
                level: 'Beginner',
            },
            {
                id: 2,
                title: 'Understanding Blockchain Technology',
                content: 'Blockchain is the underlying technology that powers cryptocurrencies. It is a decentralized, distributed ledger that records transactions across many computers in such a way that the registered transactions cannot be altered retroactively. Each block in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant\'s ledger. This decentralized database managed by multiple participants is known as Distributed Ledger Technology (DLT). Blockchain technology offers several key features: decentralization (no single point of control), immutability (records cannot be changed), transparency (all transactions are visible to all participants), and security (through cryptographic techniques). These features make blockchain suitable for applications beyond cryptocurrencies, including supply chain management, healthcare records, and voting systems.',
                duration: '15 min',
                level: 'Beginner',
            },
            {
                id: 3,
                title: 'How to Buy Your First Cryptocurrency',
                content: 'Buying your first cryptocurrency can seem daunting, but the process is straightforward once you understand the steps. First, you\'ll need to choose a cryptocurrency exchange. Popular options include Coinbase, Binance, and Kraken. These platforms allow you to buy cryptocurrencies using traditional fiat money. After selecting an exchange, you\'ll need to create an account and verify your identity (a process known as KYC - Know Your Customer). Once your account is set up, you can deposit funds via bank transfer, credit card, or other payment methods. With funds in your account, you can then place an order to buy your chosen cryptocurrency. It\'s recommended to start with well-established coins like Bitcoin or Ethereum before exploring altcoins. After purchasing, consider transferring your crypto to a personal wallet for added security rather than leaving it on the exchange.',
                duration: '12 min',
                level: 'Beginner',
            },
            {
                id: 4,
                title: 'Cryptocurrency Wallets Explained',
                content: 'A cryptocurrency wallet is a digital tool that allows you to store, send, and receive digital currencies. Unlike traditional wallets, crypto wallets don\'t actually store currency; they store cryptographic keys (private and public keys) that prove ownership and enable transactions on the blockchain. There are several types of wallets: Software wallets (desktop, mobile, or online), hardware wallets (physical devices), and paper wallets (printed QR codes). Hot wallets are connected to the internet and convenient for frequent transactions, while cold wallets are offline and more secure for long-term storage. When choosing a wallet, consider factors like security, convenience, supported cryptocurrencies, and backup options. Always remember to keep your private keys secure and never share them with anyone, as they provide full access to your funds.',
                duration: '14 min',
                level: 'Beginner',
            },
            {
                id: 5,
                title: 'Common Cryptocurrency Terms You Should Know',
                content: 'The cryptocurrency space has its own unique terminology. Here are some essential terms: Altcoin - Any cryptocurrency other than Bitcoin. Fiat - Government-issued currency like USD or EUR. FOMO - Fear Of Missing Out, buying due to price increases. FUD - Fear, Uncertainty, Doubt, negative sentiment. HODL - Originally a typo for "hold," now means long-term holding. ICO - Initial Coin Offering, a crowdfunding method. Market Cap - Total value of a cryptocurrency (price x circulating supply). Node - A computer that maintains the blockchain network. Satoshi - The smallest unit of Bitcoin (0.00000001 BTC). Smart Contract - Self-executing contracts with terms in code. Understanding these terms will help you navigate the crypto space more effectively and communicate with other community members.',
                duration: '8 min',
                level: 'Beginner',
            },
        ],
        intermediate: [
            {
                id: 6,
                title: 'Technical Analysis Basics',
                content: 'Technical analysis is a method of evaluating cryptocurrencies by analyzing statistics generated by market activity, such as past prices and volume. Unlike fundamental analysis, which looks at a coin\'s intrinsic value, technical analysis focuses on patterns in price movements and trading signals. Key concepts include support and resistance levels (price points where buying or selling pressure is expected to emerge), trend lines (showing the general direction of price movement), and indicators like moving averages, RSI (Relative Strength Index), and MACD (Moving Average Convergence Divergence). Chart patterns such as head and shoulders, triangles, and flags can signal potential price movements. While technical analysis can be a powerful tool, it\'s important to remember that it\'s not foolproof and should be used in conjunction with other analysis methods and risk management strategies.',
                duration: '20 min',
                level: 'Intermediate',
            },
            {
                id: 7,
                title: 'Fundamental Analysis for Crypto',
                content: 'Fundamental analysis in cryptocurrency involves evaluating a coin or token based on its underlying technology, use case, development team, community support, and other qualitative and quantitative factors. Key metrics include: Market capitalization (total value), circulating supply (coins currently available), max supply (maximum coins that will ever exist), trading volume (liquidity indicator), and network metrics like active addresses and transaction count. For blockchain projects, examine the whitepaper, roadmap, partnerships, and technological innovations. Compare the project to competitors and assess tokenomics (how the token functions within the ecosystem). Fundamental analysis helps identify undervalued projects with strong long-term potential, though it requires more research than technical analysis and may not predict short-term price movements.',
                duration: '25 min',
                level: 'Intermediate',
            },
            {
                id: 8,
                title: 'Diversifying Your Crypto Portfolio',
                content: 'Diversification is a risk management strategy that involves spreading investments across different cryptocurrencies to reduce exposure to any single asset. A well-diversified crypto portfolio might include: Large-cap coins (Bitcoin, Ethereum) for stability, mid-cap coins with growth potential, and small-cap coins for higher risk/reward. Consider diversifying across different sectors like smart contract platforms, DeFi (Decentralized Finance), NFTs, privacy coins, and storage solutions. Allocation percentages depend on your risk tolerance - conservative investors might allocate 70% to Bitcoin and Ethereum, while more aggressive investors might allocate more to altcoins. Rebalance periodically to maintain target allocations. Remember that while diversification can reduce risk, the crypto market often moves together, especially during major bull or bear markets, so correlation between assets should be considered.',
                duration: '18 min',
                level: 'Intermediate',
            },
            {
                id: 9,
                title: 'Understanding Market Cycles',
                content: 'Cryptocurrency markets move in cycles that typically include four phases: Accumulation (smart money buys at low prices after a downturn), markup (prices rise steadily as more investors enter), distribution (smart money sells at high prices), and markdown (prices fall as selling pressure increases). These cycles are influenced by factors like Bitcoin halving events (which reduce new supply), macroeconomic conditions, regulatory developments, and technological advancements. The crypto market has historically followed a 4-year cycle roughly aligned with Bitcoin halvings. Recognizing where we are in the cycle can inform investment decisions, though timing the market perfectly is extremely difficult. Common psychological patterns include extreme optimism at market tops and extreme pessimism at bottoms. Understanding these cycles can help maintain emotional discipline and avoid common pitfalls like buying high and selling low.',
                duration: '22 min',
                level: 'Intermediate',
            },
            {
                id: 10,
                title: 'Staking and Passive Income',
                content: 'Staking is the process of actively participating in transaction validation on a proof-of-stake (PoS) blockchain by locking up cryptocurrency holdings. In return, stakers earn rewards, similar to interest. To stake, you typically need to hold a minimum amount of the native token and either run a validator node or delegate your tokens to an existing validator. Rewards vary by network but often range from 5-20% annually. Staking provides passive income while helping secure the network. Risks include slashing (penalties for validator misbehavior), lock-up periods, and price volatility. Popular staking coins include Ethereum (after its transition to PoS), Cardano, Solana, and Polkadot. Some exchanges offer simplified staking services, though these often provide lower returns than running your own node. Staking is generally more energy-efficient than proof-of-work mining.',
                duration: '16 min',
                level: 'Intermediate',
            },
        ],
        advanced: [
            {
                id: 11,
                title: 'DeFi Deep Dive',
                content: 'Decentralized Finance (DeFi) refers to financial applications built on blockchain networks, primarily Ethereum, that aim to recreate traditional financial systems (lending, borrowing, trading) without intermediaries. Key DeFi components include: DEXs (Decentralized Exchanges like Uniswap that enable peer-to-peer trading), lending platforms (Aave, Compound that allow users to earn interest on deposits or borrow assets), yield farming (strategies to maximize returns by moving funds between protocols), and stablecoins (cryptocurrencies pegged to stable assets like the US dollar). DeFi offers advantages like permissionless access, transparency, and composability (ability to combine different protocols), but also carries risks like smart contract vulnerabilities, impermanent loss in liquidity pools, and regulatory uncertainty. The total value locked (TVL) in DeFi protocols is a key metric for measuring ecosystem growth. Understanding DeFi requires familiarity with concepts like gas fees, liquidity mining, and governance tokens.',
                duration: '30 min',
                level: 'Advanced',
            },
            {
                id: 12,
                title: 'Smart Contract Development',
                content: 'Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically execute when predetermined conditions are met, without needing intermediaries. Most smart contracts are written in Solidity (for Ethereum) or Rust (for Solana). Development involves writing the contract code, testing it thoroughly (as deployed contracts are immutable), and deploying it to the blockchain. Key concepts include: gas (the fee required to execute operations), EVM (Ethereum Virtual Machine that executes contracts), and oracles (services that provide external data to contracts). Popular development frameworks include Hardhat and Truffle. Smart contracts enable complex applications like decentralized autonomous organizations (DAOs), NFT marketplaces, and DeFi protocols. However, they\'re vulnerable to bugs and exploits, so security best practices like formal verification and audits are essential. Learning smart contract development opens opportunities in the rapidly growing blockchain development field.',
                duration: '35 min',
                level: 'Advanced',
            },
            {
                id: 13,
                title: 'Layer 2 Scaling Solutions',
                content: 'Layer 2 solutions are protocols built on top of base blockchains (Layer 1) like Ethereum to improve scalability and reduce transaction fees. They process transactions off the main chain while still benefiting from its security. Major types include: Rollups (bundling multiple transactions into one - either Optimistic which assumes validity or ZK which provides cryptographic proof), state channels (off-chain transactions between parties), sidechains (independent blockchains with their own consensus mechanisms), and plasma (child chains anchored to the main chain). Popular implementations include Optimism, Arbitrum (optimistic rollups), zkSync, StarkNet (ZK rollups), and Polygon (which offers multiple solutions). Layer 2 solutions can reduce fees by 10-100x while increasing throughput significantly. However, they introduce new complexities like withdrawal delays (for optimistic rollups) and sometimes reduced decentralization. The ecosystem is rapidly evolving as projects work to solve the blockchain trilemma of scalability, security, and decentralization.',
                duration: '28 min',
                level: 'Advanced',
            },
            {
                id: 14,
                title: 'Advanced Trading Strategies',
                content: 'Sophisticated crypto traders employ various strategies to capitalize on market movements. These include: Arbitrage (exploiting price differences across exchanges), algorithmic trading (using bots to execute predefined strategies), futures and options trading (derivatives that allow betting on price movements with leverage), and market making (providing liquidity to earn spreads). More complex strategies involve pairs trading (simultaneously buying and selling correlated assets), mean reversion (betting prices will return to historical averages), and momentum trading (following strong trends). Successful trading requires understanding order types (limit, stop-loss, etc.), technical indicators, and risk management techniques like position sizing. Backtesting strategies on historical data is essential before deploying capital. While advanced strategies can be profitable, they also carry higher risks, especially when using leverage, and require significant time commitment and market knowledge.',
                duration: '32 min',
                level: 'Advanced',
            },
            {
                id: 15,
                title: 'On-Chain Analytics',
                content: 'On-chain analytics involves analyzing blockchain data to gain insights into market trends and investor behavior. Key metrics include: Network value (market cap compared to transaction volume), active addresses (measuring user adoption), exchange flows (tracking movements between wallets and exchanges), and holder distribution (showing concentration among large holders). Tools like Glassnode, Nansen, and Chainalysis provide sophisticated analytics dashboards. Whale watching (tracking large holders\' movements) can signal potential market moves. The MVRV ratio compares market value to realized value (price at which coins last moved) to identify over/undervaluation. On-chain data is valuable because it\'s transparent and verifiable, unlike traditional market data. However, interpreting it requires understanding blockchain mechanics and avoiding confirmation bias. Combining on-chain data with technical and fundamental analysis can provide a more comprehensive market view.',
                duration: '25 min',
                level: 'Advanced',
            },
        ],
        trading: [
            {
                id: 16,
                title: 'Candlestick Patterns',
                content: 'Candlestick charts display price movements using "candles" that show opening, closing, high, and low prices for a given time period. Common patterns include: Doji (indecision when open and close are nearly equal), hammer (potential reversal after downtrend), engulfing (strong reversal signal), and morning/evening star (three-candle reversal patterns). Bullish patterns suggest potential price increases, while bearish patterns suggest decreases. Volume confirmation (higher trading volume during pattern formation) increases reliability. While candlestick patterns can be useful, they work best in conjunction with other indicators and within the context of overall market trends. Many traders combine candlestick analysis with support/resistance levels and moving averages. It\'s important to remember that no pattern guarantees future price movement - they simply indicate probabilities based on historical performance. Paper trading (practicing without real money) can help build pattern recognition skills.',
                duration: '18 min',
                level: 'Trading',
            },
            {
                id: 17,
                title: 'Risk Management Strategies',
                content: 'Effective risk management is crucial for long-term trading success. Key principles include: Position sizing (limiting each trade to a small percentage of total capital, typically 1-2%), stop-loss orders (automatically exiting losing positions at predetermined levels), and risk-reward ratios (aiming for potential rewards at least 2-3 times the risk). Diversification across different cryptocurrencies and strategies reduces overall portfolio risk. Emotional discipline is equally important - avoiding revenge trading after losses and sticking to predefined strategies. Traders should also consider market conditions, reducing position sizes during high volatility. Keeping a trading journal helps identify strengths and weaknesses in strategy. The golden rule is to never risk more than you can afford to lose, as even the best strategies have losing streaks. Remember that preserving capital is more important than chasing maximum returns - surviving to trade another day is key to long-term success in volatile crypto markets.',
                duration: '20 min',
                level: 'Trading',
            },
            {
                id: 18,
                title: 'Exchange Order Types',
                content: 'Understanding different order types is essential for effective trading. Market orders execute immediately at current prices but may suffer from slippage (difference between expected and actual price). Limit orders specify a price and only execute if reached, providing price control but no execution guarantee. Stop orders become market orders when a price is reached, useful for limiting losses (stop-loss) or entering trends (stop-entry). More advanced types include: OCO (One Cancels Other - combines limit and stop orders), trailing stops (adjust automatically with price movements), and iceberg orders (hide large order sizes). Different exchanges may offer unique order types. Choosing the right order type depends on trading strategy, market conditions, and whether you\'re entering or exiting a position. Limit orders are generally preferable in liquid markets to control execution price, while market orders may be necessary in fast-moving markets when speed is prioritized over price.',
                duration: '15 min',
                level: 'Trading',
            },
            {
                id: 19,
                title: 'Trading Psychology',
                content: 'Psychological factors significantly impact trading performance. Common pitfalls include: FOMO (Fear Of Missing Out leading to impulsive buys), FUD (Fear, Uncertainty, Doubt causing panic selling), confirmation bias (seeking information that supports existing views), and revenge trading (trying to recover losses quickly). Successful traders develop emotional discipline, sticking to their strategies regardless of short-term outcomes. Techniques include: Setting clear rules in advance, taking breaks after losses, and maintaining realistic expectations (not every trade will be a winner). Meditation and exercise can help manage stress. Keeping a trading journal helps identify emotional patterns. It\'s important to accept that losses are inevitable and focus on long-term profitability rather than individual trades. Many professional traders recommend automating strategies to remove emotional decision-making. Remember that the market doesn\'t care about your expectations - adapting to market reality is more productive than hoping it will conform to your predictions.',
                duration: '22 min',
                level: 'Trading',
            },
            {
                id: 20,
                title: 'Backtesting Strategies',
                content: 'Backtesting involves applying trading strategies to historical data to evaluate their potential effectiveness. The process includes: Defining clear entry and exit rules, selecting an appropriate historical period (including different market conditions), and calculating performance metrics like win rate, risk-reward ratio, and maximum drawdown. Tools like TradingView and specialized backtesting software can automate the process. Key considerations include: Accounting for trading fees and slippage (which significantly impact results in high-frequency strategies), avoiding overfitting (creating strategies that work perfectly on past data but fail in real markets), and using out-of-sample data (reserving some historical data for final testing). Walk-forward testing (periodically re-optimizing strategies on new data) can help validate robustness. While backtesting provides valuable insights, it doesn\'t guarantee future performance due to changing market conditions, so forward testing with small amounts is recommended before full deployment.',
                duration: '25 min',
                level: 'Trading',
            },
        ],
        security: [
            {
                id: 21,
                title: 'Protecting Your Crypto Assets',
                content: 'Securing cryptocurrency requires different approaches than traditional finance due to irreversible transactions and constant hacking attempts. Essential security practices include: Using hardware wallets for significant holdings (Ledger, Trezor), enabling two-factor authentication (2FA) everywhere (preferably with an authenticator app rather than SMS), keeping software updated, and using unique, strong passwords for each service. Never share private keys or seed phrases - legitimate services will never ask for them. Be wary of phishing attempts (fake websites/emails mimicking real services). Consider using a dedicated device for crypto activities to reduce malware risks. For large holdings, use multisig wallets requiring multiple approvals for transactions. Regularly verify wallet addresses when transacting (malware can alter copied addresses). Maintain backups of seed phrases in secure locations (never digitally). Remember that in crypto, you are your own bank - the security of your assets is ultimately your responsibility, with no recourse if compromised.',
                duration: '20 min',
                level: 'Security',
            },
            {
                id: 22,
                title: 'Identifying Scams and Fraud',
                content: 'The crypto space is rife with scams targeting inexperienced users. Common schemes include: Ponzi/pyramid schemes (promising high returns for recruiting others), fake ICOs/airdrops (collecting funds for nonexistent projects), pump-and-dump groups (artificially inflating prices before selling), and phishing (stealing login credentials). Red flags include: Guaranteed high returns, pressure to act quickly, anonymous teams, and requests for private keys. Always research projects thoroughly before investing: Check the team\'s background, read the whitepaper, assess community sentiment, and look for third-party audits. Be skeptical of celebrity endorsements and too-good-to-be-true claims. Even legitimate-looking projects can be exit scams (abandoning after raising funds). If an opportunity seems suspicious, it probably is - when in doubt, stay out. Remember that genuine opportunities don\'t require you to act immediately or secretly.',
                duration: '18 min',
                level: 'Security',
            },
            {
                id: 23,
                title: 'Cold Storage Solutions',
                content: 'Cold storage refers to keeping cryptocurrency completely offline, making it immune to online hacking attempts. The most secure forms include: Hardware wallets (dedicated devices like Ledger or Trezor that sign transactions offline), paper wallets (printed private keys/seed phrases stored physically), and metal backups (engraved seed phrases resistant to fire/water). For large holdings, consider multisig cold storage requiring multiple devices/approvals. Setting up cold storage involves: Generating keys offline, securely backing up seed phrases (multiple copies in different locations), and verifying the backup works before transferring significant funds. To use cold storage: Keep most funds offline, only transferring small amounts to "hot" wallets for transactions. Periodically verify your backup is still accessible. While less convenient than online storage, cold storage is essential for long-term holdings, as exchanges and online wallets remain vulnerable to hacks, even with strong security measures.',
                duration: '22 min',
                level: 'Security',
            },
            {
                id: 24,
                title: 'Tax Implications of Crypto',
                content: 'Cryptocurrency transactions often have tax consequences that vary by jurisdiction. Common taxable events include: Selling crypto for fiat, trading between cryptocurrencies, spending crypto, and earning crypto (mining, staking, airdrops). Many countries treat crypto as property, meaning capital gains taxes apply to profits. Keeping detailed records of all transactions (dates, amounts, values at time of transaction) is essential for accurate tax reporting. Tools like CoinTracker or Koinly can help track cost basis and calculate gains/losses. Specific rules may apply to mining income, forks, and DeFi activities. Some jurisdictions offer tax advantages for long-term holdings. Tax authorities are increasingly focusing on crypto, with many exchanges reporting user data. Failure to report can result in penalties or legal consequences. Consult a crypto-savvy tax professional for advice specific to your situation, as crypto taxation is complex and rapidly evolving.',
                duration: '25 min',
                level: 'Security',
            },
            {
                id: 25,
                title: 'Estate Planning for Crypto',
                content: 'Including cryptocurrency in estate planning is crucial, as assets may become inaccessible if heirs don\'t have necessary keys/information. Considerations include: Creating a secure document listing all crypto holdings and how to access them (without exposing sensitive information), choosing a trusted executor knowledgeable about crypto, and considering legal structures like trusts for large holdings. Instructions should cover: Wallet locations, private key/seed phrase storage, exchange accounts, and any multisig arrangements. The document should be encrypted and stored securely with instructions for access upon death. Regularly update it as holdings change. Some services offer inheritance solutions using time-locked contracts or key splitting. Be cautious about including crypto in wills (which become public documents), instead referencing separate private instructions. Discuss your plan with intended heirs to ensure they understand the process. Proper planning prevents significant assets from being lost forever due to inaccessible wallets.',
                duration: '20 min',
                level: 'Security',
            },
        ],
    };

    const toggleLesson = (lessonId) => {
        if (expandedLesson === lessonId) {
            setExpandedLesson(null);
        } else {
            setExpandedLesson(lessonId);
        }
    };

    return (
        <div className="lessons">
            <div className="lessons-header">
                <h1>Crypto Education Center</h1>
                <p>Comprehensive learning resources for all levels of cryptocurrency enthusiasts</p>
            </div>

            <div className="lessons-categories">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="lessons-list">
                {lessons[activeCategory].map(lesson => (
                    <div
                        key={lesson.id}
                        className={`lesson-card ${expandedLesson === lesson.id ? 'expanded' : ''}`}
                    >
                        <div
                            className="lesson-header"
                            onClick={() => toggleLesson(lesson.id)}
                        >
                            <h3>{lesson.title}</h3>
                            <div className="lesson-meta">
                                <span className="duration">{lesson.duration}</span>
                                <span className="level">{lesson.level}</span>
                                <i className={`fas fa-chevron-${expandedLesson === lesson.id ? 'up' : 'down'}`}></i>
                            </div>
                        </div>

                        {expandedLesson === lesson.id && (
                            <div className="lesson-content">
                                <p>{lesson.content}</p>
                                <div className="lesson-actions">
                                    <button className="bookmark-btn">
                                        <i className="fas fa-bookmark"></i> Bookmark
                                    </button>
                                    <button className="completed-btn">
                                        <i className="fas fa-check"></i> Mark as Completed
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="learning-progress">
                <h3>Your Learning Progress</h3>
                <div className="progress-bars">
                    {categories.map(category => (
                        <div key={category.id} className="progress-category">
                            <label>{category.name}</label>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="learning-resources">
                <h3>Additional Resources</h3>
                <div className="resources-grid">
                    <a href="#" className="resource-card">
                        <i className="fas fa-book"></i>
                        <h4>Glossary of Terms</h4>
                        <p>Comprehensive list of cryptocurrency and blockchain terminology</p>
                    </a>
                    <a href="#" className="resource-card">
                        <i className="fas fa-video"></i>
                        <h4>Video Tutorials</h4>
                        <p>Collection of instructional videos covering various crypto topics</p>
                    </a>
                    <a href="#" className="resource-card">
                        <i className="fas fa-chart-line"></i>
                        <h4>Market Analysis</h4>
                        <p>Regular updates on market trends and technical analysis</p>
                    </a>
                    <a href="#" className="resource-card">
                        <i className="fas fa-question-circle"></i>
                        <h4>FAQ Section</h4>
                        <p>Answers to frequently asked questions about cryptocurrency</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Lessons;