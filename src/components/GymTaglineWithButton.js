import React from 'react';

function GymTaglineWithButton() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: '40px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  };

  const textStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#333'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        We provide gym in your hands
      </div>
      <button style={buttonStyle}>
        Get Started
      </button>
    </div>
  );
}

export default GymTaglineWithButton;
