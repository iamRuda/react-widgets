import './App.css';
import React from 'react';
import Counter from './features/counter/Counter';
import Field from './features/field/Field';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Field />
    </div>
  );
}

export default App;
