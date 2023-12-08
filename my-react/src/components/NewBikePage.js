import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../Constants";
import { Link } from "react-router-dom";
import '../CSS/BikePage.css'; 

// ... (Your existing imports)

const NewBikePage = () => {
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
      // Clear the models if the entered text is less than 2 characters
      setModels([]);
    }
  }, [selectedBrand, model]);

  const getBrands = () => {
    const _searchBrand = {
      brand
    };
    axios.post(`${API_URL}/getBikeBrands`, _searchBrand)
      .then((res) => {
        if (res && res.data && res.data.length > 0) {
          setBrands(res.data);
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
      brand: selectedBrand,
      model
    };

    axios.post(`${API_URL}/getBikeModelsByBrand`, _searchBrand)
      .then((res) => {
        if (res && res.data && res.data.length > 0) {
          setModels(res.data);
        } else {
          // Handle the case where no models are found
          setModels([]);
        }
      }).catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <div className="bikepage-container">
        <h1>
          BIKE BRANDS
        </h1>
        {error && (
          <div className="error-popup">
            {error}
          </div>
        )}
        <div className="search-container">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search bike brands"
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
                style={{ fontSize: "2rem", padding: "15px", boxShadow: "10 10 10px rgba(76, 175, 80, 0.5)" }}
                >
                {eachBrand}
              </p>
            ))}
          </div>
        </div>
        {selectedBrand && (
          <div className="bike-models-container">
            <div className="search-model-container">
              <input
                type="text"
                placeholder={`Enter your ${selectedBrand} model`}
                value={model}
                onChange={(e) => setModel(e.target.value)}
                style={{ fontSize: "2rem", padding: "10px", width:"500px",height:"75px",boxShadow: "10 10 10px rgba(76, 175, 80, 0.5)" }}
                />
              {models.length > 0 && (
                <div className="model-suggestions">
                  {models
                    .filter((eachModel) =>
                      eachModel.toLowerCase().includes(model.toLowerCase())
                    )
                    .map((filteredModel) => (
                      <Link
                        to={`/bikeparts/${selectedBrand}/${filteredModel}`}
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

export default NewBikePage;
