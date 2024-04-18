import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue } from './fieldReducer';

function Field() {
  const field = useSelector(state => state.field.value);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFieldValue(event.target.value));
  };

  const formattedField = field.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);

  return (
    <div>
      {/* <input id="field" type="text" value={field} onChange={handleChange} /> */}
      <textarea value={field} onChange={handleChange} />
      <br></br>
      <span>{formattedField}</span>
    </div>
  );
}

export default Field;