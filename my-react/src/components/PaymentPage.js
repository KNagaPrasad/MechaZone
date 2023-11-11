import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const PaymentsPage = () => {
  const [cardData, setCardData] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const [paymentStatus, setPaymentStatus] = useState(null);

  return (
    <div style={styles.paymentsContainer}>
      <h2>Enter Your Card Details</h2>
      <div style={styles.creditCardForm}>
        <Cards
          cvc={cardData.cvc}
          expiry={cardData.expiry}
          focused={cardData.focus}
          name={cardData.name}
          number={cardData.number}
        />
        <form style={styles.paymentForm}>
          <label style={styles.label}>Card Number</label>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={cardData.number}
            onChange={handleInputChange}
            onFocus={(e) => setCardData((prevData) => ({ ...prevData, focus: e.target.name }))}
            style={styles.input}
          />
          {errors.number && <div style={styles.error}>{errors.number}</div>}

          <label style={styles.label}>Card Holder</label>
          <input
            type="text"
            name="name"
            placeholder="Card Holder"
            value={cardData.name}
            onChange={handleInputChange}
            onFocus={(e) => setCardData((prevData) => ({ ...prevData, focus: e.target.name }))}
            style={styles.input}
          />
          {errors.name && <div style={styles.error}>{errors.name}</div>}

          <div style={styles.twoFields}>
            <div style={styles.field}>
              <label style={styles.label}>Expiry Date</label>
              <input
                type="tel"
                name="expiry"
                placeholder="MM/YY"
                value={cardData.expiry}
                onChange={handleInputChange}
                onFocus={(e) => setCardData((prevData) => ({ ...prevData, focus: e.target.name }))}
                style={styles.input}
              />
              {errors.expiry && <div style={styles.error}>{errors.expiry}</div>}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>CVC</label>
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={cardData.cvc}
                onChange={handleInputChange}
                onFocus={(e) => setCardData((prevData) => ({ ...prevData, focus: e.target.name }))}
                style={styles.input}
              />
              {errors.cvc && <div style={styles.error}>{errors.cvc}</div>}
            </div>
          </div>
        </form>
        <button onClick={handlePay} style={styles.button}>
          Pay
        </button>
        {paymentStatus === 'success' && (
          <div style={styles.successMessage}>Transaction done successfully!</div>
        )}
      </div>
    </div>
  );
};

const styles = {
  paymentsContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  creditCardForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  paymentForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px', 
  },
  label: {
    marginBottom: '8px',
  },
  input: {
    padding: '8px',
    marginBottom: '16px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  twoFields: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  field: {
    flex: '1',
    marginRight: '8px',
  },
  successMessage: {
    marginTop: '16px',
    color: 'green',
    fontWeight: 'bold',
  },
};

export default PaymentsPage;
