import React from 'react';

function FullScreenBanner() {
  const navbarHeight = 60; // Adjust if your navbar is taller

  const wrapper = {
    display: 'flex',
    height: `calc(100vh - ${navbarHeight}px)`,
    width: '100vw',
    overflow: 'hidden',
  };

  const leftStyle = {
    flex: 1,
    backgroundColor: '#99ccff', // Light blue for left side
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const rightStyle = {
    flex: 1,
    backgroundColor: '#007bff', // Darker blue for right side
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    lineHeight: '1.3',
    fontFamily: "'Playfair Display', serif",
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '16px 36px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
    color: '#007bff',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    cursor: 'pointer',
  };

  return (
    <div style={wrapper}>
      <div style={leftStyle}>
        <h1 style={textStyle}>
          Your Gym. <br />
          Your Time. <br />
          In Your Pocket.
        </h1>
      </div>
      <div style={rightStyle}>
        <button style={buttonStyle}>Start Now</button>
      </div>
    </div>
  );
}

export default FullScreenBanner;
