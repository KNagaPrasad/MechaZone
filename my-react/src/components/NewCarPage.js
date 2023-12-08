// NewCarPage.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../Constants";
import { Link } from "react-router-dom";
import '../CSS/Carpage.css';

const NewCarPage = () => {
  const [brand, setBrand] = useState('');
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [model, setModel] = useState('');
  const [models, setModels] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (brand.length <= 2) {
      return;
    }
    getBrands();
  }, [brand]);

  useEffect(() => {
    if (model.length >= 2) {
      getModels();
    } else {
      setModels([]);
    }
  }, [selectedBrand, model]);

  const getBrands = () => {
    const _searchBrand = {
      brand
    };
    axios.post(`${API_URL}/getBrands`, _searchBrand)
      .then((res) => {
        if (res && res.data && res.data.length > 0) {
          const uniqueBrands = Array.from(new Set(res.data));
          setBrands(uniqueBrands);
          setError(''); // Clear any previous error
        } else {
          setError('Brand not found'); // Set error if no brands match
        }
      }).catch((err) => {
        console.error(err);
      });
  }

  const getModels = () => {
    const _searchBrand = {
      brand: selectedBrand
    };
    axios.post(`${API_URL}/getModelsByBrand`, _searchBrand)
      .then((res) => {
        if (res && res.data && res.data.length > 0) {
          setModels(res.data);
        } else {
          setError('Model not found'); // Set error if no models are found
        }
      }).catch((err) => {
        console.error(err);
      });
  }

  const handleCloseError = () => {
    setError('');
  };

  return (
    <div>
      <div className="carpage-container">
        <h1>Car Brands</h1>
        
        <div className="search-container">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search car brands"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              style={{ fontSize: "2rem", padding: "15px", width:"500px",height:"75px",boxShadow: "10 10 10px rgba(76, 175, 80, 0.5)" }}
            />
            {brands.length > 0 && brands.map((eachBrand) => (
              <p
                key={eachBrand}
                onClick={() => {
                  setBrand(eachBrand);
                  setSelectedBrand(eachBrand);
                  setError(''); // Clear error when a brand is selected
                }}
                className={eachBrand === selectedBrand ? "highlighted-brand" : ""}
                style={{ fontSize: "2rem", padding: "15px", width:"500px",height:"75px",boxShadow: "10 10 10px rgba(76, 175, 80, 0.5)" }}
              >
                {eachBrand}
              </p>
            ))}
          </div>
        </div>
        {error && (
          <div className="error-popup">
            <span className="close" onClick={handleCloseError}>&times;</span>
            <p style={{ fontSize: "2rem" }}>{error}</p>
          </div>
        )}
        {selectedBrand && (
          <div className="car-models-container">
            <div className="search-model-container">
              <input
                type="text"
                placeholder={`Enter your ${selectedBrand} model`}
                value={model}
                onChange={(e) => setModel(e.target.value)}
                style={{ fontSize: "2rem", padding: "15px", width:"500px",height:"75px",boxShadow: "10 10 10px rgba(76, 175, 80, 0.5)" }}
              />
              {models.length > 0 && (
                <div className="model-suggestions">
                  {models
                    .filter((eachModel) =>
                      eachModel.toLowerCase().includes(model.toLowerCase())
                    )
                    .map((filteredModel) => (
                      <Link
                        to={`/CarParts/${selectedBrand}/${filteredModel}`}
                        key={filteredModel}
                      >
                        <div className="model-suggestion">{filteredModel}</div>
                      </Link>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewCarPage;
