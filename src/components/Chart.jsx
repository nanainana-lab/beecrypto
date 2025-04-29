import React, { useEffect, useRef } from 'react';
import '../styles/animations.css';

// This is a simplified chart component. In a real app, you would use a library like TradingView's lightweight-chart
// or implement WebSocket connections for real-time data. This is just a visual placeholder.

const Chart = ({ data }) => {
  const chartRef = useRef(null);
  const defaultData = [100, 105, 102, 110, 108, 115, 112, 120, 118, 125, 130, 128, 135, 140, 138, 145, 150, 155, 160, 165];
  const chartData = data || defaultData;

  useEffect(() => {
    // In a real implementation, this would initialize a proper charting library
    // with real data from an API. This is just a canvas drawing for demonstration.
    const canvas = chartRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Calculate dimensions
    const minValue = Math.min(...chartData);
    const maxValue = Math.max(...chartData);
    const range = maxValue - minValue;
    const step = width / (chartData.length - 1);
    
    // Draw grid
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = height - (i * (height / 5));
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
      
      // Grid labels
      ctx.fillStyle = '#666';
      ctx.font = '10px Arial';
      ctx.textAlign = 'left';
      const value = minValue + (range * (i / 5));
      ctx.fillText(value.toFixed(2), 5, y - 5);
    }
    
    // Vertical grid lines (time)
    for (let i = 0; i < 5; i++) {
      const x = i * (width / 4);
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    
    // Draw chart line
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    chartData.forEach((value, index) => {
      const x = index * step;
      const y = height - ((value - minValue) / range) * height;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
    
    // Draw area under curve
    ctx.fillStyle = 'rgba(76, 175, 80, 0.1)';
    ctx.beginPath();
    ctx.moveTo(0, height);
    
    chartData.forEach((value, index) => {
      const x = index * step;
      const y = height - ((value - minValue) / range) * height;
      ctx.lineTo(x, y);
    });
    
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();
    
    // Draw current price indicator
    const lastValue = chartData[chartData.length - 1];
    const lastY = height - ((lastValue - minValue) / range) * height;
    
    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.arc(width - 5, lastY, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#333';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(lastValue.toFixed(2), width - 15, lastY - 10);
    
  }, [chartData]);

  return (
    <div className="chart-container">
      <div className="chart-header">
        <div className="chart-title">BTC/USDT</div>
        <div className="chart-price">$51,234.56 <span className="positive">+2.34%</span></div>
        <div className="chart-timeframes">
          <button className="timeframe active">1D</button>
          <button className="timeframe">1W</button>
          <button className="timeframe">1M</button>
          <button className="timeframe">1Y</button>
          <button className="timeframe">ALL</button>
        </div>
      </div>
      
      <canvas 
        ref={chartRef} 
        width={800} 
        height={400}
        className="chart-canvas"
      ></canvas>
      
      <div className="chart-indicators">
        <div className="indicator">
          <span className="label">Volume (24h):</span>
          <span className="value">$28.5B</span>
        </div>
        <div className="indicator">
          <span className="label">Market Cap:</span>
          <span className="value">$980B</span>
        </div>
        <div className="indicator">
          <span className="label">Circulating Supply:</span>
          <span className="value">19.1M BTC</span>
        </div>
      </div>
      
      <div className="chart-tools">
        <button className="tool-btn"><i className="fas fa-chart-line"></i> Indicators</button>
        <button className="tool-btn"><i className="fas fa-paint-brush"></i> Drawing Tools</button>
        <button className="tool-btn"><i className="fas fa-cog"></i> Settings</button>
        <button className="tool-btn"><i className="fas fa-expand"></i> Fullscreen</button>
      </div>
    </div>
  );
};

export default Chart;