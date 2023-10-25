import React from 'react';
import BikeLogo from './BikeLogo';
import Header from './Header';
import Footer from './Footer';
import '../CSS/Carpage.css';

function CarPage() {
  const [selectedBrand, setSelectedBrand] = React.useState(null);
  const [selectedModel, setSelectedModel] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchModelTerm, setSearchModelTerm] = React.useState('');

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
    setSearchModelTerm('');
  };
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedBrand(null);
  };


  const filteredBikeBrands = bikeBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header /> 
      <div className="BikePage-container">
        <h1>Bike Brands</h1>
        <div className="search-container">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search bike brands"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="Bike-logos-container">
          {filteredBikeBrands.map((brand) => (
            <BikeLogo
              key={brand.name}
              brand={brand.name}
              selected={brand.name === selectedBrand}
              onSelect={handleBrandSelect}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CarPage;
