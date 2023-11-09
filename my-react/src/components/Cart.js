import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Cart.css'
function Cart() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    // Navigate back to the dashbiard page
    navigate(-2);
  }

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Shopping Cart</h2>
      <div className="cart-items">
        {/* Display code for cart items here */}
        No items in the cart
      </div>
      <div className="cart-buttons">
        <button onClick={handleContinueShopping}>Continue Shopping</button>
        <Link to="/checkout"><button>Proceed to Checkout</button></Link>
      </div>
    </div>
  );
}

export default Cart;