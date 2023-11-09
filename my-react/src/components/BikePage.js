// import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import BikeLogo from './BikeLogo';
// import Header from './Header';
// import Footer from './Footer';
// import '../CSS/BikePage.css';

// function BikePage() {
//   const [selectedBrand, setSelectedBrand] = React.useState(null);
//   const [selectedModel, setSelectedModel] = React.useState(null);
//   const [searchTerm, setSearchTerm] = React.useState('');
//   const [searchModelTerm, setSearchModelTerm] = React.useState('');
//   const [error, setError] = useState(null);


//   const bikeBrands = [
//     {
//       name: 'Honda',
//       models: ['CBR1000RR', 'CRF250L', 'Gold Wing', 'Rebel 500', 'CB300R'],
//     },
//     {
//       name: 'Yamaha',
//       models: ['YZF-R1', 'MT-07', 'Super Tenere', 'YZ450F', 'VMAX'],
//     },
//     {
//       name: 'Kawasaki',
//       models: ['Ninja 400', 'Z900', 'Versys', 'KLX250', 'Concours'],
//     },
//     {
//       name: 'Suzuki',
//       models: ['GSX-R1000', 'V-Strom 650', 'Boulevard M109R', 'DR-Z400', 'SV650'],
//     },
//     {
//       name: 'Ducati',
//       models: ['Panigale V4', 'Monster', 'Multistrada', 'Scrambler', 'Diavel'],
//     },
//     {
//       name: 'Harley-Davidson',
//       models: ['Sportster', 'Street Glide', 'Softail', 'Road King', 'Electra Glide'],
//     }
//   ];

//   const handleBrandSelect = (brand) => {
//     setSelectedBrand(brand);
//     setSearchModelTerm('');
//     setSelectedModel(null);
//   };

//   const handleModelSelect = (model) => {
//     setSelectedModel(model);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setSelectedBrand(null);
//     setSelectedModel(null);
//   };

//   const handleModelSearchChange = (event) => {
//     setSearchModelTerm(event.target.value);
//   };

//   const navigate = useNavigate();

//   const showError = (message) => {
//     setError(message);
//     setTimeout(() => {
//       setError(null);
//     }, 3000);
//   };
//   const handleGoClick = () => {
//     if (selectedBrand && selectedModel) {
//       const isModelAvailable = bikeBrands
//         .find((brand) => brand.name === selectedBrand)
//         .models.includes(selectedModel);
  
//       if (isModelAvailable) {
//         navigate(`/BikeParts/${selectedBrand}/${selectedModel}`);
//       } else {
//         showError(`We don't have the ${selectedModel} model right now!`);
//       }
//     } else {
//       showError('Enter a valid model to search!');
//     }
//   };

//   const filteredBikeBrands = bikeBrands.filter((brand) =>
//     brand.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredBikeModels = selectedBrand
//     ? bikeBrands
//         .find((brand) => brand.name === selectedBrand)
//         .models.filter((model) =>
//           model.toLowerCase().includes(searchModelTerm.toLowerCase())
//         )
//     : [];

//   return (
//     <div>
//       <Header />
//       {error && <ErrorPopup message={error} />}
//       <div className="bikepage-container">
//         <h1>Bike Brands</h1>
//         <div className="search-container">
//           <div className="search-input">
//             <input
//               type="text"
//               placeholder="Search bike brands"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//           </div>
//         </div>
//         <div className="bike-logos-container">
//           {filteredBikeBrands.map((brand) => (
//             <BikeLogo
//               key={brand.name}
//               brand={brand.name}
//               selected={brand.name === selectedBrand}
//               onSelect={handleBrandSelect}
//             />
//           ))}
//         </div>
//         {selectedBrand && (
//           <div className="bike-models-container">
//             <div className="search-model-container">
//               <input
//                 type="text"
//                 placeholder={`Enter your ${selectedBrand} model`}
//                 value={searchModelTerm}
//                 onChange={handleModelSearchChange}
//               />
//               <button className="search-button" onClick={handleGoClick}>
//                 Search
//               </button>
//               {searchModelTerm && (
//                 <div className="model-suggestions">
//                   {filteredBikeModels.map((model) => (
//                     <div
//                       key={model}
//                       onClick={() => handleModelSelect(model)}
//                       className="model-suggestion"
//                     >
//                       {model}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//         </div>
//         <Footer/>
//       </div>
//      );
//   }
//   const ErrorPopup = ({ message }) => {
//     return (
//       <div className="error-popup">
//         <p>{message}</p>
//       </div>
//     );
//   };
  

// export default BikePage;

import React, { useEffect, useState } from 'react';
//import { useCart } from './CartContext';
import '../CSS/BikeParts.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Constants';
import { useSelector } from 'react-redux';

function BikeParts() {
  const { brand, model } = useParams();
  const [parts, setParts] = useState([]);
  const user_id = useSelector(state => state?.userInfo?.user?.userId);  

  useEffect(() => {
    getBrandModelBikeParts();
  });

  const addToBikeCart = (s_id) =>{
    const _addToCart = {
      user_id,
      s_id
    };
    axios.post(`${API_URL}/addToBikeCart`, _addToCart)
      .then((res) =>{
        if (res && res.data && res.data.issuccess) {
          window.alert('added succesfully');
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
              <button className="Buy-now">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BikeParts;