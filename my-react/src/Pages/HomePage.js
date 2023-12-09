import React from 'react';
import Carousel from '../components/Carousel'; 
import '../CSS/HomePage.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/SpareParts.png';
import image3 from '../images/image3.jpg';

function HomePage() {

  const slides = [
    {
      heading: 'Welcome to Mechazone',
      description: 'Discover amazing products and services.',
      buttonText: 'Register/Login',
      buttonLink: '/signup',
      backgroundImage: image1, 
    },
    {
      heading: 'Revolutionize Your Vehicle Experience',
      description: 'Discover a comprehensive solution for all your automotive needs.',
      buttonText: 'Learn More',
      buttonLink: '/about',
      backgroundImage: image2, 
    },
    {
      heading: 'Join Mechazone Today',
      description: 'Sign up now and get started.',
      buttonText: 'Sign Up',
      buttonLink: '/signup',
      backgroundImage: image3, 

    },
  ];

  return (
    <div className="home-container">
      <Carousel slides={slides} /> 
    </div>
  );
}


export default HomePage;


