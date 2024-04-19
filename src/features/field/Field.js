import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue } from './fieldReducer';

const Field = () => {
  const field = useSelector(state => state.field.value);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    dispatch(setFieldValue(event.target.value));
  };

  const formattedField = field.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);

  const cardStyle = {
    border: '1px solid black',
    margin: '0.5em',
    padding: '0.5em',
    width: '15em',
    height: '15em',
    wordWrap: 'break-word'
  };

  const spanFormated = {
    autoWrap: 'true',
  };

  return (
    <div style={cardStyle}>
      <h3>Sticker in store</h3>
      {isEditing ? (
        <>
          <textarea value={field} onChange={handleChange} />
          <button onClick={() => setIsEditing(false)}>Done</button>
        </>
      ) : (
        <>
          <span style={spanFormated}>{formattedField}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Field;