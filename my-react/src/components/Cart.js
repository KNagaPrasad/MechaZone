import React, { useState, useEffect } from 'react';
import '../CSS/Cart.css'

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 13,  
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.issuccess) {
          setCartItems(data.shoppingCart.sparesInfo);
        } else {
          console.error(data.message);
        }
      })
      .catch(error => console.error('Error:', error));
    });

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
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
    </div>
  );
}

export default Cart;