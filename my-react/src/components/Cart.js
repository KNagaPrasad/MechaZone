import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function Cart() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [deliveryType, setDeliveryType] = useState('');

  useEffect(() => {
    
    fetch('http://localhost:5000/prepareShoppingCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 40,  
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.issuccess) { //d
          setCartItems(data.shoppingCart.sparesInfo); //d
          setTotalPrice(data.shoppingCart.price);
          setDiscount(data.shoppingCart.discount);
          setAmount(data.shoppingCart.amount);
        } else {
          console.error(data.message);//d
        }
      })
      .catch(error => console.error('Error:', error));//d

    
    fetch('http://localhost:5000/deliveryType', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 40,  
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.issuccess) {
          setDeliveryType(data.delivery_type);
        } else {
          console.error(data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  }, []); 

  const removeFromCart = (itemId) => {
    
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };//d

  const handleContinueShopping = () => {
    // Go back two pages when "Continue Shopping" is clicked ---D
    navigate(-2);
  };

  const handleProceedToCheckout = () => {
    // Navigate to the checkout page when "Proceed to Checkout" is clicked ---D
    navigate('/checkout');
  };

  const handleDeliveryTypeChange = (selectedType) => {
    fetch('http://localhost:5000/deliveryType', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 40,
        delivery_type: selectedType,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.issuccess) {
          setDeliveryType(selectedType);
        } else {
          console.error(data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="cart-container">
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