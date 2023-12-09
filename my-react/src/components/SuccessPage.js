import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  const [loading, setLoading] = useState(true);
  const [transactionNumber, setTransactionNumber] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const generateTransactionNumber = () => {
      const randomTransactionNumber = Math.floor(Math.random() * 1000000);
      setTransactionNumber(randomTransactionNumber);
    };

    const delayOrderPlaced = setTimeout(() => {
      setOrderPlaced(true);
    }, 2000);

    const delayLoading = setTimeout(() => {
      setLoading(false);
      generateTransactionNumber();
    }, 4000);

    return () => {
      clearTimeout(delayOrderPlaced);
      clearTimeout(delayLoading);
    };

  }, []);

  const styles = {
    paymentsContainer: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 128, 0, 0.3)',
      backgroundColor: '#e0f7fa',
      textAlign: 'center',
    },
    tickIcon: {
      fontSize: '100px',
      color: '#4CAF50',
      marginBottom: '16px',
    },
    successMessage: {
      marginTop: '16px',
      color: '#4CAF50',
      fontWeight: 'bold',
      fontSize: '36px',
    },
    transactionNumber: {
      marginTop: '16px',
      fontSize: '24px',
      color: '#00695c',
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
      {orderPlaced && (
        <>
          <div style={styles.tickIcon}>&#10004;</div>
          <h2 style={styles.successMessage}>Order Placed</h2>
        </>
      )}
      {loading && !orderPlaced ? (
        <div>Loading...</div>
      ) : (
        <>
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
