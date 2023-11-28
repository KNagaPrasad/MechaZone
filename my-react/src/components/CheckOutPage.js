import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../CSS/CheckoutPage.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../Constants';

const CheckoutPage = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [showStoreOptions, setShowStoreOptions] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [searchedStores, setSearchedStores] = useState([]);
  const [showSaveStore, setShowSaveStore] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const user = useSelector(state => state?.userInfo?.user);

  const userIdFromRedux = useSelector(state => state?.userInfo?.user?.userId);

  useEffect(() => {
    axios.post(`${API_URL}/prepareShoppingCart`, { user_id: userIdFromRedux })
      .then(response => {
        const data = response.data;
        if (data.issuccess) {
          setCartItems(data.shoppingCart.sparesInfo);
          setTotalPrice(data.shoppingCart.price);
          setDiscount(data.shoppingCart.discount);
          setAmount(data.shoppingCart.amount);
        } else {
          console.error(data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

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

  const [storeOptions, setStoreOptions] = useState(['Store1', 'Store2', 'Store3']);

  const handleStoreSelect = (selectedStore) => {
    setSelectedStore(selectedStore);
    setShowStoreOptions(true);
    setSelectedAddress(`Store ${selectedStore} is selected.`);
  };

  const handleSaveStore = () => {
    console.log('Selected Store:', selectedStore);
    setShowSaveStore(true);
    setPopupMessage(`Store ${selectedStore} is selected.`);
  };

  const handleSaveOtherAddress = () => {
    const formattedAddress = `${otherAddress.street}, ${otherAddress.apt}, ${otherAddress.zipcode}, ${otherAddress.city}, ${otherAddress.phoneNumber}, is selected`;
    setSelectedAddress(`Address: ${formattedAddress}`);
  };
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeliveryTypeChange = (selectedType) => {
    setDeliveryType(selectedType);
    setShowStoreOptions(false);

    if (selectedType === 'Store') {
      setSearchedStores(storeOptions);
    }
  };

  const handleOtherAddressChange = (e) => {
    const { name, value } = e.target;
    setOtherAddress({ ...otherAddress, [name]: value });
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
          <input type="text" placeholder="Address" id='address' value={user.address}  />
          <input type="text" placeholder="Zip Code" id='zipCode' value={user.zipCode} />
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
              {showStoreOptions && (
                <div className="save-button-container">
                  <button type="button" onClick={handleSaveStore}>
                    Save Store
                  </button>
                  <p>{selectedAddress}</p>
                </div>
              )}
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

            <button type="button" onClick={handleSaveOtherAddress}>
              Save Address
            </button>
            <p>{selectedAddress}</p>
          </div>
        )}
      </div>

      {/* Product Details Section */}
      <div className="product details" style={{ color: 'black' }}>
        <h3>Product details</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>

        <div>
          <p>Total Price: ${totalPrice}</p>
          <p>Discount: ${discount}</p>
          <p>Amount: ${amount}</p>
          <button type="button" onClick={() => navigate('/dashboard')}>CONTINUE SHOPPING</button>
        </div>
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

export default CheckoutPage;
