import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Link } from 'react-router-dom';  

const PaymentsPage = () => {
  const [cardData, setCardData] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const [paymentStatus, setPaymentStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  };

  const handlePay = () => {
    const validationErrors = validateCardDetails();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  const validateCardDetails = () => {
    const errors = {};

    if (!/^\d{16}$/.test(cardData.number)) {
      errors.number = 'Card number must have 16 digits';
    }

    if (!cardData.name.trim()) {
      errors.name = 'Name is mandatory';
    }

    if (!cardData.expiry.trim()) {
      errors.expiry = 'Expiry date is mandatory';
    }

    if (!cardData.cvc.trim()) {
      errors.cvc = 'CVC is mandatory';
    }

    return errors;
  };

  return (
    <div style={styles.paymentsContainer}>
      <h2>Payment Details</h2>

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
          <Link to="/success" style={{ textDecoration: 'none', color: '#fff' }}>
            Place Order
          </Link>
        </button>
      </div>
    </div>
  );
};

const styles = {
  paymentsContainer: {
    maxWidth: '800px',
    width: '100%',
    margin: '500px auto',
    padding: '100px',
    border: '2px solid #2196F3',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(33, 150, 243, 0.2)',
    backgroundColor: '#fff',
    transition: 'box-shadow 0.3s, transform 0.3s',
    '&:hover': {
      boxShadow: '0 0 30px rgba(33, 150, 243, 0.4)',
      transform: 'scale(1.02)',
    },
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
    border: '1px solid #000',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#008000',
    color: '#00fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#1565C0',
    },
  },
  successMessage: {
    marginTop: '16px',
    color: 'green',
    fontWeight: 'bold',
  },
  twoFields: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  field: {
    flex: '1',
    marginRight: '8px',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginTop: '4px',
  },
};

export default PaymentsPage;
