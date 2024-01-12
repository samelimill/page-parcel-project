import React, { useState, useEffect } from 'react';
import './index.css';
import '../../App.css';
import OrderHistory from './OrderHistory';

const Account = () => {
  // State to store order history
  const [orderHistory, setOrderHistory] = useState([]);

  // Mock data for order history (replace with actual fetching logic)
  const mockOrderHistory = {
    'Romance Package': [
      { date: '01/11/24', packageName: 'Romance Package', status: 'Active' },
    ],
  };

  // Effect to set orderHistory when the component mounts
  useEffect(() => {
    // For demonstration purposes, let's say you want to initially display the order history for 'Romance Package'
    const initialPackage = 'Romance Package';
    setOrderHistory(mockOrderHistory[initialPackage] || []);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="orderContainer">
      <video src="/assets/videos/pexels_videos_2421545 (2160p).mp4" autoPlay loop muted />
      <h2 className="about">ORDER HISTORY</h2>

      <div className="order-history">
        {orderHistory.map((order, index) => (
          <OrderHistory key={index} {...order} />
        ))}
      </div>
    </div>
  );
};

export default Account;
