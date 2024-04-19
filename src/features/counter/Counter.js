import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterReducer';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const cardStyle = {
    border: '1px solid black',
    margin: '0.5em',
    margin: '0.5em',
    width: '16em',
    height: '16em',
    wordWrap: 'break-word'
  };

  return (
    <div style={cardStyle}>
      <h3>Counter in store</h3><br />
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default Counter;