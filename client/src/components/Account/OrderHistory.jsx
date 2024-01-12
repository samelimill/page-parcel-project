import React from 'react';

const OrderHistory = ({ date, packageName, status }) => {
  return (
    <div className="order-history-card">
      <p>Date Purchased: {date}</p>
      <p>Package: {packageName}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default OrderHistory;
