import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Constants';
import { useSelector } from 'react-redux';

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

      <div>
        <p>Total Price: ${totalPrice}</p>
        <p>Discount: ${discount}</p>
        <p>Amount: ${amount}</p>
      </div>
      <div>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
        <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
