import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <>
    <Link to="/car-search"> 
      <svg height="400" width="400">
        <circle cx="200" cy="200" r="40%" fill="navy" />
        <text x="150" y="210" fill="white" style={{ fontSize: 40 }}>
          Cars
        </text>
      </svg>
    </Link>
    
    <Link to="/bike-search">
      <svg height="400" width="400">
        <circle cx="200" cy="200" r="40%" fill="navy" />
        <text x="150" y="210" fill="white" style={{ fontSize: 40 }}>
          Bikes
        </text>
      </svg>
    </Link>
  </>
);

export default Dashboard;