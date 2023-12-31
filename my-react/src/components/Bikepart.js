import React, { useEffect, useState } from 'react';
import '../CSS/BikeParts.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Constants';
import { useSelector } from 'react-redux';

function BikeParts() {
  const { brand, model } = useParams();
  const [parts, setParts] = useState([]);
  const user_id = useSelector(state => state?.userInfo?.user?.userId);  
  const navigate = useNavigate();
  useEffect(() => {
    getBrandModelBikeParts();
  },[]);

  const addToBikeCart = (s_id) =>{
    const _addToCart = {
      user_id,
      s_id
    };
    axios.post(`${API_URL}/addToBikeCart`, _addToCart)
      .then((res) =>{
        if (res && res.data && res.data.issuccess) {
          window.alert('Added to the cart successfully ');
        }
      }).catch((err) => {
        console.error(err);
      });
  }

  const getBrandModelBikeParts = () => {
    const _searchParts = {
      brand,
      model
    };
    axios.post(`${API_URL}/getBrandModelBikeParts`, _searchParts)
      .then((res) => {
        if (res && res.data && res.data.length > 0) {
          setParts(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleBuyNow = () => {
    navigate('/checkout'); 
  }

  return (
    <div>
      <h1>Bike Parts</h1>
      <div className="car-part-boxes">
        {parts.slice(0, 6).map((part, index) => (
          <div key={part.id} className={`car-part-box part-${index + 1}`}>
            <img src={part.image} alt={part.name} />
            <h2>{part.name}</h2>
            <p>{part.description}</p>
            <div className="rating">
              Rating: {part.rating} <span role="img" aria-label="star">⭐</span>
            </div>
            <div className="rating">
              Price: {part.price}
            </div>

            <div className="button-container">
              <button className="add-to-cart" onClick={()=> addToBikeCart(part.s_id)}>
                Add to Cart
              </button>
            <button className="Buy-now" onClick={handleBuyNow}>Buy Now</button> </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BikeParts;