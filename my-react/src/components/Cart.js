import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Constants';
import { useSelector } from 'react-redux';
import '../CSS/Cart.css';

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [amount, setAmount] = useState(0);

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

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleContinueShopping = () => {
    navigate(-2);
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-container" style={{ color: 'black' }}>
      <h3>Shopping Cart</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
  

<div className="cart-summary">
  <p>
    <span className="highlight">Total Price:</span> ${totalPrice}
  </p>
  <p>
    <span className="highlight">Discount:</span> ${discount}
  </p>
  <p>
    <span className="highlight">Amount:</span> ${amount}
  </p>
</div>
  
      <div className="cart-buttons">
        <button onClick={handleContinueShopping}>Continue Shopping</button>
        <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
