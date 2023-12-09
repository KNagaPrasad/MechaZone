// Support.js
import React, { useState } from 'react';
import '../CSS/support.css';

const Support = () => {
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [isMessageSent, setMessageSent] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle the query
    console.log(`Name: ${name}, Query: ${query}`);
    // Reset the form after submission
    setName('');
    setQuery('');
    // Display message sent popup
    setMessageSent(true);
    // Hide the message sent popup after 3 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  const chatMessages = [
    { question: 'How to track my order?', answer: 'You can track your order by logging into your account and visiting the order tracking page.' },
    { question: 'What payment methods are accepted?', answer: 'We accept credit/debit cards, PayPal, and other secure payment methods.' },
    { question: 'How to return an item?', answer: 'To return an item, go to your account, navigate to the order history, and follow the return instructions.' },
    { question: 'Is there a customer support hotline?', answer: 'Yes, you can reach our customer support at +123-456-7890 during business hours.' },
  ];

  return (
    <div className="support-container">
      <h2>Contact Support</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name or ID:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="query">Your Query:</label>
          <textarea
            id="query"
            name="query"
            value={query}
            onChange={handleQueryChange}
            rows={5} // Adjust the number of rows
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>

      {isMessageSent && (
        <div className="message-sent-popup">
          Message sent! We will get back to you.
        </div>
      )}

      <div className="chat-messages">
        <h3>Example Queries and Answers</h3>
        {chatMessages.map((message, index) => (
          <div key={index} className="chat-message">
            <strong>Q:</strong> {message.question}
            <br />
            <strong>A:</strong> {message.answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
