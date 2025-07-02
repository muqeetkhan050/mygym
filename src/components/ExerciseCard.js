import React from 'react';

function ExerciseCard({ title, level, muscle, category, description, instructions }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '400px',
    margin: '16px auto',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    wordWrap: 'break-word', // wraps long words
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    margin: 0,
    color: '#333',
  };

  const levelTagStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    borderRadius: '12px',
    padding: '4px 12px',
    fontSize: '0.9rem',
    fontWeight: '600',
  };

  const textStyle = {
    margin: '6px 0',
    color: '#555',
    lineHeight: '1.4',
    wordWrap: 'break-word',
  };

  const instructionsTitleStyle = {
    marginTop: '16px',
    marginBottom: '8px',
    color: '#222',
  };

  const instructionStepStyle = {
    marginBottom: '6px',
    paddingLeft: '6px',
  };

  const stepNumberStyle = {
    fontWeight: 'bold',
    marginRight: '8px',
    color: '#4caf50',
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <span style={levelTagStyle}>{level}</span>
      </div>

      <p style={textStyle}><strong>Muscle:</strong> {muscle}</p>
      <p style={textStyle}><strong>Category:</strong> {category}</p>
      <p style={textStyle}><strong>Description:</strong> {description}</p>

      <h4 style={instructionsTitleStyle}>Instructions</h4>
      <ul style={{ paddingLeft: '20px', marginTop: 0 }}>
        {instructions.map((step, index) => (
          <li key={index} style={instructionStepStyle}>
            <span style={stepNumberStyle}>{index + 1}.</span> {step}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseCard;
