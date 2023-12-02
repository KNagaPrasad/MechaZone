import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  const [loading, setLoading] = useState(true);
  const [transactionNumber, setTransactionNumber] = useState('');

  useEffect(() => {
    const generateTransactionNumber = () => {
      // For demonstration, you can replace this with your actual logic for generating a transaction number
      const randomTransactionNumber = Math.floor(Math.random() * 1000000);
      setTransactionNumber(randomTransactionNumber);
    };

    // Simulate a delay of 3 seconds before showing the success message
    const delay = setTimeout(() => {
      setLoading(false);
      generateTransactionNumber();
    }, 3000);

    return () => clearTimeout(delay); // Clear the timeout if the component unmounts

  }, []); // Empty dependency array to run the effect only once

  const styles = {
    paymentsContainer: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px', // Increased padding
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 128, 0, 0.3)', // Green shadow
      backgroundColor: '#e0f7fa', // Light blue background
      textAlign: 'center',
    },
    tickIcon: {
      fontSize: '100px',
      color: '#4CAF50', // Dark green
      marginBottom: '16px',
    },
    successMessage: {
      marginTop: '16px',
      color: '#4CAF50', // Dark green
      fontWeight: 'bold',
      fontSize: '36px',
    },
    transactionNumber: {
      marginTop: '16px',
      fontSize: '24px',
      color: '#00695c', // Dark teal
    },
    exitButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontSize: '14px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.paymentsContainer}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div style={styles.tickIcon}>&#10004;</div>
          <h2 style={styles.successMessage}>Transaction Successful</h2>
          <div style={styles.transactionNumber}>Transaction Number: {transactionNumber}</div>
          <Link to="/dashboard" style={styles.exitButton}>
            Exit
          </Link>
        </>
      )}
    </div>
  );
};

export default SuccessPage;
