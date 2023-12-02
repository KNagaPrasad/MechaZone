// import React, { useEffect, useState } from 'react';

// const SuccessPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [transactionNumber, setTransactionNumber] = useState('');

//   useEffect(() => {
//     const generateTransactionNumber = () => {
//       // For demonstration, you can replace this with your actual logic for generating a transaction number
//       const randomTransactionNumber = Math.floor(Math.random() * 1000000);
//       setTransactionNumber(randomTransactionNumber);
//     };

//     // Simulate a delay of 3 seconds before showing the success message
//     const delay = setTimeout(() => {
//       setLoading(false);
//       generateTransactionNumber();
//     }, 1000);

//     return () => clearTimeout(delay); // Clear the timeout if the component unmounts

//   }, []); // Empty dependency array to run the effect only once

//   const styles = {
//     paymentsContainer: {
//       maxWidth: '800px',  // Adjusted width
//       margin: '0 auto',
//       padding: '20px',
//       border: '1px solid #ccc',
//       borderRadius: '5px',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//       backgroundColor: '#fff',
//       textAlign: 'center',
//     },
//     tickIcon: {
//       fontSize: '100px',  // Increased font size
//       color: 'green',
//       marginBottom: '16px',
//     },
//     successMessage: {
//       marginTop: '16px',
//       color: 'green',
//       fontWeight: 'bold',
//       fontSize: '36px',  // Increased font size
//     },
//     transactionNumber: {
//       marginTop: '16px',
//       fontSize: '24px',  // Increased font size
//     },
//   };

//   return (
//     <div style={styles.paymentsContainer}>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <>
//           <div style={styles.tickIcon}>&#10004;</div>
//           <h2 style={styles.successMessage}>Transaction Successful</h2>
//           <div style={styles.transactionNumber}>Transaction Number: {transactionNumber}</div>
//         </>
//       )}
//     </div>
//   );
// };

// export default SuccessPage;
import React, { useEffect, useState } from 'react';

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
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
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
        </>
      )}
    </div>
  );
};

export default SuccessPage;

