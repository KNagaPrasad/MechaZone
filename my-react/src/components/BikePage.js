import React, { useState } from 'react';
import BikeLogo from './BikeLogo'; // Make sure you have BikeLogo component
import '../CSS/BikePage.css';
import { Link } from 'react-router-dom';

function BikePage() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchModelTerm, setSearchModelTerm] = useState('');

  const bikeBrands = [
    {
      name: 'Honda',
      models: ['CBR1000RR', 'CRF250L', 'Gold Wing', 'Rebel 500', 'CB300R'],
    },
    {
      name: 'Yamaha',
      models: ['YZF-R1', 'MT-07', 'Super Tenere', 'YZ450F', 'VMAX'],
    },
    {
      name: 'Kawasaki',
      models: ['Ninja 400', 'Z900', 'Versys', 'KLX250', 'Concours'],
    },
    {
      name: 'Suzuki',
      models: ['GSX-R1000', 'V-Strom 650', 'Boulevard M109R', 'DR-Z400', 'SV650'],
    },
    {
      name: 'Ducati',
      models: ['Panigale V4', 'Monster', 'Multistrada', 'Scrambler', 'Diavel'],
    },
    {
      name: 'Harley-Davidson',
      models: ['Sportster', 'Street Glide', 'Softail', 'Road King', 'Electra Glide'],
    }
    // Add more bike brands as needed
  ];

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleModelSearchChange = (event) => {
    setSearchModelTerm(event.target.value);
  };

  const filteredBikeBrands = bikeBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedBrandObject = bikeBrands.find((brand) => brand.name === selectedBrand);
  const filteredModels = selectedBrandObject
    ? selectedBrandObject.models.filter((model) =>
        model.toLowerCase().includes(searchModelTerm.toLowerCase())
      )
    : [];

  return (
    <div className="bike-page">
      <h1>Bike Brands</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search bike brands"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="bike-logos-container">
        {filteredBikeBrands.map((brand) => (
          <Link to={'/' + brand.name}>
            <BikeLogo
              key={brand.name}
              brand={brand.name}
              selected={brand.name === selectedBrand}
              onSelect={handleBrandSelect}
            />
          </Link>
        ))}
      </div>
      {selectedBrand && (
        <div className="bike-models-container">
          <input
            type="text"
            placeholder={`Search ${selectedBrand} models`}
            value={searchModelTerm}
            onChange={handleModelSearchChange}
          />
          <ul>
            {filteredModels.map((model) => (
              <li key={model}>{model}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BikePage;
