import React, { useState, useEffect } from 'react';
import './index.css';
import '../../App.css';
import OrderHistory from './OrderHistory';
import dayjs from 'dayjs';

const Account = () => {
  // State to store order history
  const [orderHistory, setOrderHistory] = useState([]);
  let userInfo = JSON.parse(localStorage.getItem("userInfo")) || ""
  console.log(userInfo)
  // imports the current day
  const date = dayjs().format('MM/DD/YYYY');

  const packageNames = [ localStorage.getItem('package_Romance'), localStorage.getItem('package_Non-Fiction'), localStorage.getItem('package_Fiction'), localStorage.getItem('package_Fantasy'), localStorage.getItem('package_Mystery')];

  // Mock data for order history (replace with actual fetching logic)
  // place date into order history to make sure it keeps correct days
  const mockOrderHistory = {
    ...(packageNames[0] === 'Romance' && {
      'Romance Subscription': [
        {
          date: date,
          packageName: 'Romance',
          status: 'Active',
        },
      ],
    }),
    ...(packageNames[1] === 'Non-Fiction' && {
      'Non-Fiction Subscription': [
        {
          date: date,
          packageName: 'Non-Fiction',
          status: 'Active',
        },
      ],
    }),
    ...(packageNames[2] === 'Fiction' && {
      'Fiction Subscription': [
        {
          date: date,
          packageName: 'Fiction',
          status: 'Active',
        },
      ],
    }),
    ...(packageNames[3] === 'Fantasy' && {
      'Fantasy Subscription': [
        {
          date: date,
          packageName: 'Fantasy',
          status: 'Active',
        },
      ],
    }),
    ...(packageNames[4] === 'Mystery' && {
      'Mystery Subscription': [
        {
          date: date,
          packageName: 'Mystery',
          status: 'Active',
        },
      ],
    }),
  };

  // Effect to set orderHistory when the component mounts
  useEffect(() => {
    // For demonstration purposes, let's say you want to initially display the order history for 'Romance Package'
    setOrderHistory(mockOrderHistory || []);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="orderContainer">
      <video src="/assets/videos/pexels_videos_2421545 (2160p).mp4" autoPlay loop muted />
      
      <div className="custom-container">
  <h1 className="custom-heading">PROFILE</h1>
  <h3 className="custom-heading">USER: {userInfo.Name}</h3>
  <h3 className="custom-heading">EMAIL: {userInfo.Email}</h3>
  
</div>
<h2 className="about">ORDER HISTORY</h2>
      <div className="order-history">
        {Object.keys(mockOrderHistory).map((packageName) => (
          <div key={packageName}>
            <h3>{packageName}</h3>
            {mockOrderHistory[packageName].map((order, index) => (
              <OrderHistory key={index} {...order} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
