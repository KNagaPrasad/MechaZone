import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../CSS/CheckoutPage.css';

const CheckoutPage = () => {
  const location = useLocation();
  const productDetails = location.state?.productDetails || [];

  // Calculate total price, discount, and amount
  const totalPrice = productDetails.reduce((total, product) => total + product.price, 0);
  const discount = totalPrice * 0.1; // Assuming a 10% discount
  const amount = totalPrice - discount;

  const [formData, setFormData] = useState({
    deliveryAddress: '',
    paymentMethod: '',
  });

  const [deliveryType, setDeliveryType] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [otherAddress, setOtherAddress] = useState({
    street: '',
    apt: '',
    zipcode: '',
    city: '',
    phoneNumber: '',
  });

  const [storeOptions, setStoreOptions] = useState(['Store1', 'Store2', 'Store3']); // Replace with your actual store names
  const [searchedStores, setSearchedStores] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeliveryTypeChange = (selectedType) => {
    setDeliveryType(selectedType);
    if (selectedType === 'Store') {
      // Placeholder for store data
      // You can fetch and set actual store data here
      setSearchedStores(storeOptions);
    }
  };

  const handleOtherAddressChange = (e) => {
    const { name, value } = e.target;
    setOtherAddress({ ...otherAddress, [name]: value });
  };

  const handleStoreSelect = (selectedStore) => {
    setSelectedStore(selectedStore);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { formData, deliveryType, selectedStore, otherAddress });
  };

  const handlePay = () => {
    navigate('/payments');
  };

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
          {deliveryType === 'Store' && (
            <div className="store-dropdown">
              <label>Select the Store:</label>
              <select
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
              >
                <option value="" disabled>Select a Store</option>
                {storeOptions.map((store) => (
                  <option key={store} value={store}>
                    {store}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="delivery-option" onClick={() => handleDeliveryTypeChange('Other')}>
          <button type="button" className={deliveryType === 'Other' ? 'selected' : ''}>
            Other
          </button>
        </div>
        {deliveryType === 'Other' && (
          <div className="other-address-form">
            <label>Street:</label>
            <input type="text" name="street" value={otherAddress.street} onChange={handleOtherAddressChange} required />

            <label>Apt:</label>
            <input type="text" name="apt" value={otherAddress.apt} onChange={handleOtherAddressChange} required />

            <label>Zipcode:</label>
            <input type="text" name="zipcode" value={otherAddress.zipcode} onChange={handleOtherAddressChange} required />

            <label>City:</label>
            <input type="text" name="city" value={otherAddress.city} onChange={handleOtherAddressChange} required />

            <label>Phone Number:</label>
            <input type="tel" name="phoneNumber" value={otherAddress.phoneNumber} onChange={handleOtherAddressChange} required />
          </div>
        )}
      </div>

      <div className="sub-container product-details">
        <h3>Product Details</h3>
        {productDetails.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
        <div className="price-summary">
          <p>Tires      : $100</p>
          <p>Spark Plugs: $10</p>
          <p>Total Price: $110</p>
          <p>Discount   : $11</p>
          <p>Amount     : $99</p>
        </div>
          <button type="button" onClick={()=> navigate('/dashboard')}>CONTINUE SHOPPING</button>
      </div>

      {/* Payment Section */}
      <div className="sub-container payment-section">
        <label>Payment Method:</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={(e) => handleChange(e)}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
        </select>
        <button type="button" onClick={handlePay}>
          Pay
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;