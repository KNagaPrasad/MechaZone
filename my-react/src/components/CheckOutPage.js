import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* Delivery Section */}
      <div className="sub-container delivery-box">
        <p>Choose Delivery Type:</p>
        <div className="delivery-option" onClick={() => handleDeliveryTypeChange('Home')}>
          <button type="button" className={deliveryType === 'Home' ? 'selected' : ''}>
            Self Checkout
          </button>
        </div>
        <div className="delivery-option" onClick={() => handleDeliveryTypeChange('Store')}>
          <button type="button" className={deliveryType === 'Store' ? 'selected' : ''}>
            Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;