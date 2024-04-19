import React, { useState } from 'react';

const cardStyle = {
  border: '1px solid black',
  margin: '0.5em',
  width: '16em',
  height: '16em',
  wordWrap: 'break-word',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden' // Add this to hide the overflowing part of the image
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const CatApp = () => {
  const [statusCode, setStatusCode] = useState('');
  const [catImage, setCatImage] = useState(null);

  const handleInputChange = (e) => {
    setStatusCode(e.target.value);
  };

  const fetchCatImage = () => {
    setCatImage(`https://http.cat/${statusCode}.jpg`);
  };

  return (
    <div style={cardStyle}>
    <h3>Status Cat API</h3>
      <input type="text" value={statusCode} onChange={handleInputChange} placeholder="Enter status code" />
      <button onClick={fetchCatImage}>Get Cat Image</button>
      {catImage && <img src={catImage} alt="Cat" style={imageStyle} />}
    </div>
  );
};

export default CatApp;