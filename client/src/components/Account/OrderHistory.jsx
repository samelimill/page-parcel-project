import React, { useState, useEffect } from 'react';



const OrderHistory = ({ date, packageName, status }) => {
  const [isSubscriptionCancelled, setSubscriptionCancelled] = useState(
    localStorage.getItem(`subscriptionCancelled_${packageName}`) === 'true'
  );
  const [orderStatus, setOrderStatus] = useState(
    isSubscriptionCancelled ? 'Inactive' : status
  );

  

  const handleCancelSubscription = () => {
    // Display confirmation message
    const confirmCancel = window.confirm('We are sad to see you go! Are you sure you want to cancel?');

    // If user confirms, cancel the subscription
    if (confirmCancel) {
      setSubscriptionCancelled(true);
      setOrderStatus('Inactive');
    }
  };

  const handleReactivateSubscription = () => {
    // Reactivate the subscription
    setSubscriptionCancelled(false);
    setOrderStatus('Active'); // You can set the status to whatever is appropriate
    // Display welcome back message
    window.alert('Welcome back!');
  };

  // Save state to local storage when it changes
  useEffect(() => {
    localStorage.setItem(`subscriptionCancelled_${packageName}`, isSubscriptionCancelled);
  }, [isSubscriptionCancelled, packageName]);

  return (
    <div className="order-history-card">
      <p>Date Purchased: {date}</p>
      <p>Package: {packageName}</p>
      {isSubscriptionCancelled && <p>Subscription Cancelled</p>}
      <p>Status: {isSubscriptionCancelled ? 'Inactive' : orderStatus}</p>

      {/* Add Cancel Subscription button */}
      {!isSubscriptionCancelled && (
        <button onClick={handleCancelSubscription}>Cancel Subscription</button>
      )}

      {/* Add Reactivate Subscription button */}
      {isSubscriptionCancelled && (
        <button onClick={handleReactivateSubscription}>Reactivate Subscription</button>
      )}
    </div>
  );
};

export default OrderHistory;
